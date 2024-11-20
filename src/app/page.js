"use client";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Jamy Rahman | Portfolio</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="font-sans scroll-smooth">
        {/* Header */}
        <header className="bg-gradient-to-r from-indigo-800 to-teal-600 text-white p-6 fixed w-full top-0 z-50 shadow-lg">
          <nav className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-3xl font-bold">Jamy Rahman</h1>

            {/* Navigation Menu */}
            <ul className="hidden md:flex space-x-8">
              {["About", "Skills", "Experience", "Projects", "Contact"].map(
                (section) => (
                  <li key={section}>
                    <a
                      href={`#${section.toLowerCase()}`}
                      className="hover:text-teal-200 transition"
                    >
                      {section}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  menu.classList.toggle("hidden");
                }}
              >
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          <ul
            id="mobile-menu"
            className="hidden bg-indigo-800 md:hidden space-y-4 mt-4 p-4 text-center"
          >
            {["About", "Skills", "Experience", "Projects", "Contact"].map(
              (section) => (
                <li key={section}>
                  <a
                    href={`#${section.toLowerCase()}`}
                    className="block text-white hover:text-teal-200 transition"
                  >
                    {section}
                  </a>
                </li>
              )
            )}
          </ul>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-900 to-indigo-800 h-screen flex items-center justify-center text-white">
          <div className="text-center">
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hi, I'm Jamy Rahman
            </motion.h1>
            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Software Engineer | Machine Learning Enthusiast
            </motion.p>
            <motion.a
              href="#contact"
              className="px-6 py-3 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition"
              whileHover={{ scale: 1.1 }}
            >
              Contact Me
            </motion.a>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="py-16 bg-gradient-to-r from-indigo-800 to-teal-600 text-center"
        >
          <motion.div
            className="container mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-lg text-gray-200">
              Hi, I’m Jamy Rahman, a passionate Software Engineer with a
              Master’s in Computer Engineering from Memorial University of
              Newfoundland. I specialize in Machine Learning, Full-Stack
              Development, and building impactful applications. With hands-on
              experience at BrainStorm Force and AIUB, I’ve honed my skills in
              software development, mentoring, and problem-solving. I love
              tackling complex challenges using technologies like React, Django,
              and TensorFlow, and I’m always exploring new ways to innovate and
              grow. Let’s connect and create something amazing together!
            </p>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-16 bg-gradient-to-r from-indigo-800 to-teal-600 text-center"
        >
          <motion.div
            className="container mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5, delay: 0.2 },
              },
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-teal-200 mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                ["Programming", ["Python", "JavaScript", "PHP"]],
                ["Frontend", ["React", "Next.js", "Tailwind CSS"]],
                ["Backend", ["Django", "Node.js"]],
                ["Machine Learning", ["CNNs", "TensorFlow", "Keras"]],
              ].map(([category, skills]) => (
                <motion.div
                  key={category}
                  className="p-6 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-transform hover:scale-105"
                  whileHover={{ y: -10 }}
                >
                  <h3 className="text-xl font-semibold text-teal-600 mb-4">
                    {category}
                  </h3>
                  <ul className="text-gray-700">
                    {skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-16 bg-gradient-to-r from-indigo-800 to-teal-600 text-center"
        >
          <div className="container mx-auto">
            <motion.h2
              className="text-4xl font-bold text-teal-200 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Experience
            </motion.h2>
            <div className="space-y-8">
              {[
                {
                  title: "Software Engineer - BrainStorm Force",
                  time: "Aug 2022 - Dec 2022",
                  details:
                    "Enhanced Spectra and Spectra Pro (WordPress plugins with 1M+ active installations) by developing scalable, user-friendly components. Improved Presto Player (100K+ active installations) with key PHP and React features. Ensured code quality with Puppeteer and Jest, resolved bugs, and handled client tickets efficiently. Collaborated in Agile workflows, Scrum meetings, and maintained version control with GitHub.",
                },
                {
                  title: "Teaching Assistant - AIUB",
                  time: "May 2021 - Aug 2021",
                  details:
                    "Supported faculty in delivering technical concepts to 80+ students, enhancing class understanding. Led tutorials and labs, mentoring students in coding and debugging with React, Node.js, and PHP. Evaluated assignments and exams, providing constructive feedback to strengthen coding skills.",
                },
              ].map(({ title, time, details }) => (
                <motion.div
                  key={title}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-semibold text-indigo-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-teal-600">{time}</p>
                  <p className="mt-2 text-gray-700">{details}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-16 bg-gradient-to-r from-indigo-800 to-teal-600 text-center"
        >
          <div className="container mx-auto">
            <motion.h2
              className="text-4xl font-bold text-teal-200 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Projects
            </motion.h2>
            {[
              {
                name: "Brain Tumor Detection and Segmentation",
                description: (
                  <>
                    <b>Objective:</b> Developed a full-stack web application for
                    MRI-based brain tumor classification and segmentation.
                    <br />
                    <b>Role and Contribution:</b>
                    Designed the backend using Django REST API and the frontend
                    using Next.js.
                    <br />
                    Built a CNN model with Keras and TensorFlow for real-time
                    predictions.
                    <br />
                    Delivered the project independently, meeting deadlines with
                    high accuracy and reliability.
                    <br />
                    <b>Tech Stack:</b> Django REST API, Next.js, TensorFlow,
                    Keras
                    <br />
                    <b>Outcome:</b> Enabled accurate tumor detection with
                    percentage-based predictions.
                  </>
                ),
                github:
                  "https://github.com/Jamy11/Brain-Tumor-Classification-segmentation",
              },

              {
                name: "Air Quality Prediction Using Regression Models",
                description: (
                  <>
                    <b>Objective:</b> Analyzed historical data to predict air
                    quality levels using regression models.
                    <br />
                    <b>Role and Contribution:</b>
                    Preprocessed data and engineered features for model
                    training. <br />
                    Built and evaluated models such as Linear Regression, Ridge,
                    and Lasso. <br />
                    <b>Tech Stack:</b> Python, pandas, scikit-learn, Matplotlib
                    <br />
                    <b>Outcome:</b> Achieved an R² score above 0.85 for accurate
                    air quality predictions.
                  </>
                ),
                github:
                  "https://github.com/Jamy11/Air-Quality-Prediction-Using-Regression-Models",
              },
              {
                name: "Multi-Layer Convolutional Image Processing with 2D and 3D Implementation | Github",
                description: (
                  <>
                    <b>Objective:</b> Implemented a multi-layer convolutional
                    neural network with padding, ReLU activation, max pooling,
                    and Sigmoid functions for image processing tasks.
                    <br />
                    <b>Role and Contribution:</b>
                    Applied 8 convolutional kernels to the input image to
                    extract relevant features. <br />
                    Used ReLU activation after each convolution to introduce
                    non-linearity.
                    <br />
                    Implemented max pooling after each ReLU layer to downsample
                    and retain important features.
                    <br />
                    Stacked or summed the ReLU images after each convolution to
                    form a final feature map.
                    <br />
                    Created two versions of the project: one for 3D images
                    (Assignment 2) and one for 2D images (Assignment 2_2D) due
                    to issues with max pooling on 3D data.
                    <br />
                    <b>Tech Stack:</b> Python, NumPy, TensorFlow (Keras), OpenCV
                    <br />
                    <b>Outcome:</b> Successfully processed 2D images with max
                    pooling, achieving accurate feature extraction and image
                    representation. The 3D version (Assignment 2) is still under
                    development due to technical challenges.
                  </>
                ),
                github:
                  "https://github.com/Jamy11/convolutionpadding-maxpooling-relu-sigmoid-implementation",
              },
              {
                name: "Online Job Portal",
                description: (
                  <>
                    <b>Objective:</b> Created a responsive web platform for job
                    seekers and employers.
                    <br />
                    <b>Role and Contribution:</b>
                    Developed user authentication with email and Google login.{" "}
                    <br />
                    Implemented job application and employer review features.{" "}
                    <br />
                    Ensured smooth performance with Firebase for real-time
                    updates. <br />
                    <b>Tech Stack:</b> Node.js, MongoDB, Firebase, HTML, CSS,
                    JavaScript
                    <br />
                    <b>Outcome:</b> Delivered a seamless and secure job
                    application process for users.
                  </>
                ),
                github: "https://github.com/Jamy11/onlne-job-portal",
              },
            ].map(({ name, description, github }) => (
              <motion.div
                key={name}
                className="p-6 bg-white shadow-lg rounded-lg mb-6 hover:shadow-xl transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-teal-600">
                  {name}{" "}
                  <a target="_blank" href={github}>
                    <span style={{ color: "blue" }}>| GitHub Link</span>
                  </a>
                </h3>
                <div className="text-gray-700 whitespace-pre-line">
                  {description}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 bg-gradient-to-r from-indigo-800 to-teal-600 text-white text-center"
        >
          <motion.div
            className="container mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
            <p className="text-xl mb-4">
              Let's build something amazing together!
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <a
                href="mailto:jamy.rahman@example.com"
                className="px-6 py-3 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition"
              >
                Send an Email
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <a
                href="https://linkedin.com/in/jamy-rahman" //  LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-teal-300 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/jamy11" // GitHub profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-teal-300 transition"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="py-4 bg-indigo-800 text-center text-white">
          <p>© 2024 Jamy Rahman. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
