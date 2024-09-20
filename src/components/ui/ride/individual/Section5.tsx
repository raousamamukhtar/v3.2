"use client";
import Head from "next/head";
import Image from "next/image";
import mobileview from "@/../public/ride/individual/section5.svg"; // Ensure the image is in the public folder

import { useState } from "react";

export default function Section6() {
  return (
    <div className="bg-slate ">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col pt-10 py-10 ">
        <div className="flex flex-col items-center px-10 text-black justify-center font-bold gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-customYellow text-center">
            How it works
          </h1>
          <p>
            Experience the Revolution of Oz Ove&apos;s Unparalleled On-Demand
            Group Transportation
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-10 mx-4 lg:mx-32">
          <div className="lg:w-1/3 flex justify-center">
            <div className="flex flex-col px-4 py-6">
              <Image
                src={mobileview}
                alt="Ride image"
                width={200}
                height={200}
              />
            </div>
          </div>
          <div className="lg:w-2/3 flex flex-col justify-center space-y-8 px-4">
            <div className="flex items-center space-x-4">
              <div className="bg-customYellow w-12 h-12 rounded-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">1</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Set Destination Route
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-customYellow w-12 h-12 rounded-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">2</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Choose service
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-customYellow w-12 h-12 rounded-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">3</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Select Vehicle Type
              </h3>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-customYellow w-12 h-12 rounded-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">4</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Personalise Add-Ons
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-customYellow w-12 h-12 rounded-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">5</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Confirm
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-customYellow w-12 h-12 rounded-full flex items-center justify-center">
                <h2 className="text-2xl font-bold text-white">6</h2>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Track Driver in Real Time
              </h3>
            </div>
            <button className="bg-customYellow hover:bg-customYellow-dark text-white font-bold w-full md:w-[200px] py-2 px-4 rounded-full self-center md:self-start">
              Book Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
