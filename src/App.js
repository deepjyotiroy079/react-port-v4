// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from "react";
import {
  Facebook,
  Linkedin,
  GitHub,
  Instagram,
  Twitter,
  Moon,
  ExternalLink,
  Sun,
  CornerRightUp,
  ArrowUpRight,
  Download,
  DownloadCloud,
} from "react-feather";
import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";
import Separator from "./components/Separator/Separator";
function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const size = 24;
  // {
  //     "node": {
  //         "name": "react-spring-boot-sms",
  //         "description": "Student Management System created using React JS and Spring Boot",
  //         "url": "https://github.com/deepjyotiroy079/react-spring-boot-sms",
  //         "languages": {
  //             "nodes": [
  //                 {
  //                     "name": "Java"
  //                 },
  //                 {
  //                     "name": "HTML"
  //                 },
  //                 {
  //                     "name": "CSS"
  //                 },
  //                 {
  //                     "name": "JavaScript"
  //                 }
  //             ]
  //         }
  //     }
  // }
  // pulling github data
  const url = "https://api.github.com/graphql";
  let [githubData, setGithubData] = useState([]);
  /**
   * fetching github data using graphql api.
   */
  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: `
        query PinnedRepos {
          viewer {
            pinnedItems(first: 6) {
            edges {
              node {
              ... on Repository {
                name
                description
                url
                languages(first:5) {
                    nodes {
                      name
                    }
                  }
              }
              }
            }
            }
          }
	  	  }
      `,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        // console.log(result.data.viewer.pinnedItems.edges)
        setGithubData(result.data.viewer.pinnedItems.edges);
        // githubData.map((x) => {
        //   console.log(x.node.name);
        // });
      });
  }, []);

  return (
    <>
      <div className="mb-12 space-y-10">
        <h1 className="max-w-md text-4xl font-bold md:text-5xl text-left">
          Deepjyoti Roy
        </h1>
        <p className="text-lg md:text-xl max-wd-sm text-gray-800 text-left">
          Hi there <span>👋</span>, I'm a{" "}
          <strong>
            Software Engineer <span>👨‍💻</span>
          </strong>
          , focused on Big Data and ETL Tools. I also work with{" "}
          <strong>frontend</strong> and <strong>backend</strong> web
          technologies to create *hobby* projects.
        </p>
        {/* <!-- Light style tooltip --> */}
        <button
          type="button"
          class="text-white flex items-center justify-between bg-violet-800 hover:bg-violet-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Download Resume <DownloadCloud className="mx-2" size={size} />
        </button>
      </div>
      {/* Social Icons */}
      {/* <div className="flex space-x-4">
        <a href="#">
          <Twitter size={size} className="hover:text-violet-400" />
        </a>
        <a href="#">
          <Facebook size={size} className="hover:text-violet-400" />
        </a>
        <a href="#">
          <GitHub size={size} className="hover:text-violet-400" />
        </a>
        <a href="#">
          <Linkedin size={size} className="hover:text-violet-400" />
        </a>
        <a href="#">
          <Instagram size={size} className="hover:text-violet-400" />
        </a>
      </div> */}
      <Separator />
      <div className="space-y-10">
        <h1 className="text-3xl font-bold">Highlighted Projects</h1>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
            {githubData.map((project) => (
              // console.log(project)
              // console.log(project.node.name)

              <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-violet-400">
                <div className="px-6 py-4 space-y-4">
                  <div className="font-bold text-xl mb-2">
                    <a
                      className="hover:underline hover:text-violet-400"
                      href={project.node.url}
                      target="_blank"
                    >
                      {project.node.name}
                    </a>
                  </div>
                  <p className="text-gray-700 text-base">
                    {project.node.description}
                  </p>
                </div>
                <div className="px-6 pb-2">
                  {project.node.languages.nodes.map((lang) => (
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {lang.name}
                    </span>
                  ))}
                  {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                      <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* {githubData ? (
          
        ) : (
          <span>Fetching repos...</span>
        )} */}
      </div>
      <Separator />
    </>
  );
}

export default App;
