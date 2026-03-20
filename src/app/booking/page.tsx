import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import getUserProfile from "@/libs/getUserProfile";
import BookingForm from "@/components/BookingForm";

export default async function Booking() {
  // ดึง Session ฝั่ง Server
  const session = await getServerSession(authOptions);
  let profile = null;

  // ถ้าล็อกอินแล้ว ให้ดึงข้อมูล Profile
  if (session) {
    const profileResponse = await getUserProfile(session.user.token);
    profile = profileResponse.data;
  }

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 pt-20">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Venue Booking</h1>
      
      {/* ส่วนแสดง User Profile ตามโจทย์ */}
      {profile ? (
        <div className="w-[100%] max-w-[500px] bg-gray-50 p-6 rounded-lg mb-4 shadow-sm text-black border">
          <h2 className="text-xl font-semibold mb-4 border-b pb-2">User Profile</h2>
          <p className="mb-2"><strong>Name:</strong> {profile.name}</p>
          <p className="mb-2"><strong>Email:</strong> {profile.email}</p>
          <p className="mb-2"><strong>Tel.:</strong> {profile.tel}</p>
          <p><strong>Member Since:</strong> {new Date(profile.createdAt).toLocaleDateString()}</p>
        </div>
      ) : (
        <p className="text-red-500 mb-4 font-medium">Please sign in to view your profile and make a booking.</p>
      )}

      {/* เรียกใช้ Form ที่แยกไว้ */}
      <BookingForm />
    </main>
  );
}