'use client'
import Header from "./components/Header";
import Banner from "./components/Banner";
import NewTour from "./components/NewTour";
import ExplodeTour from "./components/ExplodeTour";
import Testimony from "./components/Testimony";
import Footer from "./components/Footer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  const { data: session, status } = useSession();
  console.log(session)
  console.log(status)

  const router = useRouter();

  // useEffect(() => {
  //   if (status === 'unauthenticated') {
  //     router.push('/api/auth/signin');
  //   }
  // }, [router, status])

  return (
    <div className="h-screen bg-white">
      <Header />
      <Banner />
      <NewTour />
      <ExplodeTour/>
      <Testimony />
      <Footer/>
    </div>
  );
}
