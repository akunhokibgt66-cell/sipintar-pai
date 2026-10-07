export interface StudentRecord {
  id: string;
  name: string;
  kelas: string;
  school: string;
  xp: number;
  completedMateriCount: number;
  totalMateriTarget: number;
  lastCbtScore: number | null; // 0 - 100
  cbtDate?: string;
  zakatDoneCount: number;
  akhlakQuizCount: number;
  lastActive: string; // ISO date
  status: 'Aktif' | 'Selesai Sesi';
}

export interface CloudSheetConfig {
  webhookUrl: string; // Google Apps Script Web App URL or SheetDB endpoint
  sheetName: string;
  autoSync: boolean;
  lastSyncTime?: string;
}

const STORAGE_KEY_STUDENTS = 'mapsi_all_students_db';
const STORAGE_KEY_CONFIG = 'mapsi_cloudsheet_config';

// BroadcastChannel for instant multi-tab sync
let syncChannel: BroadcastChannel | null = null;
if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
  try {
    syncChannel = new BroadcastChannel('mapsi_student_sync_channel');
  } catch {
    syncChannel = null;
  }
}

export const defaultCloudSheetConfig: CloudSheetConfig = {
  webhookUrl: '',
  sheetName: 'Rekapitulasi_Siswa_MAPSI_2026',
  autoSync: true
};

export const getCloudSheetConfig = (): CloudSheetConfig => {
  if (typeof window === 'undefined') return defaultCloudSheetConfig;
  const saved = localStorage.getItem(STORAGE_KEY_CONFIG);
  if (!saved) return defaultCloudSheetConfig;
  try {
    return { ...defaultCloudSheetConfig, ...JSON.parse(saved) };
  } catch {
    return defaultCloudSheetConfig;
  }
};

export const saveCloudSheetConfig = (cfg: CloudSheetConfig): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_CONFIG, JSON.stringify(cfg));
};

export const getAllStudents = (): StudentRecord[] => {
  if (typeof window === 'undefined') return [];
  const raw = localStorage.getItem(STORAGE_KEY_STUDENTS);
  if (!raw) {
    return [];
  }
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const saveAllStudents = (students: StudentRecord[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(students));
  if (syncChannel) {
    syncChannel.postMessage({ type: 'UPDATE_STUDENTS', timestamp: Date.now() });
  }
};

export const getOrCreateStudentRecord = (
  name: string,
  kelas: string,
  school: string = 'SD Negeri Kauman 01'
): StudentRecord => {
  const students = getAllStudents();
  const id = `${name.toLowerCase().replace(/\s+/g, '_')}_${kelas.toLowerCase().replace(/\s+/g, '_')}`;
  const existing = students.find(s => s.id === id || s.name.toLowerCase() === name.toLowerCase());

  if (existing) {
    existing.lastActive = new Date().toISOString();
    existing.status = 'Aktif';
    saveAllStudents(students);
    pushStudentsToCloud([existing]);
    return existing;
  }

  const newStudent: StudentRecord = {
    id,
    name,
    kelas,
    school: school || 'SD Negeri Kauman 01',
    xp: 50,
    completedMateriCount: 0,
    totalMateriTarget: 72,
    lastCbtScore: null,
    zakatDoneCount: 0,
    akhlakQuizCount: 0,
    lastActive: new Date().toISOString(),
    status: 'Aktif'
  };

  students.unshift(newStudent);
  saveAllStudents(students);
  triggerAutoSync([newStudent]);
  return newStudent;
};

export const updateStudentProgress = (
  studentIdOrName: string,
  updates: Partial<StudentRecord>
): void => {
  const students = getAllStudents();
  const index = students.findIndex(
    s => s.id === studentIdOrName || s.name.toLowerCase() === studentIdOrName.toLowerCase()
  );

  if (index !== -1) {
    const updated = Object.assign({}, students[index], updates, {
      lastActive: new Date().toISOString(),
      status: 'Aktif' as const
    });
    students[index] = updated;
    saveAllStudents(students);
    triggerAutoSync([updated]);
  }
};

// Send data to external Google Sheets / CloudSheet Webhook
export const sendToWebhook = async (
  students: StudentRecord[],
  webhookUrl: string
): Promise<{ success: boolean; message: string }> => {
  if (!webhookUrl || !webhookUrl.trim()) {
    return { 
      success: false, 
      message: 'URL Webhook Google Apps Script belum diisi di pengaturan!' 
    };
  }

  try {
    const payload = {
      timestamp: new Date().toISOString(),
      source: 'Sahabat_MAPSI_Web_App',
      count: students.length,
      students: students.map(s => ({
        id: s.id,
        nama: s.name,
        kelas: s.kelas,
        sekolah: s.school,
        totalXp: s.xp,
        materiSelesai: `${s.completedMateriCount}/72`,
        persenMateri: `${Math.round((s.completedMateriCount / 72) * 100)}%`,
        skorCbt: s.lastCbtScore !== null ? `${s.lastCbtScore}/100` : 'Belum Ujian',
        latihanZakat: `${s.zakatDoneCount} Kasus`,
        kuisAkhlak: `${s.akhlakQuizCount} Kuis`,
        terakhirAktif: new Date(s.lastActive).toLocaleString('id-ID'),
        status: s.status
      }))
    };

    // Use mode: 'no-cors' for Google Apps Script Web Apps which redirect to googleusercontent
    await fetch(webhookUrl.trim(), {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload),
      mode: 'no-cors'
    });

    const cfg = getCloudSheetConfig();
    cfg.lastSyncTime = new Date().toISOString();
    saveCloudSheetConfig(cfg);

    return { 
      success: true, 
      message: `Berhasil mengirim ${students.length} data santri ke Spreadsheet!` 
    };
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    return { 
      success: false, 
      message: `Gagal mengirim ke webhook: ${errMsg}` 
    };
  }
};

// Push records to the central Lovable Cloud database (all devices share it).
export const pushStudentsToCloud = (records: StudentRecord[]) => {
  if (typeof window === 'undefined') return;
  import('@/lib/students.functions')
    .then(({ upsertStudentCloud }) =>
      Promise.all(records.map(r => upsertStudentCloud({ data: { ...r, cbtDate: r.cbtDate ?? null } })))
    )
    .catch(err => console.warn('[Cloud] Gagal menyimpan data siswa:', err));
};

// Fetch the central roster (teacher password required) and merge into local storage.
export const pullStudentsFromCloud = async (password: string): Promise<boolean> => {
  try {
    const { listStudentsCloud } = await import('@/lib/students.functions');
    const res = await listStudentsCloud({ data: { password } });
    if (!res.ok) return false;
    const local = getAllStudents();
    const map = new Map(local.map(s => [s.id, s]));
    res.students.forEach(s => map.set(s.id, { ...s, cbtDate: s.cbtDate ?? undefined } as StudentRecord));
    const merged = Array.from(map.values()).sort((a, b) => b.lastActive.localeCompare(a.lastActive));
    if (typeof window !== 'undefined') localStorage.setItem(STORAGE_KEY_STUDENTS, JSON.stringify(merged));
    return true;
  } catch (err) {
    console.warn('[Cloud] Gagal memuat data siswa:', err);
    return false;
  }
};

const triggerAutoSync = (studentsToSync: StudentRecord[]) => {
  pushStudentsToCloud(studentsToSync);
  const cfg = getCloudSheetConfig();
  if (cfg.autoSync && cfg.webhookUrl) {
    sendToWebhook(studentsToSync, cfg.webhookUrl).catch(() => {});
  }
};

// Sync a student login event directly to the CloudSheet webhook (Google Apps Script).
// Called right after a student submits the login form so logins from HP appear
// instantly in the spreadsheet. Never blocks the login flow: failures are only logged.
export const syncLoginToCloudSheet = async (
  name: string,
  kelas: string,
  school: string = 'SD Negeri Kauman 01'
): Promise<{ success: boolean; message: string }> => {
  const cfg = getCloudSheetConfig();
  if (!cfg.webhookUrl || !cfg.webhookUrl.trim()) {
    return {
      success: false,
      message: 'URL Webhook Google Apps Script belum diisi di pengaturan CloudSheet!'
    };
  }

  // Make sure the student record exists / is refreshed locally first
  const record = getOrCreateStudentRecord(name, kelas, school);
  const loginTime = new Date().toISOString();

  const payload = {
    event: 'login',
    timestamp: loginTime,
    source: 'Sahabat_MAPSI_Web_App',
    count: 1,
    students: [
      {
        id: record.id,
        nama: record.name,
        kelas: record.kelas,
        sekolah: record.school,
        totalXp: record.xp,
        materiSelesai: `${record.completedMateriCount}/72`,
        persenMateri: `${Math.round((record.completedMateriCount / 72) * 100)}%`,
        skorCbt: record.lastCbtScore !== null ? `${record.lastCbtScore}/100` : 'Belum Ujian',
        latihanZakat: `${record.zakatDoneCount} Kasus`,
        kuisAkhlak: `${record.akhlakQuizCount} Kuis`,
        terakhirAktif: new Date(loginTime).toLocaleString('id-ID'),
        status: 'Aktif'
      }
    ]
  };

  try {
    // mode: 'no-cors' + text/plain is the safe pattern for Google Apps Script Web Apps
    await fetch(cfg.webhookUrl.trim(), {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8'
      },
      body: JSON.stringify(payload),
      mode: 'no-cors'
    });

    cfg.lastSyncTime = loginTime;
    saveCloudSheetConfig(cfg);

    return {
      success: true,
      message: `Login ${record.name} berhasil disinkronkan ke CloudSheet!`
    };
  } catch (err: unknown) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.warn('[CloudSheet] Gagal sinkron login:', errMsg);
    return {
      success: false,
      message: `Gagal mengirim login ke webhook: ${errMsg}`
    };
  }
};

// Seed initial realistic student data if roster is empty
export const seedInitialDemoStudents = (): void => {
  const existing = getAllStudents();
  if (existing.length > 0) return;

  const demoList: StudentRecord[] = [
    {
      id: 'ahmad_fauzan_k5',
      name: 'Ahmad Fauzan Pratama',
      kelas: 'Kelas 5 SD',
      school: 'SD Negeri Kauman 01',
      xp: 480,
      completedMateriCount: 28,
      totalMateriTarget: 72,
      lastCbtScore: 92,
      cbtDate: new Date(Date.now() - 3600000 * 2).toISOString(),
      zakatDoneCount: 4,
      akhlakQuizCount: 8,
      lastActive: new Date(Date.now() - 60000 * 5).toISOString(),
      status: 'Aktif'
    },
    {
      id: 'fatimah_azzahra_k5',
      name: 'Fatimah Az-Zahra',
      kelas: 'Kelas 5 SD',
      school: 'SD Islam Terpadu Bina Insan',
      xp: 620,
      completedMateriCount: 42,
      totalMateriTarget: 72,
      lastCbtScore: 96,
      cbtDate: new Date(Date.now() - 3600000 * 5).toISOString(),
      zakatDoneCount: 5,
      akhlakQuizCount: 12,
      lastActive: new Date(Date.now() - 60000 * 18).toISOString(),
      status: 'Aktif'
    },
    {
      id: 'muhammad_bilal_k6',
      name: 'Muhammad Bilal Ramadhan',
      kelas: 'Kelas 6 SD',
      school: 'SD Negeri 02 Batang',
      xp: 350,
      completedMateriCount: 19,
      totalMateriTarget: 72,
      lastCbtScore: 84,
      cbtDate: new Date(Date.now() - 3600000 * 24).toISOString(),
      zakatDoneCount: 3,
      akhlakQuizCount: 5,
      lastActive: new Date(Date.now() - 3600000 * 3).toISOString(),
      status: 'Selesai Sesi'
    },
    {
      id: 'aisyah_nurul_huda_k4',
      name: 'Aisyah Nurul Huda',
      kelas: 'Kelas 4 SD',
      school: 'SD Muhammadiyah Batang',
      xp: 220,
      completedMateriCount: 14,
      totalMateriTarget: 72,
      lastCbtScore: 80,
      cbtDate: new Date(Date.now() - 3600000 * 36).toISOString(),
      zakatDoneCount: 2,
      akhlakQuizCount: 4,
      lastActive: new Date(Date.now() - 3600000 * 6).toISOString(),
      status: 'Selesai Sesi'
    },
    {
      id: 'hafidz_al_ghifari_k6',
      name: 'Hafidz Al-Ghifari',
      kelas: 'Kelas 6 SD',
      school: 'SD Negeri Sambong 01',
      xp: 750,
      completedMateriCount: 56,
      totalMateriTarget: 72,
      lastCbtScore: 100,
      cbtDate: new Date(Date.now() - 3600000 * 8).toISOString(),
      zakatDoneCount: 6,
      akhlakQuizCount: 15,
      lastActive: new Date(Date.now() - 60000 * 30).toISOString(),
      status: 'Aktif'
    }
  ];

  saveAllStudents(demoList);
};

// Export to CSV file
export const exportStudentsToCsv = (students: StudentRecord[]): void => {
  const headers = [
    'No',
    'Nama Lengkap',
    'Kelas',
    'Asal Sekolah',
    'Total XP',
    'Materi Tuntas',
    'Target Materi',
    'Persentase Materi',
    'Nilai CBT Terakhir',
    'Latihan Zakat',
    'Kuis Akhlak',
    'Waktu Terakhir Aktif',
    'Status'
  ];

  const rows = students.map((s, idx) => [
    idx + 1,
    `"${s.name.replace(/"/g, '""')}"`,
    `"${s.kelas}"`,
    `"${s.school.replace(/"/g, '""')}"`,
    s.xp,
    s.completedMateriCount,
    s.totalMateriTarget,
    `${Math.round((s.completedMateriCount / s.totalMateriTarget) * 100)}%`,
    s.lastCbtScore !== null ? s.lastCbtScore : '-',
    s.zakatDoneCount,
    s.akhlakQuizCount,
    `"${new Date(s.lastActive).toLocaleString('id-ID')}"`,
    `"${s.status}"`
  ]);

  const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(r => r.join(','))].join('\r\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `Rekapitulasi_Progress_Siswa_MAPSI_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// Copy TSV (Tab Separated) to clipboard for direct Ctrl+V into Google Sheets
export const copyStudentsForSpreadsheet = async (students: StudentRecord[]): Promise<boolean> => {
  const headers = [
    'No',
    'Nama Lengkap',
    'Kelas',
    'Asal Sekolah',
    'Total XP',
    'Materi Tuntas (x/72)',
    '% Materi',
    'Skor CBT',
    'Latihan Zakat',
    'Kuis Akhlak',
    'Terakhir Aktif',
    'Status'
  ];

  const rows = students.map((s, idx) => [
    idx + 1,
    s.name,
    s.kelas,
    s.school,
    s.xp,
    `${s.completedMateriCount}/${s.totalMateriTarget}`,
    `${Math.round((s.completedMateriCount / s.totalMateriTarget) * 100)}%`,
    s.lastCbtScore !== null ? s.lastCbtScore : 'Belum Ujian',
    s.zakatDoneCount,
    s.akhlakQuizCount,
    new Date(s.lastActive).toLocaleString('id-ID'),
    s.status
  ]);

  const tsv = [headers.join('\t'), ...rows.map(r => r.join('\t'))].join('\n');

  try {
    await navigator.clipboard.writeText(tsv);
    return true;
  } catch {
    return false;
  }
};

// Built-in Google Apps Script template for teachers
export const getGoogleAppsScriptTemplate = (): string => {
  return `/**
 * GOOGLE APPS SCRIPT - WEBHOOK SINKRONISASI SAHABAT MAPSI 2026
 * Petunjuk Pemasangan (Hanya 1 Menit):
 * 1. Buat Google Spreadsheet baru di Google Drive Anda.
 * 2. Klik menu: Extensions (Ekstensi) > Apps Script.
 * 3. Hapus seluruh isi kode bawaan, lalu paste kode di bawah ini.
 * 4. Klik tombol "Deploy" (Terapkan) di kanan atas > "New deployment" (Penerapan baru).
 * 5. Pilih jenis: "Web app" (Aplikasi Web).
 * 6. Set "Execute as": Me (Saya).
 * 7. Set "Who has access": "Anyone" (Siapa saja).
 * 8. Klik "Deploy" > Salin URL Web App yang muncul > Paste ke kolom Webhook di Aplikasi Sahabat MAPSI!
 */

function doPost(e) {
  try {
    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Pastikan baris judul (header) sudah ada
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Waktu Masuk",
        "Nama Siswa",
        "Kelas",
        "Asal Sekolah",
        "Total XP",
        "Materi Tuntas (72)",
        "Persentase Materi",
        "Skor CBT",
        "Latihan Zakat",
        "Kuis Akhlak",
        "Waktu Terakhir Aktif",
        "Status"
      ]);
      // Format tebal pada baris judul
      sheet.getRange(1, 1, 1, 12).setFontWeight("bold").setBackground("#D1E7DD");
    }

    var students = data.students || [];
    var existingData = sheet.getDataRange().getValues();
    
    for (var i = 0; i < students.length; i++) {
      var s = students[i];
      var rowIndex = -1;
      
      // Cari jika siswa sudah ada berdasarkan Nama & Kelas di kolom B & C
      for (var r = 1; r < existingData.length; r++) {
        if (existingData[r][1] === s.nama && existingData[r][2] === s.kelas) {
          rowIndex = r + 1;
          break;
        }
      }
      
      var rowValues = [
        new Date(),
        s.nama,
        s.kelas,
        s.sekolah,
        s.totalXp,
        s.materiSelesai,
        s.persenMateri,
        s.skorCbt,
        s.latihanZakat,
        s.kuisAkhlak,
        s.terakhirAktif,
        s.status
      ];
      
      if (rowIndex > 0) {
        // Update baris yang sudah ada
        sheet.getRange(rowIndex, 1, 1, 12).setValues([rowValues]);
      } else {
        // Tambah baris baru
        sheet.appendRow(rowValues);
      }
    }
    
    return ContentService.createTextOutput(JSON.stringify({ status: "success", count: students.length }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}`;
};
