import React from "react";
import Spline from "@splinetool/react-spline";

export default function Accueil() {
    return (
        <div className="h-screen">
            <div className="mx-auto max-w-7xl top-1/2 -translate-y-1/2 relative flex flex-col md:flex-row px-6 py-6 lg:py-10 overflow-x-hidden">
                <div className="flex-1 py-14 flex items-center">
                    <div className="flex flex-col space-y-10 text-stone-900">
                        <h1 className="text-5xl">Bonjour !</h1>
                        <p className="inline-block lg:flex text-3xl flex-col space-y-2">
                            <span>Je m'appelle Louis JUIF, je suis </span>
                            <span>Développeur web et UX/UI Designer </span>
                            <span>et je vous souhaite la bienvenue sur </span>
                            <span>mon portfolio !</span>
                        </p>
                        <a
                            href="/#presentation"
                            className="w-full sm:w-fit text-center px-8 py-3 text-2xl text-stone-900 bg-primary rounded-2xl hover:scale-105 transition-all"
                        >
                            Faisons connaissance
                        </a>
                    </div>
                </div>
                <div className="relative flex-1 my-14 md:my-0 scale-[2] md:scale-100">
                    <Spline scene="https://prod.spline.design/kQ6RuwWAz7lXaQjl/scene.splinecode" />
                </div>
            </div>
        </div>
    );
}
