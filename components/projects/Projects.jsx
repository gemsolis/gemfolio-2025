"use client";

import { useState } from "react";
import WebProjects from "./WebProjects";
import SocialMediaProject from "./SocialMediaProject";
import Title from "@/ui/title/Title";
import UxProject from "./UxProject";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("Social Media Design");

  return (
    <div id="projects" className="w-full global-padding mb-20">
      <div className="global-flex gap-6 justify-between items-center px-10">
        <Title title="Projects" subheading="I Have Built So Far" />
        <div className="flex justify-center items-center">
          <div className="w-full px-4">
            <select
              className="w-full px-6 py-2 rounded-md border border-white bg-transparent text-white cursor-pointer"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
            >
              <option value="Social Media Design" className="text-black">
                Social Media Design
              </option>
              <option value="Web Development" className="text-black">
                Web Development
              </option>
              <option value="UX Design" className="text-black">
                UX Design
              </option>
            </select>
          </div>
        </div>
      </div>
      {activeTab === "Social Media Design" && <SocialMediaProject />}
      {activeTab === "Web Development" && <WebProjects />}
      {activeTab === "UX Design" && <UxProject />}
    </div>
  );
};

export default Projects;
