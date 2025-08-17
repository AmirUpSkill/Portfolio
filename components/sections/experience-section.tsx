"use client";

import React, { useState } from "react";
import HeadingBadge from "@/components/heading-badge";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Calendar, ChevronRight, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

type Experience = {
    company: string;
    companyLink?: string;
    position:string;
    duration: string;
    description: string [];
    technologies: string[];
    link?: string;
}

const  experiences: Experience[] = [
    {
        company: "Proxym",
        position: "AI Software Engineer Intern",
        duration: "Feb 2025 - Aug 2025",
        description: [
            "Engineered an innovative application automating the transformation of software requirements into structured ClickUp tasks.",
            "Designed and developed a robust, polyglot microservices backend with OAuth 2.0/OIDC authentication.",
            "Built a responsive Next.js application featuring a multi-step wizard interface with real-time validation."
        ],
        technologies:["Next.js", "Spring Boot", "FastAPI", "Python", "OAuth 2.0", "MinIO", "Docker"]

    },
    {
        company: "Neuralbey",
        position: "Software Engineer Intern",
        duration: "Jul 2024 - Sep 2024",
        description: [
            "Architected and implemented microservices applications using Spring Boot and Spring Cloud.",
            "Designed an event-driven system utilizing Apache Kafka for scalable message processing.",
            "Implemented robust security measures through KeyCloak IAM and OAuth2 protocols.",
            "Containerized applications and managed deployment using Docker and Kubernetes."
        ],
        technologies:["Spring Boot", "Spring Cloud", "Apache Kafka", "KeyCloak", "OAuth2", "Docker", "Kubernetes"]

    },
    {
        company: "Telecom TN",
        position: "ML Engineer Intern",
        duration: "Jun 2023 - Jul 2023",
        description: [
            "Architected an end-to-end ML pipeline with automated data ingestion from an SAP Data Warehouse.",
            "Designed scalable workflows for feature engineering and model training using scikit-learn.",
            "Developed and deployed an ML model as a full-stack web application using a FastAPI backend and React frontend."
        ],
        technologies:["Machine Learning", "FastAPI", "React", "Scikit-learn", "SAP", "Python"]
    }
];

export function ExperienceSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); 

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="w-full max-w-2xl pt-10">
      <div className="space-y-8">
        <div className="flex flex-col items-start justify-start gap-5">
          <HeadingBadge
            title="Experience"
            icon={<Briefcase size={14} color="#F59E42" />}
          />
          <div className="space-y-2">
            <h3 className="text-3xl font-semibold">
              Work{" "}
              <span className="text-[#08090a] dark:text-slate-200">
                Experience
              </span>
            </h3>
            <p className="text-[#737373] dark:text-[#A1A1AA] text-sm">
              Companies I&apos;ve worked with and the projects I&apos;ve been
              involved in
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {experiences.map((experience, index) => (
            <SpotlightCard
              key={index}
              className={cn(
                "p-6 cursor-pointer transition-all duration-300 group rounded-sm border border-gray-200/80 dark:border-gray-500/10 ease-in-out hover:border-gray-900/30 dark:hover:border-gray-500/20",
                "hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-gray-500/5",
                expandedIndex === index ? "bg-opacity-10" : ""
              )}
              gradientColor="rgba(100, 116, 139, 0.15)"
              lightGradientColor="rgba(8, 9, 10, 0.15)"
              onClick={() => toggleExpand(index)}
              disableScale={true}
            >
              <div className="space-y-4">
                <div className="flex xs:flex-row flex-col items-start justify-between gap-4">
                  <section className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-medium text-[#08090a] dark:text-white">
                        {experience.position}
                      </h3>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 text-[#08090a] dark:text-slate-200 transition-all duration-500",
                          "transform-gpu opacity-0 scale-95 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 group-hover:scale-100",
                          "ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                          expandedIndex === index ? "rotate-90" : "rotate-0",
                          expandedIndex === index
                            ? "opacity-100 translate-x-0 scale-100"
                            : ""
                        )}
                      />
                    </div>
                    <span className="flex items-center z-50 gap-2 text-[#737373] dark:text-[#A1A1AA]">
                      {experience.company}
                    </span>
                  </section>
                  <section className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 dark:bg-[#191a1a] text-[#08090a] dark:text-slate-200 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{experience.duration}</span>
                  </section>
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    expandedIndex === index
                      ? "grid-rows-[1fr] opacity-100 translate-y-0"
                      : "grid-rows-[0fr] opacity-0 -translate-y-4"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="pt-4 space-y-4">
                      <ul className="space-y-2 text-[#737373] dark:text-[#A1A1AA] text-sm">
                        {experience.description.map((item, i) => (
                          <li
                            key={i}
                            style={{ transitionDelay: `${i * 100}ms` }}
                            className={cn(
                              "list-disc list-inside transition-all duration-500",
                              "transform-gpu",
                              expandedIndex === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            )}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              transitionDelay:
                                expandedIndex === index
                                  ? `${i * 100 + 300}ms`
                                  : "0ms",
                            }}
                            className={cn(
                              "px-2 py-1 text-xs rounded-sm font-medium bg-white dark:bg-[#0a0a0a] border border-gray-200/80 dark:border-gray-500/10 text-[#737373] dark:text-[#A1A1AA] group-hover:border-gray-900/30 dark:group-hover:border-slate-500/20 transition-all duration-300",
                              expandedIndex === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}