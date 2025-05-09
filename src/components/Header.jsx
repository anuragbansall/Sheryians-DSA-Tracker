import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import SheryLogo from "../assets/shery-logo.png";

function Header() {
  return (
    <div className="w-full h-16 bg-zinc-800 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <img src={SheryLogo} alt="Sheryians Logo" className="h-10" />
        <h2 className="text-white text-xl font-semibold">
          Sheryians DSA Tracker
        </h2>
      </div>

      <div className="flex items-center gap-4">
        {[
          {
            name: "GitHub",
            link: "https://github.com/anuragbansall",
            logo: <FiGithub className="text-white text-xl" />,
          },
          {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/anuragbansall/",
            logo: <FiLinkedin className="text-white text-xl" />,
          },
        ].map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-zinc-700 rounded-md p-2 flex items-center gap-2 bg-zinc-900 hover:bg-zinc-700 transition duration-300"
          >
            <span>{item.logo}</span>
            <span className="ml-2">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
