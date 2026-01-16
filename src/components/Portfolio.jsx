import React from 'react';
import GithubIcon from '../assets/github.svg';
import LinkedInIcon from '../assets/linkedin.svg';

/* ---------------- DATA ---------------- */
const profileData = {
  name: "Nikhil Thomas",
  role: "Software Developer | CSE Student",
  about:
    "I am a dedicated developer with a strong interest in building digital solutions that solve real-world problems. My expertise spans across frontend development, system software, and creating intuitive user experiences.",
  skills: [
    "React.js",
    "JavaScript",
    "Node.js",
    "C/C++",
    "Python",
    "MySQL",
    "System Software",
    "UI/UX Design",
  ],
  projects: [
    {
      title: "K-SHREE (KUDUMBASHREE MANAGEMENT SYSTEM)",
      description:
        "A web-based platform designed to digitize and automate administrative and financial operations of Neighborhood Groups (NHGs), including member registration, thrift collection, and loan management.",
      tags: [
        "ReactJS",
        "JavaScript",
        "HTML",
        "CSS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
        "Firebase",
      ],
      link: "",
    },
    {
      title: "Useless Project",
      description:
        "A playful collection of pointless yet entertaining web apps like Mouse Time Dilation Clock, Reversed Reader, and Scrollbar Sentience Analyzer.",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/Nikhilthomas123/Useless-project",
    },
    {
      title: "Sports Registration",
      description:
        "A responsive sports registration interface built with a clean card-based UI to efficiently capture student enrollment data.",
      tags: ["ReactJS", "JavaScript", "HTML5", "CSS3", "UI/UX"],
      link: "https://nikhilthomas123.github.io/registration-form/",
    },
  ],
  contact: {
    email: "nikhilthomast7@gmail.com",
    github: "https://github.com/Nikhilthomas123",
    linkedin: "https://www.linkedin.com/in/nikhil-thomas-645145347",
  },
};

/* ---------------- COMPONENT ---------------- */
const Portfolio = () => {
  return (
    <div className="min-h-screen font-inter antialiased bg-[#050816]">
      {/* HERO */}
      <header
        style={{
          background:
            "linear-gradient(135deg,#071642 0%,#3b0f70 55%,#ff5d6c 100%)",
        }}
        className="h-[40vh] min-h-[300px] flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#F8FAFC]">
            {profileData.name}
          </h1>
          <p className="mt-3 text-lg md:text-xl text-[#CBD5E1]">
            {profileData.role}
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block px-6 py-3 rounded-md font-semibold bg-[#5EEAD4] text-[#0F172A]"
          >
            Get In Touch
          </a>
        </div>
      </header>

      {/* CONTENT */}
      <main className="-mt-8 pt-8">
        <div className="app-container pb-14">
          {/* ABOUT */}
          <section className="mb-14">
            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-3">
              About
            </h2>
            <div className="h-1 w-12 bg-gradient-to-r from-pink-400 to-rose-500" />
            <p className="mt-4 max-w-3xl text-[#CBD5E1] leading-relaxed">
              {profileData.about}
            </p>
          </section>

          {/* SKILLS */}
          <section className="mb-14">
            <h3 className="text-lg font-semibold text-[#F8FAFC] mb-5">
              SKILLS
            </h3>

            <div className="flex flex-wrap">
              {profileData.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-6 py-2 rounded-full text-sm text-[#CBD5E1] mr-4 mb-4"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(59,15,112,0.65), rgba(7,20,66,0.65))",
                    border: "5px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#F8FAFC] mb-10">
              Previous Works
            </h2>

            <div className="project-grid gap-12">
              {profileData.projects.map((project, index) => (
                <article
                  key={index}
                  className="card min-h-[380px] flex flex-col"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(59,15,112,0.65), rgba(7,20,66,0.65))",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="p-10 flex flex-col h-full justify-between">
                    
                    {/* CENTERED TITLE + DESCRIPTION */}
                    <div className="flex flex-col justify-center items-center text-center px-6 py-4 flex-grow">
                      <h3 className="text-lg font-bold text-[#F8FAFC] mb-5">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#CBD5E1] leading-relaxed max-w-md">
                        {project.description}
                      </p>
                    </div>

                    {/* TAGS + LINK */}
                    <div className="mt-8 px-4">
                      <div className="flex flex-wrap justify-center">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-1.5 rounded-full text-xs text-[#F8FAFC] mr-4 mb-4"
                            style={{
                              border: "2px solid rgba(9, 149, 192, 0.8)",
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.link ? (
                        <div className="text-center">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-sm font-semibold text-[#5EEAD4]"
                          >
                            View Details →
                          </a>
                        </div>
                      ) : (
                        <div className="text-center text-sm text-[#94A3B8]">
                          No Link Available
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* FOOTER */}
      <footer id="contact" className="py-10 bg-black">
        <div className="app-container text-center">
          <p className="text-lg font-semibold text-[#F8FAFC]">
            Contact Me
          </p>
          <p className="mt-2 text-[#CBD5E1]">
            <a href={`mailto:${profileData.contact.email}`}>
              {profileData.contact.email}
            </a>
          </p>

          <div className="mt-4 flex items-center justify-center gap-6">
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#CBD5E1]"
            >
              <img src={GithubIcon} alt="GitHub" className="w-5 h-5 invert" />
              GitHub
            </a>

            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#CBD5E1]"
            >
              <img
                src={LinkedInIcon}
                alt="LinkedIn"
                className="w-5 h-5 invert"
              />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
