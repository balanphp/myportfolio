'use client'

import { useEffect, useState } from "react";

export default function TestingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/myportfolio/api/users")
      .then((res) => res.json())
      .then((response) => {
        console.log("Full API response:", response);
        console.log("Users array:", response.users);
        setData(response.users || []);
      })
      .catch((error) => console.error("Error", error));
  }, []);

  console.log("myDatas__", data);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-8">Testing pages....</h2>
      
      <p>Found {data.length} users:</p>
      
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}