import Image from 'next/image';
import getVenue from '@/libs/getVenue';

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  // รอรับค่า params แบบ Promise
  const resolvedParams = await params;
  
  // เรียกใช้ API เพื่อดึงข้อมูลสถานที่ตาม vid
  const venueDetail = await getVenue(resolvedParams.vid);
  const venue = venueDetail.data;

  return (
    <main className="text-center p-10 pt-20">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">{venue.name}</h1>
      <div className="relative w-full max-w-3xl h-[400px] mx-auto rounded-lg overflow-hidden shadow-2xl mb-8">
        <Image src={venue.picture} alt={venue.name} fill className="object-cover" />
      </div>
      {/* ข้อมูลรายละเอียด */}
      <div className="text-left max-w-3xl mx-auto bg-gray-50 p-6 rounded-lg shadow-md">
        <p className="mb-2"><strong>Name:</strong> {venue.name}</p>
        <p className="mb-2"><strong>Address:</strong> {venue.address}</p>
        <p className="mb-2"><strong>District:</strong> {venue.district}</p>
        <p className="mb-2"><strong>Postal Code:</strong> {venue.postalcode}</p>
        <p className="mb-2"><strong>Tel:</strong> {venue.tel}</p>
        <p className="mb-2"><strong>Daily Rate:</strong> {venue.dailyrate}</p>
      </div>
    </main>
  );
}