'use client'

export default function ProjectsSummary() {
  const projects = [
    {
      name: "ESAB Connect (Internal Web App)",
      tools: "Vue.js 3, Node.js, TypeScript, HTML, SCSS, Vuetify",
      description:
        "Application primarily designed for robotic machines, integrating with IoT services to manage data.",
    },
    {
      name: "Service Tool (Desktop App)",
      tools: "Vue.js 3, Node.js, TypeScript, Electron.js, HTML, CSS",
      description:
        "Tool designed to simplify the manual tasks of service technicians.",
    },
    {
      name: "PhotoLA",
      link: "https://www.photola.com",
      tools: "React.js, PHP Laravel, PHP 7, HTML5, jQuery",
      description:
        "Photo exhibitor web application where users can register and display their photos in exhibitions.",
    },
    {
      name: "Power Almanac",
      link: "https://poweralmanac.com",
      tools: "React.js, PHP Laravel, HTML5, jQuery",
      description:
        "US Government leads generation platform. Registered users can download lead data.",
    },
    {
      name: "Mallett Photography",
      link: "http://mallettphotography.com/",
      tools: "CodeIgniter, PHP 7, HTML5, jQuery",
      description:
        "School events photo website that maintains memories through photos and videos.",
    },
    {
      name: "Love.Sam.AI",
      link: "https://love.sam.ai/",
      tools: "PHP 5.x, MySQL 5.x, HTML5, CSS3, jQuery",
      extra: "Tools: Sublime, Dreamweaver, PHP",
    },
    {
      name: "Lotfy & Sons",
      link: "https://lotfyandsons.com",
      tools: "WordPress, PHP 7.x, MySQL 5.x, HTML5, CSS3, jQuery",
      description:
        "Showcase website for various rug products. Does not include online selling.",
    },
    {
      name: "Truck Air Bedz",
      link: "https://pittmanoutdoors.com",
      tools: "WordPress, PHP 7.x, MySQL 5.x, HTML5, CSS3, jQuery",
      description:
        "This retail web application is built using WordPress. It sells specialized beds for cars and trucks, which people typically buy for use during picnics and tours.",
    },
    {
      name: "SpaWorks",
      link: "https://spaworks.net/",
      tools: "Shopify, Core.js, HTML, CSS, jQuery, JavaScript",
      description:
        "E-Commerce application were selling only the spa related goods path sap and it’s cleaning  products  start screw and up to path spa.",
    },
    {
      name: "Sai Scholars",
      link: "https://saischolars.org/",
      tools: "Joomla, PHP 7.x, MySQL, HTML, CSS, jQuery, JavaScript.",
      description:
        "History of board info and scholarship programs, donors, news, events listing into this application.",
    },
    {
      name: "IMASC",
      link: "https://imasc.org/",
      tools: "WordPress, PHP 7.x, MySQL, jQuery, JavaScript, HTML, CSS",
      description:
        "Organized to improve access to healthcare and disease prevention through initiatives like health fairs, health clinics, volunteering, and disaster relief support.",
    },
    {
      name: "Charity Matterz",
      link: "https://charitymatterz.org/",
      tools: "PHP 7.x, Java Script, jQuery, Font awesome, HTML, Bootstrap.",
      description:
        "This charity provide the various training program to the students like one-to-one, Internal Business Process, Technology, Recruitment, planning & Execution.",
    }
  ];


  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6">Project Experience</h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-semibold text-blue-600">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Tools:</span> {project.tools}
            </p>
            {project.extra && (
              <p className="text-sm text-gray-700">{project.extra}</p>
            )}
            {project.description && (
              <p className="text-gray-600 mt-1">{project.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
