import Link from "next/link";
import Card from "./Card";
// ระบุ path ให้ตรงกับที่ไฟล์ interface.ts คุณอยู่ (ดูจากรูปน่าจะอยู่ที่ root หรือ src)
import { VenueJson } from "../../interface"; 

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
  const venueReady = await venuesJson;

  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around", padding: "10px" }}>
      {venueReady.data.map((venueItem) => (
        <Link href={`/venue/${venueItem.id}`} key={venueItem.id}>
          {/* ส่งแค่ props ที่จำเป็น โดยไม่ต้องส่ง rating */}
          <Card venueName={venueItem.name} imgSrc={venueItem.picture} />
        </Link>
      ))}
    </div>
  );
}