import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { containerVariants, childVariants } from "@/data/animation";
const WebProjects = () => {
  const projects = [
    {
      title: "Responsive Website for a CCTV Installation Services",
      image: "/assets/images/tmc_cover.png",
      github: "",
      site: "https://www.tmc-cctv.site/",
      type: "Freelance",
      tech: ["NextJS", "TailwindCSS", "FrameMotion", "EmailJs"],
      description:
        "Successfully designed and developed a high-converting, responsive landing page for a CCTV installation service using Next.js, Tailwind CSS, and Framer Motion. The project focused on creating a modern and intuitive user interface that clearly communicates the company's services, value propositions, and key differentiators. Leveraged Framer Motion to implement smooth animations that enhanced visual appeal and user engagement without compromising performance. Integrated EmailJS to enable real-time handling of inquiry form submissions, allowing the business to capture and respond to customer leads efficiently. Prioritized mobile responsiveness, fast loading times, and accessible design principles to ensure a seamless experience across all devices. The landing page was optimized for conversions through strategic content placement, strong call-to-action elements, and user-friendly navigation.",
    },
    {
      title: "Admin Dashboard using NextJS",
      image: "/assets/images/work_admin.png",
      github: "https://github.com/gemsolis/admin-dashboard-nextjs",
      site: "https://admin-dashboard-nextjs-swrx.vercel.app",
      type: "Personal",
      tech: ["NextJS", "TailwindCSS", "MongoDB", "AuthJS"],
      description:
        "Created an Admin Dashboard using NextJS, Tailwind CSS, and MongoDB with server actions for authentication. The application supports CRUD operations for product management, ensuring secure access and functionality based on user roles.",
    },
    {
      title: "CRUD Product Management",
      image: "/assets/images/work_crud.png",
      github: "https://github.com/gemsolis/crud-admin-app",
      site: "https://crud-product-app.web.app/",
      type: "Personal",
      tech: ["React", "TailwindCSS", "Styled Components"],
      description:
        "This web app employs ReactJS and Firebase/Firestore for database and hosting. Users can perform CRUD operations on products, sorting and searching by name or description. It features form validation for specific fields, and utilizes Redux Toolkit and Styled-Components for development.",
    },
    {
      title: "Netflix Clone using TMDB API",
      image: "/assets/images/work_netflix.png",
      github: "https://github.com/gemsolis/Netflix-Clone-React-Project.git",
      tech: ["React", "Rest API", "Styled Components"],
      type: "Personal",
      site: "https://netflix-clone-react-project.web.app",
      description:
        "Desktop version clone of the popular streaming service online using React.js, Sass, TMDB Api and Firebase. This project showcase how I familiarize using API from a third-party database.",
    },
    {
      title: "Responsive Restaurant Website",
      image: "/assets/images/work_resto.png",
      github: "https://github.com/gemsolis/Restaurant-Website-ReactJS.git",
      type: "Personal",
      tech: ["React", "Rest API", "Styled Components"],
      site: "https://restaurant-website-reactjs.web.app",
      description:
        "In this project, I created a mobile-friendly restaurant website using ReactJS and styled-components. The website is optimized for mobile devices, ensuring a great user experience for visitors accessing the site on their smartphones or tablets.",
    },
  ];

  return (
    <div className="mb-[100px] mt-[50px]">
      <h1 className="global-subheading py-2 fade-gradient w-full border-b border-b-white mb-2">
        Web Development
      </h1>
      <motion.div className="flex flex-col gap-4">
        <motion.div
          whileInView="show"
          variants={containerVariants}
          initial="hidden"
          className="w-full py-2 items-center"
        >
          {projects.slice(0, 1).map((project) => (
            <motion.div
              variants={childVariants}
              key={project.title}
              className="glass w-full rounded-md border-b border-b-slate-600 h-auto cursor-pointer relative"
            >
              <div className="w-full flex global-flex overflow-hidden rounded-lg">
                <div className="w-full overflow-hidden h-[400px] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    style={{ objectFit: "cover" }}
                  />
                  <span className="absolute bottom-2 right-2 rounded-md bg-orange-500 px-4 py-1 text-[14px]">
                    {project.type}
                  </span>
                </div>

                <div className="lg:w-[80%] mb-5 px-5 py-4">
                  <h4 className="font-black custom-font fade-gradient text-lg pt-4">
                    {project.title}
                  </h4>
                  <div className="item-center my-3 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-orange-500 px-2 py-1 text-[11px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm mb-10 text-slate-400">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-3 right-5 z-40 flex gap-3">
                <Link href={project.site} target="_blank">
                  <button className="bg-black rounded-md border-white border p-2 hover:scale-110 duration-300">
                    View Site
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          whileInView="show"
          variants={containerVariants}
          initial="hidden"
          className="w-full py-2 grid-layout items-center"
        >
          {projects.slice(1).map((project) => (
            <motion.div
              key={project.title}
              variants={childVariants}
              className="glass rounded-md  border-b border-b-slate-600 h-[560px] cursor-pointer "
            >
              <div className="w-full overflow-hidden rounded-lg">
                <div className="w-full overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={450}
                    height={600}
                    style={{ objectFit: "cover" }}
                  />
                  <span className="absolute bottom-2 right-2 rounded-md bg-orange-500 px-4 py-1 text-[12px]">
                    {project.type}
                  </span>
                </div>

                <div className="mb-5 px-5 py-4">
                  <h4 className="custom-font font-black fade-gradient text-lg pt-2">
                    {project.title}
                  </h4>
                  <div className="item-center my-3 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-orange-500 px-2 py-1 text-[11px]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm mb-10 text-slate-400">
                    {project.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-3 right-5 z-40 flex gap-3">
                <Link href={project.site} target="_blank">
                  <button className="bg-black rounded-md border-white border p-2 hover:scale-110 duration-300">
                    View Site
                  </button>
                </Link>
                <Link href={project.github} target="_blank">
                  <button className="bg-gradient rounded-md border-2 p-2 hover:scale-110 duration-300">
                    Github Repo
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WebProjects;
