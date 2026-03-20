import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export default function VenuePage() {
  const venues = getVenues(); // ได้เป็น Promise ออกมา

  return (
    <main>
      <div className="text-center mt-10 mb-5">
        <h1 className="text-2xl font-semibold">Select your venue</h1>
        <p className="text-gray-500">Explore 3 fabulous venues in our venue catalog</p>
      </div>
      <VenueCatalog venuesJson={venues} />
    </main>
  );
}