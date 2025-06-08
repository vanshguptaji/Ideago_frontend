import React from "react";
import image1 from "../assets/HomeImages/Frame12.svg";
import image2 from "../assets/HomeImages/Frame13.svg";
import image3 from "../assets/HomeImages/Frame14.svg";

const projects = [
	{
		name: "Projects Name",
		img: image1,
	},
	{
		name: "Projects Name",
		img: image2,
	},
	{
		name: "Projects Name",
		img: image3,
	},
];

const RecentProjects = () => (
	<section className="bg-[#f7f3ef] py-[60px] pb-10 text-center">
		<h2 className="font-marcellus font-normal text-[2.2rem] tracking-[0.05em] text-[#2d3441] mb-10">
			Our Recent Projects
		</h2>
		<div className="flex justify-center gap-8 mb-9 flex-wrap">
			{projects.map((project, idx) => (
				<div
					key={idx}
					className="bg-white rounded-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.07)] w-[360px] pb-[18px] flex flex-col items-center"
				>
					<img
						src={project.img}
						alt={project.name}
						className="w-full h-[300px] object-cover rounded-t-[10px]"
						draggable={false}
					/>
					<div className="font-marcellus text-[1.1rem] text-[#2d3441] mt-4 tracking-[0.03em]">
						{project.name}
					</div>
				</div>
			))}
		</div>
		<button className="bg-[#2d3441] text-white font-marcellus text-[1.1rem] py-[14px] px-[38px] border-none rounded-[4px] tracking-[0.05em] cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-colors duration-200 hover:bg-[#232b39]">
			Explore Projects
		</button>
		<h2 className="font-marcellus font-normal text-[2.5rem] tracking-[0.04em] text-[#3b465a] capitalize mt-[100px]">
			Modular Kitchens Designed for Modern Living
		</h2>
	</section>
);

export default RecentProjects;
