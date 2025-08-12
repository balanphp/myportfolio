'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import HeaderComponent from './components/Header'

export default function Home() {
  const [data, setData] = useState('Balamurugan')
  return (
    <>
   <div>Yes this is working good.... {data}</div>
   </>
  );
}