import React from "react";
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
  } from "react-feather";

import { SiReact, SiTailwindcss } from 'react-icons/si'
const Footer = () => {
    const size = 20
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          {/* <div className="flex space-x-4"> */}
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
          {/* </div> */}
        </div>
        <div className="mb-2 flex space-x-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          <div>Deepjyoti Roy</div>
          <div>{` • `}</div>
          <div>{`${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>Made with </div>
          <a href="/"><SiReact className="text-sky-300" size={size}/></a>
          <a href="/"><SiTailwindcss className="text-sky-300" size={size}/></a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
