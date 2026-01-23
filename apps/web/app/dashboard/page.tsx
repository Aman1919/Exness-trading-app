"use client";

import { useEffect,useState } from "react";
import { useRouter } from "next/navigation";
import {SideBar} from "../../components/coinsSidebar"
import {NavBar} from '../../components/navbar'


export default function Dashboard() {
      const router = useRouter();
      const [user,setUser]=useState<any>(null);

      useEffect( () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/auth/signin");
    }
    async  function handle(){
      const url ="http://localhost:5000/api/auth/getuserdetails"
     const response = await fetch(url,{
        method:'GET',
               headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },

     })
     const data = await response.json()
     console.log(data)
     if(!data.user){
         router.replace("/auth/signin");
     }else{
        setUser(data.user)
     }

  }
  handle()
  }, [router]);

// if(!user)return <>no user or backend problem</>
    return (
        <div>
            <NavBar/>
            <SideBar/>
        </div>
    )
}