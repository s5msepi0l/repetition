"use client";

import React from "react";

type CardProps = {
	data: any;
};

function imageLink() {
  return `coffee${Math.floor(Math.random() * 3) + 1}.jpeg`;
}

export default function Card({ data }: CardProps) {
    // Provide fallback for image and post fields
    const post = {
        title: data?.title || "",
        description: data?.description || ""
    };

    return (
        <article className="flex flex-col items-start justify-between">
            <div className="relative w-full">
                <img
                    alt=""
                    src={imageLink()}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-2/1 lg:aspect-3/2 dark:bg-gray-800"
                />
                <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10" />
            </div>
            <div className="flex max-w-xl grow flex-col justify-between">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime="22/02/07" className="text-gray-500 dark:text-gray-400">
                        22/02/07
                    </time>
                </div>
                <div className="group relative grow">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                        <a href="google.com">
                            <span className="absolute inset-0" />
                            {post.title}
                        </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                    <img
                        alt=""
                        src="man.jpg"
                        className="size-10 rounded-full bg-gray-100 dark:bg-gray-800"
                    />
                    <div className="text-sm/6">
                        <p className="font-semibold text-gray-900 dark:text-white">
                            <a href="x.com">
                                <span className="absolute inset-0" />
                                Saddam hussein
                            </a>
                        </p>
                        <p className="text-gray-600 dark:text-gray-400"></p>
                    </div>
                </div>
            </div>
        </article>
    );
}