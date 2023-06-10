import LoginPage from "@/components/LoginPage";
import MainPage from "@/components/MainPage";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      {!session ? (
        <LoginPage />
      ) : (
        <>
          <MainPage />
        </>
      )}
    </>
  );
}

export default Home;
