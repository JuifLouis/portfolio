import { MouseEvent, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type Navigation = {
    name: string;
    href: string;
};

export default function Navbar() {
    const navigation: Navigation[] = [
        { name: "Présentation", href: "/#presentation" },
        {
            name: "Formations / Expériences",
            href: "/#formationsExperiences",
        },
        { name: "Compétences", href: "/#competences" },
        { name: "Projets", href: "/#projets" },
    ];

    const [offsetLeft, setOffsetLeft] = useState<String>("0");
    const [offsetWidth, setOffsetWidth] = useState<String>("0");

    const handleMouseOver = (e: MouseEvent<HTMLAnchorElement>) => {
        const target = e.target as HTMLInputElement;
        setOffsetLeft(target.offsetLeft.toString());
        setOffsetWidth(target.offsetWidth.toString());
    };

    return (
        <nav className="absolute right-0 left-0 top-0 z-10 md:z-0">
            <Disclosure as="div" className="relative bg-primary">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-6 py-6 lg:py-10 flex justify-end">
                            <div className="relative hidden md:flex space-x-8 lg:space-x-10 items-center">
                                <div
                                    style={{
                                        left: offsetLeft + "px",
                                        width: offsetWidth + "px",
                                    }}
                                    className="absolute h-0.5 bg-dark-green -bottom-2 transition-all duration-300 rounded"
                                ></div>
                                {navigation.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.href}
                                        onMouseOver={handleMouseOver}
                                        className="text-xl lg:text-2xl text-stone-900 hover:text-dark-green"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <a
                                    href="/#contact"
                                    className="px-8 py-3 text-xl lg:text-2xl text-stone-900 bg-white rounded-2xl hover:scale-105 transition-all"
                                >
                                    Contact
                                </a>
                            </div>
                            <div className="flex items-center space-x-4 md:hidden">
                                <a
                                    href="/#contact"
                                    className="px-8 py-3 text-2xl text-stone-900 bg-white rounded-2xl hover:scale-105 transition-all"
                                >
                                    Contact
                                </a>
                                <Disclosure.Button className="text-stone-900 bg-white rounded-2xl p-3.5">
                                    {open ? (
                                        <XMarkIcon
                                            className="h-8 w-8"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <Bars3Icon
                                            className="h-8 w-8"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                        <Disclosure.Panel className="md:hidden px-6 pb-6 flex flex-col space-y-6 text-2xl">
                            {navigation.map((item, i) => (
                                <Disclosure.Button
                                    as="a"
                                    key={i}
                                    href={item.href}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <div className="relative">
                {/* Autre SVG = #D1DFCE */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#DEEADB"
                        fillOpacity="1"
                        d="M0,32L80,26.7C160,21,320,11,480,58.7C640,107,800,213,960,229.3C1120,245,1280,171,1360,133.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                    ></path>
                </svg>
            </div>
        </nav>
    );
}
