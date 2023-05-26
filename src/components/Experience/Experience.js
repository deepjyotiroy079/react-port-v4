import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Separator from "../Separator/Separator";

const Experience = () => {

  // Calculating the current experience dynamically
  const [startDate, setStartDate] = useState(new Date('2022-01-17')); // Replace with the start date of your experience
  const [currentDate, setCurrentDate] = useState(new Date());
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);

  useEffect(() => {
    const calculateExperience = () => {
      const diffTime = Math.abs(currentDate - startDate);
      const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
      const years = Math.floor(diffMonths / 12);
      const months = diffMonths % 12;

      setYears(years);
      setMonths(months);
    };

    calculateExperience();
  }, [startDate, currentDate]);


  return (
    <Layout>
      <h1 className="max-w-md text-4xl font-bold md:text-5xl text-left">
        Experience
      </h1>

      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container py-8 mx-auto">
          <div className="grid gap-4 mx-2 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-bold">Career</h3>
              </div>
            </div>
            <div className="relative col-span-12 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-bold text-violet-400 tracking-wide">
                    Deloitte Consulting India Private Limited
                  </h3>
                  <span className="text-sm tracking-wider font-bold  text-gray-500 dark:text-gray-400">
                    DC Analyst
                  </span>
                  <time className="text-xs tracking-wide dark:text-gray-400">
                    <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <div>Jan 2022 - Present</div>
                      <div>{` • `}</div>
                      <div>
                        {years} {years === 1 ? 'year' : 'years'}  {months} {months === 1 ? 'month' : 'months'}
                      </div>
                    </div>
                  </time>
                  <span className="text-sm tracking-wider dark:text-gray-400">
                    Kolkata, West Bengal, India
                  </span>
                  <p className="mt-3">
                    Currently assigned to an American nutrition and weight-loss
                    company based in Baltimore, Maryland. Analyzing and
                    designing ETL solutions for given problem statement.
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl font-bold text-violet-400 tracking-wide">
                    Hexaware Technologies Limited
                  </h3>
                  <span className="text-sm font-bold tracking-wider text-gray-500 text-bold dark:text-gray-400">
                    Associate Software Engineer
                  </span>
                  <time className="tracking-wide dark:text-gray-400">
                    <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <div>Dec 2019 - Dec 2021</div>
                      <div>{` • `}</div>
                      <div>2 yrs</div>
                    </div>
                  </time>
                  <span className="text-sm tracking-wider dark:text-gray-400">
                    Chennai, Tamil Nadu, India
                  </span>
                  <p className="mt-3">
                    Working with Informatica Powercenter and Oracle DB on
                    production support. Maintaining and scheduling Automated
                    Data Flows for critical banking applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div className="container py-8 mx-auto">
          <div className="grid gap-4 mx-2 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400">
                <h3 className="text-3xl font-bold">Education</h3>
              </div>
            </div>
            <div className="relative col-span-12 space-y-12 sm:col-span-9">
              <div className="col-span-12 space-y-6 relative sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl text-violet-400  font-bold tracking-wide">
                    Gyan Ganga Institute of Technology and Sciences
                  </h3>
                  <span className="text-sm tracking-wider font-bold">
                    <div className="flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <div>B.E.</div>
                      <div>{` • `}</div>
                      <div>Information Technology</div>
                    </div>
                  </span>
                  <time className="text-xs tracking-wide dark:text-gray-400">
                    <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <div>Aug 2016 - Sep 2020</div>
                    </div>
                  </time>
                  <span className="text-sm tracking-wider dark:text-gray-400">
                    Jabalpur, Madhya Pradesh, India
                  </span>
                  <p className="mt-3">
                    Course work involved - Object Oriented Programming and Methodology, Computer Architecture,
                    Database Management System, Cloud Computing, Computer Networking, Operating System
                  </p>
                </div>
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400">
                  <h3 className="text-xl text-violet-400  font-bold tracking-wide">
                    St. Gabriel's Senior Secondary School
                  </h3>
                  <span className="text-sm tracking-wider font-bold dark:text-gray-400">
                    <div className="flex space-x-2 text-sm  text-gray-500 dark:text-gray-400">
                      <div>PCM</div>
                    </div>
                  </span>
                  <time className="text-xs tracking-wide dark:text-gray-400">
                    <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                      <div>2014 - 2016</div>
                    </div>
                  </time>
                  <span className="text-sm tracking-wider dark:text-gray-400">
                    Jabalpur, Madhya Pradesh, India
                  </span>
                  {/* <p className="mt-3">cource</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator />
      </section>
    </Layout>
  );
};

export default Experience;
