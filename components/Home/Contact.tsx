import {
    ArrowLongRightIcon,
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
    TruckIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function Contact() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#DEEADB"
                    fill-opacity="1"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
            <div className="flex items-center bg-primary" id="contact">
                <div className="mx-auto max-w-7xl relative flex flex-col md:flex-row px-6 py-6 lg:py-10">
                    <div className="py-14 flex items-center">
                        <div className="flex flex-col space-y-10 text-stone-900">
                            <h2 className="text-4xl">Contactez-moi</h2>
                            <div className=" mt-16 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-y-16 xl:grid-cols-4">
                                <div className="border-l-2 border-dark-green flex flex-col space-y-4">
                                    <h3 className="flex items-center pl-4 text-[30px]">
                                        <EnvelopeIcon className="w-8 h-8 mr-4" />
                                        Email
                                    </h3>
                                    <a
                                        href="mailto:louisjuifpro@gmail.com"
                                        className="ml-4 flex items-center text-[22px] text-stone-800 hover:text-dark-green"
                                    >
                                        louisjuifpro@gmail.com
                                        <ArrowLongRightIcon className="h-6 w-6 ml-1 mt-1" />
                                    </a>
                                </div>
                                <div className="border-l-2 border-dark-green flex flex-col space-y-4">
                                    <h3 className="flex items-center pl-4 text-[30px]">
                                        <PhoneIcon className="w-8 h-8 mr-4" />
                                        Téléphone
                                    </h3>
                                    <a
                                        href="tel:0675862215"
                                        className="ml-4 flex items-center text-[22px] text-stone-800 hover:text-dark-green"
                                    >
                                        06 75 86 22 15
                                        <ArrowLongRightIcon className="h-6 w-6 ml-1 mt-1" />
                                    </a>
                                </div>
                                <div className="border-l-2 border-dark-green flex flex-col space-y-4">
                                    <h3 className="flex items-center pl-4 text-[30px]">
                                        <MapPinIcon className="w-8 h-8 mr-4" />
                                        Localisation
                                    </h3>
                                    <p className="ml-4 text-[22px] text-stone-800">
                                        Pompey - Grand Est - France
                                    </p>
                                </div>
                                <div className="border-l-2 border-dark-green flex flex-col">
                                    <h3 className="flex items-center pl-4 text-[30px] pb-4">
                                        <TruckIcon className="w-8 h-8 mr-4" />
                                        Mobilité
                                    </h3>
                                    <p className="ml-4 text-[22px] text-stone-800">
                                        Permis B et véhicule
                                    </p>
                                    <p className="ml-4 text-[22px] text-stone-800">
                                        Nancy et ses alentours
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
