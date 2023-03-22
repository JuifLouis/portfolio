import React from "react";
import Card from "./FormationsExperiences/Card";

type FormationExperience = {
    date: String;
    name: String;
    description: String;
    grid: String;
    src: string;
};

export default function FormationsExperiences() {
    const formationsExperiences: FormationExperience[] = [
        {
            date: "Octobre 2022 -  Décembre 2023",
            name: "Studi - Télétravail (en cours)",
            description: "Mastère Directeur Artistique Numérique (BAC+5)",
            grid: "col-span-2 row-start-2 md:col-span-1",
            src: "/logos-formations-experiences/Studi.png",
        },
        {
            date: "Novembre 2021 - Août 2022",
            name: "Odylae - Télétravail",
            description: "CDI Développeur front-end",
            grid: "col-span-2 md:col-span-1 md:col-start-2 md:row-start-3",
            src: "/logos-formations-experiences/Decow.png",
        },
        {
            date: "Juillet 2021 - Octobre 2021",
            name: "Docaposte Applicam - Metz",
            description: "CDD Développeur front-end",
            grid: "col-span-2 md:col-span-1 md:col-start-2 md:row-start-4",
            src: "/logos-formations-experiences/Docaposte.png",
        },
        {
            date: "Octobre 2019 - Juin 2021",
            name: "Cesi Alternance - Nancy",
            description:
                "Maîtrise Responsable en Ingénierie des Logiciels (BAC+4)",
            grid: "col-span-2 row-start-3 md:col-span-1 md:col-start-1 md:row-start-5",
            src: "/logos-formations-experiences/Cesi.png",
        },
        {
            date: "Octobre 2019 - Juin 2021",
            name: "Docaposte Applicam - Metz",
            description: "Alternance développeur front-end",
            grid: "col-span-2 md:col-span-1 md:col-start-2 md:row-start-5",
            src: "/logos-formations-experiences/Docaposte.png",
        },
        {
            date: "Septembre 2017 - Juin 2019",
            name: "Lycée Frédéric Chopin - Nancy",
            description: "BTS Services Informatiques aux Organisations (BAC+2)",
            grid: "col-span-2 row-start-4 md:col-span-1 md:col-start-1 md:row-start-6",
            src: "/logos-formations-experiences/FredericChopin.jpg",
        },
    ];

    return (
        <div
            className="min-h-screen flex items-center"
            id="formationsExperiences"
        >
            <div className="mx-auto max-w-7xl relative flex flex-col md:flex-row px-6 py-6 lg:py-10">
                <div className="py-14 flex items-center">
                    <div className="flex flex-col space-y-10 text-stone-900">
                        <div className="grid relative grid-cols-2 gap-8">
                            <div
                                id="timeline"
                                className="hidden md:block absolute w-1 h-full bg-primary rounded-xl left-1/2 -translate-x-1/2"
                            ></div>
                            <h2 className="col-span-2 row-start-1 md:col-span-1 text-4xl md:text-center">
                                Mes formations
                            </h2>
                            <h2 className="col-span-2 row-start-5 md:col-span-1 md:row-start-1 text-4xl md:text-center">
                                Mes expériences
                            </h2>
                            {formationsExperiences.map((item, i) => (
                                <Card
                                    key={i}
                                    date={item.date}
                                    name={item.name}
                                    description={item.description}
                                    grid={item.grid}
                                    src={item.src}
                                />
                            ))}
                        </div>
                        <a
                            href="/#competences"
                            className="w-full sm:w-fit text-center px-8 py-3 text-2xl text-stone-900 bg-primary rounded-2xl hover:scale-105 transition-all"
                        >
                            Voir mes compétences
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
