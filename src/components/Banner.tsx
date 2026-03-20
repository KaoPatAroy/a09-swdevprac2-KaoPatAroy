"use client";

import styles from './banner.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Banner() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const { data: session } = useSession();
  
  // อ้างอิงพาธรูปภาพตามโจทย์
  const covers = [
    '/img/cover.jpg',
    '/img/cover2.jpg',
    '/img/cover3.jpg',
    '/img/cover4.jpg'
  ];

  return (
    <div 
      className={styles.banner} 
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      {/* แสดง Welcome user ที่มุมขวาบน เมื่อมีการ Log-in */}
      {session && (
        <div className="absolute top-5 right-5 z-30 text-white text-xl font-semibold bg-black bg-opacity-40 px-4 py-2 rounded-lg pointer-events-none">
          Welcome {session.user.name}
        </div>
      )}

      <img 
        src={covers[index]} 
        alt="Banner Background" 
        className={styles.bannerImage} 
      />
      <h1 className={styles.title}>where every event finds its venue</h1>
      <p className={styles.subtitle}>
        Finding the perfect venue has never been easier. Whether it&apos;s a wedding, corporate event, or private party.
      </p>

      {/* ปุ่ม Select Venue ที่มุมขวาล่าง */}
      <button
        onClick={(e) => {
          e.stopPropagation(); // ป้องกันไม่ให้ Event การคลิกปุ่มไปรบกวนการเปลี่ยนรูปภาพด้านหลัง
          router.push('/venue');
        }}
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          padding: '10px 20px',
          backgroundColor: 'white',
          color: 'black',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          zIndex: 30
        }}
      >
        Select Venue
      </button>
    </div>
  );
}