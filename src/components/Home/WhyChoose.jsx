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
	<section className="py-12 px-4 sm:px-8 md:px-24 lg:px-48 text-center bg-[#F4EFEB]">
		<style>
			{`
                @import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap');
                .font-marcellus { font-family: 'Marcellus SC', serif; }
            `}
		</style>
		<h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-marcellus text-[#2d4661] mb-10 md:mb-14 tracking-wide">
			Why Choose Ideago Interiors?
		</h2>
		<div className="flex flex-col gap-y-8 sm:gap-y-10 md:flex-row md:justify-center md:gap-x-24 md:gap-y-12">
			{features.map((feature, idx) => (
				<div
					className="flex flex-col items-center w-full sm:w-72 md:w-56 max-w-xs mx-auto md:mx-0"
					key={idx}
				>
					<div className="flex items-center justify-center mb-4">
						<img
							src={feature.img}
							alt={feature.label}
							className="w-24 h-24 md:w-32 md:h-32 object-contain"
							draggable={false}
						/>
					</div>
					<div className="text-[#2c3e50] font-medium text-base md:text-lg font-sans tracking-wide">
						{feature.label}
					</div>
				</div>
			))}
		</div>
	</section>
);

export default WhyChoose;