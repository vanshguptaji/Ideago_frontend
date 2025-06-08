import React from "react";
import image1 from "../../assets/HomeImages/WHyChoose/Frame35.svg";
import image2 from "../../assets/HomeImages/WHyChoose/Frame38.svg";
import image3 from "../../assets/HomeImages/WHyChoose/Frame39.svg";
import image4 from "../../assets/HomeImages/WHyChoose/Frame37.svg";
import image5 from "../../assets/HomeImages/WHyChoose/Frame40.svg";

const features = [
	{
		img: image1,
		label: "10+ Years of Excellence",
	},
	{
		img: image2,
		label: "236 Projects Completed",
	},
	{
		img: image3,
		label: "100% Client Satisfaction",
	},
	{
		img: image4,
		label: "On-Time Project Delivery",
	},
	{
		img: image5,
		label: "Tailor-Made Designs",
	},
];

const WhyChoose = () => (
	<section className="py-12 px-48 text-center bg-[#F4EFEB]">
		<h2 className="text-3xl md:text-4xl font-serif mb-14 tracking-wide uppercase font-normal">
			Why Choose Ideago Interiors?
		</h2>
		<div className="flex justify-center gap-x-24 gap-y-12">
			{features.map((feature, idx) => (
				<div className="flex flex-col items-center w-56" key={idx}>
					<div className="flex items-center justify-center mb-4">
						<img
							src={feature.img}
							alt={feature.label}
							className="w-32 h-32 object-contain"
							draggable={false}
						/>
					</div>
					<div className="text-[#2c3e50] font-medium text-lg font-sans tracking-wide">
						{feature.label}
					</div>
				</div>
			))}
		</div>
	</section>
);

export default WhyChoose;