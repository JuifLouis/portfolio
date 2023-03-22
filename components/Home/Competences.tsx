import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import Card from "./Competences/Card";

type Note = {
    note: number;
    description: String;
};

type Techno = {
    name: String;
    note: number;
    src: string;
};

type TypeTechno = {
    type: String;
    technos: Techno[];
};

export default function Competences() {
    const notes: Note[] = [
        {
            note: 1,
            description: "Débutant sur cette technologie",
        },
        {
            note: 2,
            description: "Possède de bonnes bases sur cette technologie",
        },
        {
            note: 3,
            description:
                "Possède de très bonnes connaissances sur cette technologie",
        },
        {
            note: 4,
            description: "Expert sur cette technologie",
        },
    ];

    const typesTechnos: TypeTechno[] = [
        {
            type: "Développement front-end",
            technos: [
                {
                    name: "HTML",
                    note: 3,
                    src: "/logos-competences/HTML.png",
                },
                {
                    name: "CSS",
                    note: 3,
                    src: "/logos-competences/CSS.png",
                },
                {
                    name: "Sass",
                    note: 2,
                    src: "/logos-competences/Sass.png",
                },
                {
                    name: "JavaScript",
                    src: "/logos-competences/JavaScript.png",
                    note: 3,
                },
                {
                    name: "TypeScript",
                    note: 1,
                    src: "/logos-competences/TypeScript.png",
                },
                {
                    name: "React",
                    note: 3,
                    src: "/logos-competences/React.png",
                },
                {
                    name: "Next",
                    note: 3,
                    src: "/logos-competences/Next.png",
                },
                {
                    name: "Vue",
                    note: 2,
                    src: "/logos-competences/Vue.png",
                },
                {
                    name: "Nuxt",
                    note: 1,
                    src: "/logos-competences/Nuxt.png",
                },
                {
                    name: "Bootstrap",
                    note: 3,
                    src: "/logos-competences/Bootstrap.png",
                },
                {
                    name: "Tailwind",
                    note: 3,
                    src: "/logos-competences/Tailwind.png",
                },
                {
                    name: "Bulma",
                    note: 1,
                    src: "/logos-competences/Bulma.png",
                }
            ]
        },
        {
            type: "Développement back-end",
            technos: [
                {
                    name: "PHP",
                    note: 3,
                    src: "/logos-competences/PHP.png",
                },
                {
                    name: "Symfony",
                    note: 1,
                    src: "/logos-competences/Symfony.png",
                },
                {
                    name: "Laravel",
                    note: 1,
                    src: "/logos-competences/Laravel.png",
                }
            ]
        },
        {
            type: "Bases de données",
            technos: [
                {
                    name: "SQL",
                    note: 3,
                    src: "/logos-competences/SQL.png",
                },
                {
                    name: "MySQL",
                    note: 2,
                    src: "/logos-competences/MySQL.png",
                },
                {
                    name: "MongoDB",
                    note: 1,
                    src: "/logos-competences/MongoDB.png",
                },
                {
                    name: "Firebase",
                    note: 1,
                    src: "/logos-competences/Firebase.png",
                }
            ]
        },
        {
            type: "Versionning",
            technos: [
                {
                    name: "GitLab",
                    note: 2,
                    src: "/logos-competences/GitLab.png",
                },
                {
                    name: "GitHub",
                    note: 2,
                    src: "/logos-competences/GitHub.png",
                }
            ]
        },
        {
            type: "UX / UI Design",
            technos: [
                {
                    name: "Figma",
                    note: 3,
                    src: "/logos-competences/Figma.png",
                },
                {
                    name: "Adobe XD",
                    note: 3,
                    src: "/logos-competences/AdobeXD.png",
                },
                {
                    name: "Zeplin",
                    note: 1,
                    src: "/logos-competences/Zeplin.png",
                }
            ]
        },
        {
            type: "Graphisme / Motion Design / 3D",
            technos: [
                {
                    name: "PhotoShop",
                    note: 1,
                    src: "/logos-competences/PhotoShop.png",
                },
                {
                    name: "Illustrator",
                    note: 2,
                    src: "/logos-competences/Illustrator.png",
                },
                {
                    name: "AfterEffects",
                    note: 2,
                    src: "/logos-competences/AfterEffects.png",
                },
                {
                    name: "Spline",
                    note: 2,
                    src: "/logos-competences/Spline.png",
                }
            ]
        }
    ];

    function classNames(...classes: any) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <div className="min-h-screen flex items-center" id="competences">
            <div className="mx-auto max-w-7xl relative flex flex-col md:flex-row px-6 py-6 lg:py-10">
                <div className="py-14 flex items-center">
                    <div className="flex flex-col space-y-10 text-stone-900">
                        <h2 className="text-4xl">Mes compétences</h2>
                        <p className="inline-block lg:flex text-2xl flex-col space-y-6 md:text-justify">
                            J'ai noté mes compétences avec une note allant de 1
                            étoile à 4 étoiles selon mes propres définitions.
                        </p>
                        <div className="flex flex-col items-start space-y-3 md:space-y-2">
                            {notes.map((note, i) => (
                                <div className="flex items-center" key={i}>
                                    <div className="flex">
                                        {[0, 1, 2, 3].map((rating) => (
                                            <StarIcon
                                                key={rating}
                                                className={classNames(
                                                    note.note > rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-200",
                                                    "h-5 w-5 flex-none"
                                                )}
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                    <p className="ml-4 text-2xl">
                                        {note.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col justify-between space-y-12">
                            {typesTechnos.map((type, i) => (
                                <div key={i}>
                                    <div className="flex-auto border-b-2 border-primary">
                                        <h3 className="text-3xl text-stone-900">
                                            {type.type}
                                        </h3>
                                    </div>
                                    <ul
                                        role="list"
                                        className="mt-3 grid grid-cols-2 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-5"
                                    >
                                        {type.technos.map((techno, i) => (
                                            <Card key={i} name={techno.name} note={techno.note} src={techno.src} />
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <a
                            href="/#projets"
                            className="w-full sm:w-fit text-center px-8 py-3 text-2xl text-stone-900 bg-primary rounded-2xl hover:scale-105 transition-all"
                        >
                            Voir mes projets
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
