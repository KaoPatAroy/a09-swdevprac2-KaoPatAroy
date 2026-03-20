'use client'
import { useReducer } from 'react';
import Card from './Card';
import Link from 'next/link';

// 1. Mock ข้อมูลสถานที่จัดงานตามโจทย์ A07
const mockVenues = [
  { vid: '001', name: 'The Bloom Pavilion', image: '/img/bloom.jpg' },
  { vid: '002', name: 'Spark Space', image: '/img/sparkspace.jpg' },
  { vid: '003', name: 'The Grand Table', image: '/img/grandtable.jpg' }
];

const ratingReducer = (state: Map<string, number>, action: { type: string; venue: string; rating?: number }) => {
  switch (action.type) {
    case 'SET_RATING':
      const nextState = new Map(state);
      nextState.set(action.venue, action.rating || 0);
      return nextState;
    case 'REMOVE_RATING':
      const removedState = new Map(state);
      removedState.delete(action.venue);
      return removedState;
    default:
      return state;
  }
};

export default function CardPanel() {
  const [ratingMap, dispatch] = useReducer(ratingReducer, new Map([
    ['The Bloom Pavilion', 0],
    ['Spark Space', 0],
    ['The Grand Table', 0]
  ]));

  const handleRatingChange = (venue: string, rating: number | null) => {
    dispatch({ type: 'SET_RATING', venue, rating: rating || 0 });
  };

  return (
    <div>
      <div className="flex justify-center gap-6 p-10 bg-gray-100">
        {/* 2. ใช้ Loop ในการดึงข้อมูลมาวางบน card และครอบด้วย Link */}
        {mockVenues.map((venue) => (
          <Link href={`/venue/${venue.vid}`} key={venue.vid}>
            <Card
              venueName={venue.name}
              imgSrc={venue.image}
              rating={ratingMap.get(venue.name) ?? 0}
              onRatingChange={(value) => handleRatingChange(venue.name, value)}
            />
          </Link>
        ))}
      </div>

      {/* ส่วนแสดง Venue List with Ratings (โค้ดเดิม) */}
      <div className="flex justify-center pb-10 bg-gray-100">
        <div className="w-[80%] max-w-2xl bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Venue List with Ratings: {ratingMap.size}</h2>
          {Array.from(ratingMap.entries()).map(([venue, rating]) => (
            <div 
              key={venue} 
              data-testid={venue} 
              className="cursor-pointer py-2 border-b hover:bg-gray-50 transition-colors"
              onClick={() => dispatch({ type: 'REMOVE_RATING', venue })}
            >
              <span className="font-semibold">{venue}</span>: {rating}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}