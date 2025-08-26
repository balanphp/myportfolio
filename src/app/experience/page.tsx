'use client'

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Harita TechServe (ESAB)",
      place: "Chennai",
      url: "http://www.harita.in/",
      designation: "Senior Technical Lead",
      period: "Mar 2023 – Present",
      years: "2.2 Years",
    },
    {
      company: "Datanetiix Solution",
      place: "Chennai",
      url: "https://datanetiix.com/",
      designation: "Lead Technical Consultant",
      period: "Nov 2018 – Mar 2023",
      years: "4.4 Years",
    },
    {
      company: "Sify Technologies",
      place: "Tidel Park, Chennai",
      url: "http://www.sifycorp.com",
      designation: "Sr. Software Developer",
      period: "Sep 2016 – Aug 2018",
      years: "1.11 Years",
    },
    {
      company: "USAWeb Solution",
      place: "Egmore, Chennai",
      url: "https://www.sam.ai/",
      designation: "PHP Developer",
      period: "Nov 2012 – Aug 2016",
      years: "3.10 Years",
    },
    {
      company: "I-Netsolution",
      place: "Aminjikarai, Chennai",
      url: "http://www.i-netsolution.com",
      designation: "PHP Developer",
      period: "Feb 2012 – Oct 2012",
      years: "0.9 Years",
    },
    {
      company: "Daspal Infotech",
      place: "T.Nagar, Chennai",
      url: "http://www.daspalinfotech.com",
      designation: "Web Developer",
      period: "Apr 2011 – Feb 2012",
      years: "0.10 Years",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-8">Professional Experience</h2>
      <div className="relative border-l-4 border-blue-500">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full ring-8 ring-white"></span>
            <h3 className="flex items-center text-lg font-semibold text-gray-900">
              <a href={exp.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                {exp.company}
              </a>
              <span className="ml-2 text-sm text-gray-500">({exp.place})</span>
            </h3>
            <p className="text-sm text-gray-700">{exp.designation}</p>
            <p className="text-sm text-gray-500">{exp.period} • {exp.years}</p>
          </div>
        ))}
      </div>
    </div>
  );
}