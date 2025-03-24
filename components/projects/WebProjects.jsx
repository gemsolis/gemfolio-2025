import Image from "next/image";
import Link from "next/link";

const WebProjects = () => {
  const projects = [
    {
      title: "Admin Dashboard using NextJS",
      image: "/assets/images/work_admin.png",
      github: "https://github.com/gemsolis/admin-dashboard-nextjs",
      site: "https://admin-dashboard-nextjs-swrx.vercel.app",
      tech: ["NextJS", "TailwindCSS", "MongoDB", "AuthJS"],
      description:
        "Created an Admin Dashboard using NextJS, Tailwind CSS, and MongoDB with server actions for authentication. The application supports CRUD operations for product management, ensuring secure access and functionality based on user roles.",
    },
    {
      title: "CRUD Product Management",
      image: "/assets/images/work_crud.png",
      github: "https://github.com/gemsolis/crud-admin-app",
      site: "https://crud-product-app.web.app/",
      tech: ["React", "TailwindCSS", "Styled Components"],
      description:
        "This web app employs ReactJS and Firebase/Firestore for database and hosting. Users can perform CRUD operations on products, sorting and searching by name or description. It features form validation for specific fields, and utilizes Redux Toolkit and Styled-Components for development.",
    },
    {
      title: "Netflix Clone using TMDB API",
      image: "/assets/images/work_netflix.png",
      github: "https://github.com/gemsolis/Netflix-Clone-React-Project.git",
      tech: ["React", "Rest API", "Styled Components"],
      site: "https://netflix-clone-react-project.web.app",
      description:
        "Desktop version clone of the popular streaming service online using React.js, Sass, TMDB Api and Firebase. This project showcase how I familiarize using API from a third-party database.",
    },
    {
      title: "Responsive Restaurant Website",
      image: "/assets/images/work_resto.png",
      github: "https://github.com/gemsolis/Restaurant-Website-ReactJS.git",
      tech: ["React", "Rest API", "Styled Components"],
      site: "https://restaurant-website-reactjs.web.app",
      description:
        "In this project, I created a mobile-friendly restaurant website using ReactJS and styled-components. The website is optimized for mobile devices, ensuring a great user experience for visitors accessing the site on their smartphones or tablets.",
    },
  ];

  return (
    <div className="w-fulll global-padding py-10 flex flex-wrap gap-10 justify-center items-center">
      {projects.map((project) => (
        <div
          key={project.title}
          className="glass rounded-md border-b border-b-slate-200 w-[420px] h-[600px] cursor-pointer "
        >
          <div className="w-full overflow-hidden rounded-lg">
            <div className="w-full overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={600}
                className="object-contain"
              />
            </div>

            <div className="mb-5 px-5 py-4">
              <h4 className="project-text font-black text-orange-400">
                {project.title}
              </h4>
              <div className="item-center my-5 flex flex-wrap gap-3">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border-2 border-orange-500 px-2 py-1 text-[11px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-sm mb-10">{project.description}</p>
            </div>
          </div>
          <div className="absolute bottom-3 right-5 z-40 flex gap-3">
            <Link href={project.site} target="_blank">
              <button className="bg-black border-white border p-2 hover:rounded-md duration-300">
                View Site
              </button>
            </Link>
            <Link href={project.github} target="_blank">
              <button className="bg-orange-500 border-2 p-2 hover:rounded-md duration-300">
                Github Repo
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebProjects;
