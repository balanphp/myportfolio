'use client'
import React, { useState } from "react";

export default function Home() {
  const [data ] = useState('Balamurugan')
  return (
    <>
   <div>Yes this is working good.... {data}</div>
   </>
  );
}