'use client'

export default function ProfileSummary() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md font-calibri">
      {/* Profile Photo */}
      <div className="flex justify-center mb-6">
        <img
          src="/my_photo.jpg" // Replace with your image path
          alt="Profile Photo"
          className="w-32 h-32 rounded-full object-cover border-4 border-gray-300 shadow-md"
        />
      </div>

      {/* Profile Heading */}
      <h2 className="text-xl font-semibold mb-4 underline text-center">Profile Summary</h2>

      {/* Summary Content */}
      <ul className="list-disc list-inside space-y-4 text-gray-700 leading-relaxed">
        <li>
          I am currently working at the ESAB client location as a Harita employee, within the
          Research and Development department. I have over 14+ years of professional experience
          with a strong focus on web development, maintenance, and support management.
        </li>
        <li>
          I have proven expertise in team management, client communication, time estimation,
          and leading daily Scrum meetings. My experience spans across web development,
          database design, and solution implementation, aligning technology strategies with
          business goals through effective planning, analysis, and execution.
        </li>
      </ul>
    </div>
  );
}
