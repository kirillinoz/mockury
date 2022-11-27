import { FC } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/Footer";

/* eslint-disable @next/next/no-img-element */

const Home: FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Mockury | Go-to place for digital mockups</title>
      </Head>
      <Header>
        {/*<Link href="/pricing" className="link mr-6">
          Pricing
        </Link>*/}
        <Link href="/studio" className="btn highlight">
          Get started
        </Link>
      </Header>
      <div className="w-full">
        <div className="max-w-3xl mx-auto">
          <section className="flex flex-col py-20">
            <h1 className="text-center">
              Create <span className="font-rubik text-gray-900">beautiful mockups</span>{" "}
              of your <span className="font-rubik text-gray-900">digital products</span>!
            </h1>
            <p className="text-center text-xl text-gray-500 leading-snug mt-6">
              Mockury keeps you away from wacky Photoshop templates and overwhelming
              Blender renders, but most importantly, it makes your products look fancy.
            </p>
            <div className="w-full flex justify-center mt-6">
              <Link href="/studio" className="btn highlight">
                Get started
              </Link>
              <button className="btn ml-3" onClick={() => scrollTo("how-to")}>
                Learn more
              </button>
            </div>
            <img className="mt-12" src="/images/hero.png" alt="Hero" />
          </section>
          <div id="how-to"></div>
          <section className="flex flex-col pt-20 pb-40">
            <h2 className="text-center">
              <span className="font-rubik">Design</span> your{" "}
              <span className="font-rubik">mockup</span> in minutes!
            </h2>
            <div>
              <div className="flex flex-col md:flex-row mt-12">
                <div className="flex flex-col justify-evenly items-center md:items-start md:w-1/2 md:px-5">
                  <div>
                    <h3 className="text-center md:text-left">
                      1. <span className="font-rubik">Appereance</span>
                    </h3>
                    <p className="text-center md:text-left text-gray-500 mt-3">
                      Choose a format that suits your needs. Set up the right camera
                      angle. Pick a beautiful stage that will complement your product.
                    </p>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-center md:text-left">
                      2. <span className="font-rubik">Element</span>
                    </h3>
                    <p className="text-center md:text-left text-gray-500 mt-3">
                      Download a texture template for your element. Fill it out using an
                      image editor. Upload your texture to Mockury.
                    </p>
                  </div>
                  <div className="mt-12">
                    <h3 className="text-center md:text-left">
                      3. <span className="font-rubik">Export</span>
                    </h3>
                    <p className="text-center md:text-left text-gray-500 mt-3">
                      That&apos;s it! Now click on export, download your mockup and post
                      it on your product&apos;s website or share it on social media.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center md:justify-end md:w-1/2">
                  <img className="rounded-lg" src="/gifs/design.gif" alt="Design" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
