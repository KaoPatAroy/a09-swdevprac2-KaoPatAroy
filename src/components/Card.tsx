import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

interface CardProps {
  venueName: string;
  imgSrc: string;
  rating?: number;
  onRatingChange?: (value: number | null) => void;
}

export default function Card({ venueName, imgSrc, rating, onRatingChange }: CardProps) {
  // สร้างตัวแปรเช็คว่ามีการส่ง props ของ rating หรือ onRatingChange มาหรือไม่
  const showRating = rating !== undefined || onRatingChange !== undefined;

  return (
    <InteractiveCard>
      <div className="relative h-48 w-full">
         <Image src={imgSrc} alt={venueName} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{venueName}</h3>
        
        {/* เช็คเงื่อนไข: ถ้า showRating เป็น true ถึงจะแสดง <Rating> */}
        {showRating && (
          <Rating
            id={`${venueName} Rating`}
            name={`${venueName} Rating`}
            data-testid={`${venueName} Rating`}
            value={rating || 0}
            onChange={(event, newValue) => {
              if (onRatingChange) onRatingChange(newValue);
            }}
            onClick={(e) => e.stopPropagation()} 
          />
        )}
        
      </div>
    </InteractiveCard>
  );
}