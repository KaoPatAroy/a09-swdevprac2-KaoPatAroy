export default async function userLogIn(userEmail: string, userPassword: string) {
  // ใช้ URL สำรองตามที่เคยแก้ปัญหามาใน A08 เพื่อความชัวร์ หรือใช้ตัวหลักถ้าไม่ติดปัญหา
  const response = await fetch("https://a08-venue-explorer-backend-2.vercel.app/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: userEmail,
      password: userPassword,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to log in");
  }

  return await response.json();
}