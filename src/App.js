// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from 'react'
import { Facebook, Linkedin, GitHub, Instagram, Twitter, Moon, ExternalLink, Sun } from 'react-feather';
import Navbar from './components/Navbar/Navbar';
import Separator from './components/Separator/Separator';
function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  const size = 28;
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
  const url = 'https://api.github.com/graphql';
  let [githubData, setGithubData] = useState([]);
  /**
   * fetching github data using graphql api.
   */
  useEffect(() => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        // console.log(result.data.viewer.pinnedItems.edges)
        setGithubData(result.data.viewer.pinnedItems.edges);
        // githubData.map((x) => {
        //   console.log(x.node.name);
        // });
      });
  }, []);

  return (
    // <section className=''>
    <div className='container m-4 max-w-[900px] items-center px-2 mx-auto mt-12 space-y-10 md:space-y-12'>
      {/* <Navbar /> */}
      <div className="mb-12 space-y-10">
        <h1 className='max-w-md text-4xl font-bold md:text-5xl text-left'>Deepjyoti Roy</h1>
        <p className='text-lg md:text-xl max-wd-sm text-gray-800 text-left'>
          Hi there <span>👋</span>, I'm a{' '}
          <strong>
            Software Engineer <span>👨‍💻</span>
          </strong>
          , focused on Big Data and ETL Tools. I also work with{' '}
          <strong>frontend</strong> and <strong>backend</strong> web
          technologies to create *hobby* projects.
        </p>
      </div>
      {/* Social Icons */}
      <div className='flex space-x-4'>
        <a href='#'><Twitter size={size} className="hover:text-violet-400" /></a>
        <a href='#'><Facebook size={size} className="hover:text-violet-400" /></a>
        <a href='#'><GitHub size={size} className="hover:text-violet-400" /></a>
        <a href='#'><Linkedin size={size} className="hover:text-violet-400" /></a>
        <a href='#'><Instagram size={size} className="hover:text-violet-400" /></a>
      </div>
      <Separator />
      <div className='space-y-10'>
        <h1 className="text-3xl">Highlighted Projects</h1>
        {githubData ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">

            {githubData.map((project) => (
              // console.log(project)
              // console.log(project.node.name)


              <div className="rounded overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-violet-400">

                <div className="px-6 py-4 space-y-4">
                  <div className="font-bold text-xl mb-2">{project.node.name}</div>
                  <p className="text-gray-700 text-base">
                    {project.node.description}
                  </p>
                </div>
                <div className="px-6 pb-2">
                  {project.node.languages.nodes.map((lang) => (

                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{lang.name}</span>
                  ))}
                  {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                </div>
              </div>

            ))}

          </div>
        ) : (<p>Fetching repos...</p>)}
      </div>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: ;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
    // </section>
  );
}

export default App;
