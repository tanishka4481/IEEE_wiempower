import React from "react";

const schedule = [
  {
    date: "6th February 2026",
    title: "Registration Opens [Online]",
    desc: "Team registrations begin. Register your team through the official portal and join Discord to stay updated with announcements, rules, and mentor interactions.",
  },
  {
    date: "14th – 16th February 2026",
    title: "Ideation Period [Online]",
    desc: "Teams brainstorm, research, and finalize their problem statement and solution approach. Mentors will be available to guide teams during this phase.",
  },
  {
    date: "16th February 2026 (EOD) – 18th February 2025 (EOD)",
    title: "Development Period [Online]",
    desc: "Teams start building their solution. Focus on implementation, testing, and preparing a working prototype along with a presentation.",
  },
  {
    date: "19th February 2026 (EOD)",
    title: "Finalists Announcement [Online]",
    desc: "Top teams will be shortlisted based on their submissions. Finalists will be announced through official communication channels.",
  },
  {
    date: "20th February 2026",
    title: "Final Presentation [Offline]",
    desc: "Shortlisted teams will present their final solution and prototype before the judges at the IGDTUW campus. Results will be declared after the presentations.",
  },
];


const Schedule = () => {
  return (
    <section id="schedule" className="relative w-full bg-[#0a0514] text-white overflow-hidden py-28 px-6">
      
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/14553707/pexels-photo-14553707.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2
          className="text-center text-4xl md:text-5xl font-black uppercase tracking-[0.2em] mb-20"
          style={{ textShadow: "2px 0 #bc39f3, -1px 0 #00fff9" }}
        >
          Hackathon <br className="md:hidden" /> Schedule
        </h2>

        {/* Schedule grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="border border-fuchsia-900/30 bg-fuchsia-950/20 backdrop-blur-sm p-8 md:p-10 rounded-sm shadow-2xl space-y-4"
            >
              <p className="text-sm uppercase tracking-widest text-fuchsia-400">
                {item.date}
              </p>

              <h3 className="text-xl md:text-2xl font-semibold text-pink-200">
                {item.title}
              </h3>

              <p className="text-pink-100 leading-relaxed whitespace-pre-line">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-fuchsia-600/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[160px]" />
    </section>
  );
};

export default Schedule;
