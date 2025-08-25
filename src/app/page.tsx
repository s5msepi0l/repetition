"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Card from "./components/card";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async() => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      setData((await data.json()).slice(0, 3));
      
      //console.log(json);
    })()
  }, []);

  if (data.length === 0)
    return (<p>Loading data...</p>)
  else
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
            From the blog
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600 dark:text-gray-300">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {data.map((post, index) => (
            <Card key={index} data={post}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}


