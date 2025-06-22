import React, { useEffect, useState } from "react";
import image from "../../assets/HomeImages/Frame12.svg";

const teamMembers = [
  {
    name: "Krish Sadh",
    role: "3d Designer",
    image: image,
  },
  {
    name: "Ankita Srivastav",
    role: "Senior Designer",
    image: image,
  },
  {
    name: "Krish Sadh",
    role: "3d Designer",
    image: image,
  },
  {
    name: "Ankita Srivastav",
    role: "Senior Designer",
    image: image,
  },
];

const OurTeam = () => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section className="bg-[#f7f3ef] py-16">
      <h2 className="font-marcellus text-[2rem] font-normal tracking-wide mb-10 text-center capitalize">
        Our team
      </h2>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-8 gap-y-8 max-w-[1150px] mx-auto items-center justify-items-center px-4">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex flex-col items-start">
            {idx % 2 != 0 || isScreenSmall ? (
              <>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[360px] h-[260px] object-cover shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                />
                <div className="font-marcellus   font-semibold text-[1.5rem] tracking-wide mb-1 capitalize">
                  {member.name}
                </div>
                <div className="font-marcellus font-normal text-lg text-[#444] tracking-tight mb-6">
                  {member.role}
                </div>
              </>
            ) : (
              <>
                <div className="font-marcellus font-semibold text-[1.5rem] tracking-wide mb-1 capitalize">
                  {member.name}
                </div>
                <div className="font-marcellus font-normal text-lg text-[#444] tracking-tight">
                  {member.role}
                </div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-[360px] h-[260px] object-cover mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
