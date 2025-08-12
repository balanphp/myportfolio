'use client'

export default function EducationPage() {
  const education = [
    {
      course: "M.C.A",
      institute: "Madras University",
      place: "Chennai",
      period: "June 2008 - May 2011",
      marks: "67.77%",
    },
    {
      course: "B.C.A",
      institute: "Annamalai University",
      place: "Chidambaram",
      period: "July 2006 - May 2008",
      marks: "63.37%",
    },
    {
      course: "Diploma",
      institute: "Aries Polytechnic College",
      place: "Vadalore",
      period: "June 2002 - May 2004",
      marks: "75.00%",
    },
    {
      course: "Hr.Sec",
      institute: "P.R.M Higher Secondary School",
      place: "Muthanai, Vridhachalam",
      period: "Jun 2000 - May 2002",
      marks: "63.37%",
    },
    {
      course: "10th",
      institute: "St'Agnes High School",
      place: "Veeraredikuppan",
      period: "June 1999 - Mar 2000",
      marks: "75.00%",
    },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-8">Education Qualification</h2>
      <div className="relative border-l-4 border-green-500">
        {education.map((edu, index) => (
          <div key={index} className="mb-10 ml-6">
            <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-green-500 rounded-full ring-8 ring-white"></span>
            <h3 className="text-lg font-semibold text-gray-900">{edu.course}</h3>
            <p className="text-sm text-gray-700">{edu.institute} ({edu.place})</p>
            <p className="text-sm text-gray-500">{edu.period}</p>
            <p className="text-xs text-gray-600">Marks: {edu.marks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
