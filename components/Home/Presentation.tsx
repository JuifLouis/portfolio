import React from "react";

export default function Presentation() {
    const qualites = [
        {
            name: "Adaptatif",
        },
        {
            name: "Curieux",
        },
        {
            name: "Autonome",
        },
    ];

    const defauts = [
        {
            name: "Impatient",
        },
        {
            name: "Timide",
        },
        {
            name: "Obstiné",
        },
    ];

    return (
        <div className="min-h-screen flex items-center" id="presentation">
            <div className="mx-auto max-w-7xl relative flex flex-col md:flex-row px-6 py-6 lg:py-10">
                <div className="py-14 flex items-center">
                    <div className="flex flex-col space-y-10 text-stone-900">
                        <h2 className="text-4xl">Qui suis-je ?</h2>
                        <p className="inline-block lg:flex text-2xl flex-col space-y-6 md:text-justify">
                            <span>
                                Donc je m'appelle Louis JUIF et je travaille en
                                tant que Développeur front depuis quelques
                                années (3 ans) avec un attrait tout particulier
                                pour la phase de design, c'est pourquoi je me
                                suis lancé en octobre 2022 dans une formation
                                auto-financée, 100% télétravail et en totale
                                autonomie pour obtenir les compétences et un
                                Master de Directeur Artistique Numérique afin
                                d'avoir la possibilité de m'orienter dans ces
                                deux domaines d'activités qui sont pour moi dans
                                tous les cas, étroitement liés.
                            </span>
                            <span>
                                Étant donné que ma formation est totalement
                                modulable,{" "}
                                <a
                                    href="#contact"
                                    className="border-b-2 border-primary text-stone-500 inline-flex hover:text-dark-green hover:border-dark-green items-center"
                                >
                                    je reste à l'écoute de toute proposition.
                                </a>
                            </span>
                        </p>
                        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-16">
                            <div className="flex-auto">
                                <h3 className="text-3xl">
                                    Mes principales qualités +
                                </h3>
                                <dl className="mt-5 grid grid-cols-1 shadow-xl divide-y divide-gray-200 ring-1 ring-gray-900/10 overflow-hidden rounded-lg bg-white md:grid-cols-3 md:divide-y-0 md:divide-x">
                                    {qualites.map((item, i) => (
                                        <div
                                            key={i}
                                            className="px-4 py-5 sm:p-6"
                                        >
                                            <div className="text-2xl text-center">
                                                {item.name}
                                            </div>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                            <div className="flex-auto">
                                <h3 className="text-3xl">
                                    Mes principaux défauts -
                                </h3>
                                <dl className="mt-5 grid grid-cols-1 shadow-xl divide-y divide-gray-200 overflow-hidden ring-1 ring-gray-900/10 rounded-lg bg-white md:grid-cols-3 md:divide-y-0 md:divide-x">
                                    {defauts.map((item, i) => (
                                        <div
                                            key={i}
                                            className="px-4 py-5 sm:p-6"
                                        >
                                            <div className="text-2xl text-center">
                                                {item.name}
                                            </div>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                        <a
                            href="/#formationsExperiences"
                            className="w-full sm:w-fit text-center px-8 py-3 text-2xl text-stone-900 bg-primary rounded-2xl hover:scale-105 transition-all"
                        >
                            Voir mes formations et expériences
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
