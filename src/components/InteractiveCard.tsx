'use client'
import React from 'react';

export default function InteractiveCard({ children }: { children: React.ReactNode }) {
  
  // ฟังก์ชันจัดการ React Event เมื่อเมาส์ชี้และเอาออก
  function onMouseAction(event: React.MouseEvent<HTMLDivElement>, action: string) {
    if (action === 'over') {
      event.currentTarget.classList.remove('shadow-lg', 'bg-white');
      event.currentTarget.classList.add('shadow-2xl', 'bg-neutral-200');
    } else {
      event.currentTarget.classList.remove('shadow-2xl', 'bg-neutral-200');
      event.currentTarget.classList.add('shadow-lg', 'bg-white');
    }
  }

  return (
    <div 
      className="w-80 rounded-lg shadow-lg bg-white overflow-hidden transition-all duration-300"
      onMouseOver={(e) => onMouseAction(e, 'over')}
      onMouseOut={(e) => onMouseAction(e, 'out')}
    >
      {children}
    </div>
  );
}