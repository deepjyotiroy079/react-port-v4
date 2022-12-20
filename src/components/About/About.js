import React from "react";
import { ExternalLink } from "react-feather";
import { SiPython } from "react-icons/si";
import Layout from "../layout/Layout";
import Separator from "../Separator/Separator";

const About = () => {
  return (
    <Layout>
      <h1 className="max-w-md text-4xl font-bold md:text-5xl text-left">
        About
      </h1>
      {/* <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2"> */}
      <div class="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
        <div class="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
          <h1 class="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
            Here's a little background...
          </h1>
        </div>
        <div class="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
          <img
            src="/profile.jpg"
            alt="profile"
            class="w-72 h-72 object-cover rounded-lg sm:col-span-2 lg:col-span-full"
            loading="lazy"
          />
        </div>
        <p class="mt-4 text-md leading-6 col-start-1 sm:col-span-2 lg:mt-2 lg:row-start-2 lg:col-span-1 dark:text-slate-500 font-normal">
          Analyst at Deloitte India (Offices of the US). 3 years of experience
          in IT industry, mostly focused on ETL development and data
          warehousing. Currently working on SSIS, IICS, Microsoft SQL Server and
          Redshift. Previously worked with Banking and Media/Entertainment
          Clients. Strong education professional with a Bachelor's of
          Engineering degree focused in Information Technology from Rajiv Gandhi
          Proudyogiki Vishwavidhyalaya, Bhopal.
        </p>
      </div>
      <Separator />
      <h1 class="mt-1 text-lg font-semibold md:text-2xl">
        Skills and Abilities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="flex items-center justify-between rounded overflow-hidden shadow-md hover:shadow-xl hover:shadow-violet-200">
          <div className="px-4 py-2">Python</div>
          <div className="px-4 pb-2">
            <SiPython />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
