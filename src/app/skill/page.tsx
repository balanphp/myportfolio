'use client'

export default function SkillPage() {
  const skills = [
    {
      category: "Front End",
      list: "React.js, Vue.js, JavaScript, jQuery, HTML, CSS, Bootstrap, Vuetify",
    },
    {
      category: "Back End",
      list: "PHP 7.x, Laravel, CodeIgniter, Node.js, Electron.js",
    },
    {
      category: "Databases",
      list: "MySQL, SQL, MongoDB",
    },
    {
      category: "IDE",
      list: "Visual Studio Code, Dreamweaver, Sublime Text, Notepad++, NetBeans",
    },
    {
      category: "Developer Tools",
      list: "Git, npm, SVN, JIRA, Teraterm, WireShark",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-8">Skill Summary</h2>
      <div className="relative border-l-4 border-blue-900">
        {skills.map((skill, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full ring-8 ring-white"></span>
            <h3 className="text-lg font-semibold text-gray-900">{skill.category}</h3>
            <p className="text-sm text-gray-700">{skill.list}</p>
          </div>
        ))}
      </div>
    </div>
  );
}