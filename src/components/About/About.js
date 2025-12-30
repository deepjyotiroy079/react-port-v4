import React from "react";
import { Database } from "react-feather";
import {
  SiApachemaven,
  SiApachespark,
  SiDatabricks,
  SiDocker,
  SiGit,
  SiJava,
  SiLinux,
  SiNodedotjs,
  SiPython,
  SiTableau,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import Layout from "../layout/Layout";
import Separator from "../Separator/Separator";
import SpotifyNowPlaying from "../Spotify/SpotifyNowPlaying";

const About = () => {
  return (
    <Layout>
      <h1 className="max-w-md text-4xl font-bold md:text-5xl text-left">
        About
      </h1>
      <div className="container flex flex-col-reverse justify-center mx-auto sm:py-16 lg:py-4 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center lg:max-w-md xl:max-w-lg">
          <p className="mt-6 font-normal sm:mb-12">
            Around 6 years of experience in IT industry, mostly focused on ETL
            development and data warehousing. Currently working on SSIS, IICS,
            Microsoft SQL Server and Redshift. Previously worked with Banking
            and Media/Entertainment Clients. Strong education professional with
            a Bachelor's of Engineering degree focused in Information
            Technology.
          </p>
          {/* <h3>What I've been Listening to...</h3> */}
          <SpotifyNowPlaying />
        </div>
        <div className="flex items-center justify-center lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/profile.jpg"
            alt=""
            className="w-72 h-72 object-cover rounded-lg sm:col-span-2 lg:col-span-full"
          />
        </div>
      </div>
      {/* <div className="max-w-4xl space-y-10 mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 className="mt-1 text-xl font-semibold text-white sm:text-slate-900 md:text-3xl dark:sm:text-white">
            Here's a little background...
          </h1>
        </div>
        <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src="/profile.jpg"
            alt="profile"
            className="w-72 h-72 object-cover rounded-lg sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-md leading-6 col-start-1 sm:col-span-2 lg:mt-2 lg:row-start-2 lg:col-span-1 dark:text-slate-500 font-normal">
          Analyst at <strong>Deloitte</strong>. 3 years of experience in IT
          industry, mostly focused on{" "}
          <strong>ETL development and data warehousing</strong>. Currently
          working on SSIS, IICS, Microsoft SQL Server and Redshift. Previously
          worked with Banking and Media/Entertainment Clients. Strong education
          professional with a Bachelor's of Engineering degree focused in
          Information Technology from Rajiv Gandhi Proudyogiki Vishwavidhyalaya,
          Bhopal.
        </p>
      </div> */}
      {/* <section className=""></section> */}
      {/* <Separator /> */}
      <h1 className="mt-1 text-xl font-semibold md:text-2xl">
        Technologies I've worked on
      </h1>
      {/* <div class=> */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-5">
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md">
              <div className="hover:text-violet-400 flex items-center justify-between">
                Python
                <SiPython size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md mb-2">
              <div className="hover:text-violet-400 flex items-center justify-between">
                SQL
                <Database size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md mb-2">
              <div className="hover:text-violet-400 flex items-center justify-between">
                GitHub
                <SiGit size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md mb-2">
              <div className="hover:text-violet-400 flex items-center justify-between">
                Nodejs
                <SiNodedotjs size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md mb-2">
              <div className="hover:text-violet-400 flex items-center justify-between">
                Linux
                <SiLinux size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md mb-2">
              <div className="hover:text-violet-400 flex items-center justify-between">
                Java
                <SiJava size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md mb-2">
              <div className="hover:text-violet-400 flex items-center justify-between">
                Docker
                <SiDocker size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md mb-2">
              <div className="hover:text-violet-400 flex items-center justify-between">
                Databricks
                <SiDatabricks size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md mb-2">
              <div className="hover:text-violet-400 flex items-center justify-between">
                Apache Spark
                <SiApachespark size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md mb-2">
              <div className="hover:text-violet-400 flex items-center justify-between">
                Maven
                <SiApachemaven size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md mb-2">
              <div className="hover:text-violet-400 flex items-center justify-between">
                Tableau
                <SiTableau size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden border-2">
          <div className="px-8 py-4 space-y-4">
            <div className="font-semibold text-md mb-2">
              <div className="hover:text-violet-400 flex items-center justify-between">
                REST API
                <TbApi size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <Separator />
    </Layout>
  );
};

export default About;
