"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold">My Website</span>
        <button
          className="sm:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      <div className={`${open ? "flex" : "hidden"} flex-col sm:flex sm:flex-row sm:justify-between sm:items-center`}>
        <Link href="/profile" className="p-2">Profile Summary</Link>
        <Link href="/testing" className="p-2">Testing</Link>
        <Link href="/skill" className="p-2">Skill Summary</Link>
        <Link href="/education" className="p-2">Education</Link>
        <Link href="/experience" className="p-2">Experience</Link>
        <Link href="/projects" className="p-2">Projects</Link>
        <Link href="/personal" className="p-2">Personal Details</Link>
      </div>
    </div>
  );
}
