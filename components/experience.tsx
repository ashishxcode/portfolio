import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "CultureX Entertainment",
      startDate: "June 2022",
      endDate: "Present",
      description:
        "While working as a full stack developer, I was responsible to manage a small team of developers. I was also responsible for developing new features in short spans of time to validate the product market fit. ",
      highlights: [
        "Implemented the new design system for the platform.",
        "Collaborated with a cross-functional team of designers, developers, and product managers to deliver high-quality products.",
        "Improved the performance of the platform by 30% by optimizing the codebase.",
        "Improved the user experience of the platform by 20% by implementing new features.",
      ],
    },
    {
      title: "Associate Developer",
      company: "CultureX Entertainment",
      startDate: "February 2022",
      endDate: "June 2022",
      description:
        "While working as an associate developer, I was responsible for maintaining and improving the platform. I was also responsible for developing new features and bug fixes.",
      highlights: [
        "Added Sequelize ORM to the backend for better database management.",
        "Created chrome extension to see creator profile overview.",
      ],
    },
  ];

  return (
    <section className="relative space-y-8">
      <h1 className="text-3xl font-bold mb-5 md:mb-10">Experience</h1>

      <div>
        {experiences.map((experience, index) => (
          <article key={index} className="relative pb-8 md:pb-10 last:pb-0">
            <div className="absolute left-2 top-0 w-px h-full bg-primary/20"></div>

            <div className="absolute left-0 top-0 transform -translate-x-[0 %] translate-y-1/2">
              <div className="w-4 h-4 bg-primary rounded-full"></div>
            </div>

            <div className="pl-6 space-y-4">
              <h3 className="h3">{`${experience.title} at ${experience.company}`}</h3>
              <div className="flex items-center gap-2 opacity-80">
                <p>
                  {experience.startDate} - {experience.endDate}
                </p>
              </div>
              <p className="max-w-full md:max-w-3xl">
                {experience.description}
              </p>
              <div>
                {experience.highlights && (
                  <ul className="list-disc ml-4">
                    {experience.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="font-mediumn max-w-full md:max-w-3xl"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
