import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

export default function Card({
    name,
    note,
    src,
}: {
    name: String;
    note: number;
    src: string;
}) {
    function classNames(...classes: any) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <li className="col-span-1 flex flex-col lg:flex-row text-center lg:text-left items-center rounded-md shadow-sm border border-gray-200 px-4 py-2">
            <div className="relative w-16 h-16">
                <Image src={src} alt="" fill objectFit="contain" />
            </div>
            <div className="flex flex-1 items-center justify-between rounded-r-md bg-white">
                <div className="px-4 py-2">
                    <h4 className="text-2xl text-stone-900">{name}</h4>
                    <div className="flex gap-x-1">
                        {[0, 1, 2, 3].map((rating) => (
                            <StarIcon
                                key={rating}
                                className={classNames(
                                    note > rating
                                        ? "text-yellow-400"
                                        : "text-gray-200",
                                    "h-5 w-5 flex-none"
                                )}
                                aria-hidden="true"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </li>
    );
}
