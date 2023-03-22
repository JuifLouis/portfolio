import {
    CodeBracketIcon,
    CubeIcon,
    PlayIcon,
    SwatchIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Image from "next/image";

type Post = {
    title: String;
    href: string;
    technos: String[];
    icon: any;
    type: String;
    imageUrl: string;
};

export default function Projets() {
    const posts: Post[] = [
        {
            title: "Site de location immobilière FTPrima",
            href: "https://ftprima.fr/",
            technos: ["React", "Next", "Tailwind"],
            icon: () => <CodeBracketIcon className="w-6" />,
            type: "Design et développement",
            imageUrl: "/screens-projets/FTPrima.png",
        },
        {
            title: "Site vitrine Décow",
            href: "https://www.decow.fr/",
            technos: ["React", "Next", "Tailwind", "GSAP"],
            icon: () => <CodeBracketIcon className="w-6" />,
            type: "Design et développement",
            imageUrl: "/screens-projets/DecowScreen.png",
        },
        {
            title: "Site de blog Global Sorare",
            href: "https://globalsorare.com/",
            technos: ["React", "Next", "Tailwind", "Directus"],
            icon: () => <CodeBracketIcon className="w-6" />,
            type: "Design et développement",
            imageUrl: "/screens-projets/GlobalSorare.png",
        },
        {
            title: "Site e-commerce Bip et vous Plugin",
            href: "https://bipetvous-plugin.fr/",
            technos: ["React", "Next", "Tailwind"],
            icon: () => <CodeBracketIcon className="w-6" />,
            type: "Design et développement",
            imageUrl: "/screens-projets/BipetvousPlugin.png",
        },
        {
            title: "Challenge Daily UI",
            href: "https://dribbble.com/LouisJuif",
            technos: ["Figma"],
            icon: () => <SwatchIcon className="w-6" />,
            type: "Créations graphique",
            imageUrl: "/screens-projets/DailyUI.png",
        },
        {
            title: "Création identité visuelle",
            href: "https://www.behance.net/gallery/163224543/Gamaz-Branding",
            technos: ["Figma", "PhotoShop"],
            icon: () => <SwatchIcon className="w-6" />,
            type: "Identité visuelle",
            imageUrl: "/screens-projets/Gamaz.png",
        },
        {
            title: "Générateur de blagues",
            href: "https://generateur-blagues.web.app/",
            technos: ["React", "Tailwind", "API", "Firebase"],
            icon: () => <CodeBracketIcon className="w-6" />,
            type: "Développement",
            imageUrl: "/screens-projets/GenerateurBlagues.png",
        },
        {
            title: "Réalisation 3D animée",
            href: "../",
            technos: ["Spline"],
            icon: () => <CubeIcon className="w-6" />,
            type: "Réalisation 3D",
            imageUrl: "/screens-projets/Bureau3D.png",
        },
    ];

    return (
        <div className="min-h-screen flex items-center" id="projets">
            <div className="mx-auto max-w-7xl relative flex flex-col md:flex-row px-6 py-6 lg:py-10">
                <div className="py-14 flex items-center">
                    <div className="flex flex-col space-y-10 text-stone-900">
                        <h2 className="text-4xl">Mes projets</h2>
                        <p className="inline-block lg:flex text-2xl flex-col space-y-6 md:text-justify">
                            Voici les derniers projets sur lesquels j'ai
                            travaillé, celà peut aller d'un réel projet à un
                            simple petit projet fait dans mon temps libre afin
                            de m'entraîner sur des nouvelles technologies.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
                            {posts.reverse().map((post, i) => (
                                <div
                                    key={i}
                                    className="relative hover:scale-105 transition-all justify-end h-auto flex flex-col overflow-hidden rounded-2xl  px-8 pb-8 pt-20 sm:pt-32 shadow-xl"
                                >
                                    <a href={post.href} target="_blank">
                                        <span className="absolute shadow-xl top-5 flex space-x-2 items-center rounded-md bg-primary px-2.5 py-0.5 text-[20px] text-stone-900">
                                            {<post.icon />}
                                            <span>{post.type}</span>
                                        </span>
                                        <Image
                                            src={post.imageUrl}
                                            alt=""
                                            fill
                                            className="absolute inset-0 -z-10 h-full w-full object-cover"
                                        />
                                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-stone-900 via-stone-900/60" />
                                        <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                        <div className="flex flex-col space-y-2">
                                            <h3 className="text-3xl text-white">
                                                {post.title}
                                            </h3>
                                            <div className="flex flex-wrap items-center space-x-4 gap-y-1 overflow-hidden text-md leading-6 text-stone-300">
                                                {post.technos.map(
                                                    (techno, i) => (
                                                        <div
                                                            className="flex items-center space-x-4"
                                                            key={i}
                                                        >
                                                            {i != 0 && (
                                                                <svg
                                                                    viewBox="0 0 2 2"
                                                                    className="-ml-0.5 h-0.5 w-0.5 flex-none fill-stone-300"
                                                                >
                                                                    <circle
                                                                        cx={1}
                                                                        cy={1}
                                                                        r={1}
                                                                    />
                                                                </svg>
                                                            )}
                                                            <span className="text-xl text-primary">
                                                                {techno}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                        <a
                            href="/#contact"
                            className="w-full sm:w-fit text-center px-8 py-3 text-2xl text-stone-900 bg-primary rounded-2xl hover:scale-105 transition-all"
                        >
                            Contactez-moi
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
