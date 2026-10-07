import React from 'react';
import { 
  BookOpen, 
  ShieldCheck, 
  HeartHandshake, 
  Sparkles, 
  Compass, 
  Languages, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { ScopeCategory, MateriItem } from '../types';

interface ScopeCardProps {
  category: ScopeCategory;
  materiList: MateriItem[];
  completedIds: string[];
  isSelected: boolean;
  onSelect: () => void;
}

export const ScopeCard: React.FC<ScopeCardProps> = ({
  category,
  materiList,
  completedIds,
  isSelected,
  onSelect
}) => {
  const completedCount = materiList.filter(m => completedIds.includes(m.id)).length;
  const progressPercent = Math.round((completedCount / category.totalMateri) * 100);

  const getIcon = (name: string) => {
    switch (name) {
      case 'BookOpen': return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Compass': return <Compass className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Languages': return <Languages className="w-5 h-5 sm:w-6 sm:h-6" />;
      default: return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  const getColorClasses = (color: string, active: boolean) => {
    if (active) {
      switch (color) {
        case 'emerald': return 'border-emerald-500 ring-2 ring-emerald-500/30 bg-emerald-50/50 shadow-md';
        case 'sky': return 'border-sky-500 ring-2 ring-sky-500/30 bg-sky-50/50 shadow-md';
        case 'amber': return 'border-amber-500 ring-2 ring-amber-500/30 bg-amber-50/50 shadow-md';
        case 'indigo': return 'border-indigo-500 ring-2 ring-indigo-500/30 bg-indigo-50/50 shadow-md';
        case 'rose': return 'border-rose-500 ring-2 ring-rose-500/30 bg-rose-50/50 shadow-md';
        case 'teal': return 'border-teal-500 ring-2 ring-teal-500/30 bg-teal-50/50 shadow-md';
        default: return 'border-emerald-500 ring-2 ring-emerald-500/30 bg-emerald-50/50 shadow-md';
      }
    }
    return 'border-slate-200/90 hover:border-slate-300 hover:shadow-xs bg-white';
  };

  const getIconBg = (color: string) => {
    switch (color) {
      case 'emerald': return 'bg-emerald-600 text-white';
      case 'sky': return 'bg-sky-600 text-white';
      case 'amber': return 'bg-amber-600 text-white';
      case 'indigo': return 'bg-indigo-600 text-white';
      case 'rose': return 'bg-rose-600 text-white';
      case 'teal': return 'bg-teal-600 text-white';
      default: return 'bg-emerald-600 text-white';
    }
  };

  return (
    <div
      onClick={onSelect}
      className={`p-5 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between select-none ${getColorClasses(
        category.color,
        isSelected
      )}`}
    >
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center shadow-xs shrink-0 ${getIconBg(category.color)}`}>
              {getIcon(category.iconName)}
            </div>
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                Ruang Lingkup {category.nomorSurat}
              </span>
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
                {category.title}
              </h3>
            </div>
          </div>

          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 shrink-0">
            {category.totalMateri} Bab
          </span>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2">
          {category.subtitle}
        </p>
      </div>

      <div className="pt-4 mt-3 border-t border-slate-100/80">
        <div className="flex items-center justify-between text-xs mb-1.5 font-bold">
          <span className="text-slate-500">Progres Belajar</span>
          <span className="text-emerald-700">{completedCount} / {category.totalMateri} ({progressPercent}%)</span>
        </div>
        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
          <div 
            className="h-full bg-linear-to-r from-emerald-500 to-teal-500 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};
