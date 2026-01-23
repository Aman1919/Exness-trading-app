"use client";
import {useState} from 'react'
import {useRouter} from "next/navigation"
export default function SignupPage() {
const [email,setEmail]=useState("")
const [name,setName]=useState("")
const [password,setPassword]=useState("")
const router = useRouter();

  const handle= async () => {
    if(!email||!setPassword||!name){
      alert("ENTER EMAIL AND PASSWORD!!")
      return
    }
    const url = "http://localhost:5000/api/auth/signup"
    const response = await fetch(url,{
      method:"POST",
       headers: {
    "Content-Type": "application/json",
  },
      body:JSON.stringify({email,password,name,message:'signup'})
    })
    const data = await response.json();
    localStorage.setItem('token',data.token)
    console.log(data)
    router.replace("/dashboard");

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-zinc-900 p-6 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Create Account
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange ={(e)=>{setName(e.target.value)}}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange ={(e)=>{setEmail(e.target.value)}}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange ={(e)=>{setPassword(e.target.value)}}
            className="w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-2 rounded font-semibold hover:bg-zinc-200 transition"
            onClick={handle}
          >
            Sign Up
          </button>
        </div>

        <p className="text-sm text-center mt-4 text-zinc-400">
          Already have an account?{" "}
          <a href="/auth/signin" className="text-white underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
