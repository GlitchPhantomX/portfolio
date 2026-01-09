// src/components/AnimatedPinDemo.jsx

"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { projects } from "../constants";

export function AnimatedPinDemo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20 w-full place-items-center">
      {projects.map((project, index) => (
        <PinContainer
          key={`project-${index}`}
          title={project.liveLink ? "View Live" : "View Code"}
          href={project.liveLink || project.source_code_link}
          containerClassName="w-full max-w-[400px]"
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[24rem]">
            {/* Project Image - Increased height */}
            <div className="relative w-full h-56 mb-4 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Project Title */}
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-xl text-white">
              {project.name}
            </h3>

            {/* Project Description */}
            <div className="text-sm !m-0 !p-0 font-normal">
              <span className="text-slate-400 line-clamp-2">
                {project.description}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={`${project.name}-tag-${tagIndex}`}
                  className={`text-xs px-2 py-1 rounded-full ${tag.color} bg-opacity-20 border border-current`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        </PinContainer>
      ))}
    </div>
  );
}