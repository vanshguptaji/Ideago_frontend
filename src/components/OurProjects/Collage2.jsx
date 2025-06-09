import React from "react";
import { DraggableCardBody, DraggableCardContainer } from "../ui/draggable-card";
import image1 from "../../assets/OurProjects/image2.svg";
import image2 from "../../assets/OurProjects/image3.svg";
import image3 from "../../assets/OurProjects/image4.svg";
const projects = [
  {
    name: "Projects Name",
    image: image1,
  },
  {
    name: "Projects Name",
    image: image2,
  },
  {
    name: "Projects Name",
    image: image3,
  },
  {
    name: "Projects Name",
    image: image1,
  },
  {
    name: "Projects Name",
    image: image2,
  },
  {
    name: "Projects Name",
    image: image3,
  },
  {
    name: "Projects Name",
    image: image1,
  },
  {
    name: "Projects Name",
    image: image2,
  },
  {
    name: "Projects Name",
    image: image3,
  },
];

export default function Collage2() {
  return (
    <section className="w-full py-12 px-2 mt-56 md:px-0 bg-[#f7f1ea] flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-marcellus font-semibold mb-10 text-[#3c2e1f] tracking-wide">
        Recent Projects
      </h2>
      <DraggableCardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <DraggableCardBody key={idx} className="p-0 bg-white/80 shadow-lg min-h-80 w-full max-w-xs">
            <div className="relative h-64 w-full overflow-hidden rounded-md">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col items-start">
                <span className="text-lg font-marcellus text-white drop-shadow font-semibold">
                  {project.name}
                </span>
                <button className="mt-2 px-4 py-1 rounded bg-[#e3e6e8] text-[#3c2e1f] text-sm font-medium shadow hover:bg-[#d1d5db] transition">
                  See Photos
                </button>
              </div>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
    </section>
  );
}