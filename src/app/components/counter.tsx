"use client";

import React, { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    
    return (
    <div className="ml-0 flex justify-between items-center">
        <h1 className="text-gray-100 font-bold text-3xl">{count}</h1>
        
        <div className="ml-4 flex flex-col">
        
            <button 
                className="
                text-gray-100
                font-bold
                text-xl
                "        
                onClick={() => setCount(count + 1)}
                >Increment</button>
            
            <button 
                className="
                text-gray-100
                font-bold
                text-xl
                "        
                onClick={() => setCount(count -1)}
            >Decrement</button>
        </div>
    </div>)
}