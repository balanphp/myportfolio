'use client'

export default function PersonalDetails() {
  const fieldClass = "flex gap-4 text-sm"; // gap between caption & value
  const labelClass = "font-semibold w-48"; // fixed label width for alignment
  const colonClass = "text-gray-600"; // style for colon

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md font-calibri">
      <h2 className="text-md font-semibold mb-4 underline">Personal Details</h2>

      <div className="flex flex-col gap-3 text-gray-700">
        <div className={fieldClass}>
          <span className={labelClass}>Date of Birth</span>
          <span className="colonClass">:</span>
          <span>1st March 1984</span>
        </div>
        <div className={fieldClass}>
          <span className={labelClass}>Age</span>
          <span className="colonClass">:</span>
          <span>41</span>
        </div>
        <div className={fieldClass}>
          <span className={labelClass}>Marital Status</span>
          <span className="colonClass">:</span>
          <span>Married</span>
        </div>
        <div className={fieldClass}>
          <span className={labelClass}>Gender</span>
          <span className="colonClass">:</span>
          <span>Male</span>
        </div>
        <div className={fieldClass}>
          <span className={labelClass}>Father's Name</span>
          <span className="colonClass">:</span>
          <span>R. Ayyasamy</span>
        </div>
        <div className={fieldClass}>
          <span className={labelClass}>Nationality</span>
          <span className="colonClass">:</span>
          <span>Indian</span>
        </div>
        <div className={fieldClass}>
          <span className={labelClass}>Stable Address</span>
          <span className="colonClass">:</span>
          <span>#34 Manakkollai, Vridhachalam Taluk.</span>
        </div>
        <div className={fieldClass}>
          <span className={labelClass}>Temporary Address</span>
          <span className="colonClass">:</span>
          <span>Kallikuppam, Ambattur, Chennai - 53.</span>
        </div>
        <div className={fieldClass}>
          <span className={labelClass}>Languages Known</span>
          <span className="colonClass">:</span>
          <span>English, Tamil</span>
        </div>
        <div className={fieldClass}>
          <span className={labelClass}>PAN Card Number</span>
          <span className="{colonClass}">:</span>
          <span>ASOPB5518J</span>
        </div>
        <div className={fieldClass}>
          <span className={labelClass}>Passport Number</span>
          <span className="colonClass">:</span>
          <span>K5838034</span>
        </div>
      </div>

      {/* Declaration Section */}
      <div className="mt-6">
        <h3 className="font-semibold underline mb-2">Declaration</h3>
        <p className="text-gray-700 leading-relaxed text-justify text-sm">
          I, hereby declare that the information furnished above is true to the best of my knowledge. 
          If given an opportunity to work in your esteemed organization, I can perform to the best 
          of my capabilities in a way that satisfies the organization's need and my career thirst.
        </p>
        <div className="mt-4">
          <p><span className={labelClass}>Date:</span> __________</p>
          <p><span className={labelClass}>Place:</span> __________</p>
        </div>
        <div className="mt-6 font-semibold">
          (A. Balamurugan)
        </div>
      </div>
    </div>
  );
}