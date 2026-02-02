import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const TacticalButton: React.FC<{ to: string; children: React.ReactNode; className: string }> = ({ to, children, className }) => {
  const [isActivating, setIsActivating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const navigate = useNavigate();

  const handleActivation = (e: React.MouseEvent | React.TouchEvent) => {
    if (isActivating) return;
    setIsActivating(true);
    // Sharp navigation for instant feel
    navigate(to);
  };

  const isActive = isHovered || isActivating || isTouched;

  return (
    <button 
      onClick={handleActivation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsTouched(false); }}
      onPointerDown={() => setIsTouched(true)}
      onPointerUp={() => setIsTouched(false)}
      onPointerCancel={() => setIsTouched(false)}
      onPointerLeave={() => setIsTouched(false)}
      className={`${className} relative transition-[transform,background-color,box-shadow] duration-150 cubic-bezier(0.23, 1, 0.32, 1) transform-gpu overflow-hidden select-none will-change-[transform,background-color,box-shadow] flex items-center justify-center ${
        isActive
          ? '!bg-blue-600 !text-white scale-[0.97] shadow-[0_15px_45px_rgba(59,130,246,0.3)]' 
          : 'active:scale-95'
      }`}
    >
      <div className={`w-full h-full flex items-center justify-center transition-[transform,opacity] duration-150 cubic-bezier(0.23, 1, 0.32, 1) px-6 ${isActive ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'}`}>
        {children}
      </div>
      <div className={`absolute inset-0 flex items-center justify-center font-syne font-black !text-white uppercase tracking-tighter text-xs sm:text-sm transition-[transform,opacity] duration-150 cubic-bezier(0.23, 1, 0.32, 1) ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
        <span className={isActivating ? 'animate-pulse' : ''}>
          {isActivating ? 'Linking...' : 'Book My Slot'}
        </span>
      </div>
      <div className={`absolute bottom-0 left-0 h-1 w-full bg-white/20 origin-left transition-transform duration-200 cubic-bezier(0.23, 1, 0.32, 1) ${isActivating ? 'scale-x-100' : 'scale-x-0'}`}></div>
    </button>
  );
};

export default TacticalButton;