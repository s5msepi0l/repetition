"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Card from "./components/card";

type Item = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [data, setData] = useState<Item[]>([]);
  const [content, setContent] = useState<Item[]>([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [search, setSearch] = useState("");

  const filterData = (jsonArray: {title: string}[], query: string) =>  {

    const searchText = query.trim().toLowerCase();


    return jsonArray.filter(item =>
      item.title.toLowerCase().startsWith(searchText)
  );
  }

  const refreshSearch = () => {
  
    setContent(filterData(data, search).splice(0, 9))
  }

  const uploadData = (title: string, description: string) => {
    setData(data.push({title: title, description: description}));
  }

  useEffect(() => {
    (async() => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const Data = (await response.json())

      console.log(Data);
      setData(Data);

      setContent(Data.slice(0, 9));
      
      refreshSearch();
    })()
  }, []);

  useEffect(() => {

      
      setContent(data.slice(0, 9));
      
      refreshSearch();
  }, [data]);

  if (content.length === 0)
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
          
          <div className="flex flex-col items-center">
            <input
              className="text-gray-100 text-center text-lg mt-8 bg-gray-800 rounded-lg"
              placeholder="Search..." type="text"
              onChange={(e) => {
                setSearch(e.target.value);
                refreshSearch();
              }}
              />

              <div className="flex flex-col w-3/6 items-center bg-gray-700 mt-4 pb-6 rounded-md">
                
                <button
                  className="
                  mt-4
                  bg-gray-800 rounded-xl
                  p-2 text-gray-100 text-xl
                  "
                  onClick={() => {
                    uploadData(title, description);
                  }}>Upload</button>
                
                <form className="
                  mt-4
                  w-4/5
                  h-18
                  flex flex-col
                  justify-between
                  ">
                  <input placeholder="Title" className="text-gray-100 text-lg h-7 bg-gray-800 rounded-md text-center"
                  onChange={(e) => setTitle(e.target.value)}/>
                  
                  <input placeholder="Description" className="text-gray-100 text-lg h-7 bg-gray-800 rounded-md text-center" 
                  onChange={(e) => setDescription(e.target.value)}/>
                </form>
              </div>
          </div>
        </div>


        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {content.map((post, index) => (
            <Card key={index} data={post}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}


