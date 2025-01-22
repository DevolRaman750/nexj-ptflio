'use client'
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Main from "@/components/Main";
import RecentProjects from "@/components/RecentProjects";
import {  FloatingNavbar } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { useEffect } from "react";



export default function Home() {
  useEffect(() => {
    // This code will only run on the client side
    if (typeof document !== 'undefined') {
      // Your client-side code here
    }
  }, []);

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto overflow-clip sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavbar NavItems={
          navItems
        }

        />
        <Main/>
        <Grid/>
        <RecentProjects/>
        <Footer/>
      </div>
    </main>
  );
}
