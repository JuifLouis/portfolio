import React from "react";
import Image from "next/image";

export default function Card({
    date,
    name,
    description,
    grid,
    src,
}: {
    date: String;
    name: String;
    description: String;
    grid: String;
    src: string;
}) {
    return (
        <div
            className={`flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-10 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-stone-900/10 sm:p-10 ${grid}`}
        >
            <Image src={src} alt="" width="80" height="80" />
            <div className="flex flex-col md:text-left space-y-2">
                <p className="font-semibold text-dark-green">{date}</p>
                <h3 className="text-3xl text-stone-900">{name}</h3>
                <p className="text-2xl text-stone-500">{description}</p>
            </div>
        </div>
    );
}
