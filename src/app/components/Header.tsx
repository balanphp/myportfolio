"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

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
        <Link 
          href="/profile" 
          className={`p-2 relative transition-all duration-300 ease-in-out ${
            isActive("/profile") 
              ? "text-[#40B5AD]" 
              : "hover:text-gray-300"
          } after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-[#40B5AD] after:transition-all after:duration-300 after:ease-in-out ${
            isActive("/profile") 
              ? "after:scale-x-100 after:opacity-100" 
              : "after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-50"
          }`}
        >
          Profile Summary
        </Link>
        
        <Link 
          href="/skill" 
          className={`p-2 relative transition-all duration-300 ease-in-out ${
            isActive("/skill") 
              ? "text-[#40B5AD]" 
              : "hover:text-gray-300"
          } after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-[#40B5AD] after:transition-all after:duration-300 after:ease-in-out ${
            isActive("/skill") 
              ? "after:scale-x-100 after:opacity-100" 
              : "after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-50"
          }`}
        >
          Skill Summary
        </Link>
        
        <Link 
          href="/education" 
          className={`p-2 relative transition-all duration-300 ease-in-out ${
            isActive("/education") 
              ? "text-[#40B5AD]" 
              : "hover:text-gray-300"
          } after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-[#40B5AD] after:transition-all after:duration-300 after:ease-in-out ${
            isActive("/education") 
              ? "after:scale-x-100 after:opacity-100" 
              : "after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-50"
          }`}
        >
          Education
        </Link>
        
        <Link 
          href="/experience" 
          className={`p-2 relative transition-all duration-300 ease-in-out ${
            isActive("/experience") 
              ? "text-[#40B5AD]" 
              : "hover:text-gray-300"
          } after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-[#40B5AD] after:transition-all after:duration-300 after:ease-in-out ${
            isActive("/experience") 
              ? "after:scale-x-100 after:opacity-100" 
              : "after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-50"
          }`}
        >
          Experience
        </Link>
        
        <Link 
          href="/projects" 
          className={`p-2 relative transition-all duration-300 ease-in-out ${
            isActive("/projects") 
              ? "text-[#40B5AD]" 
              : "hover:text-gray-300"
          } after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-[#40B5AD] after:transition-all after:duration-300 after:ease-in-out ${
            isActive("/projects") 
              ? "after:scale-x-100 after:opacity-100" 
              : "after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-50"
          }`}
        >
          Projects
        </Link>
        
        <Link 
          href="/personal" 
          className={`p-2 relative transition-all duration-300 ease-in-out ${
            isActive("/personal") 
              ? "text-[#40B5AD]" 
              : "hover:text-gray-300"
          } after:absolute after:bottom-0 after:left-2 after:right-2 after:h-0.5 after:bg-[#40B5AD] after:transition-all after:duration-300 after:ease-in-out ${
            isActive("/personal") 
              ? "after:scale-x-100 after:opacity-100" 
              : "after:scale-x-0 after:opacity-0 hover:after:scale-x-100 hover:after:opacity-50"
          }`}
        >
          Personal Details
        </Link>
      </div>
    </div>
  );
}