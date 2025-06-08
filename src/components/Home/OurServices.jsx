import React, { useState } from "react";
import livingRoom from "../../assets/HomeImages/Ourservice.png";
import commercialImg from "../../assets/HomeImages/CommercialServices.png";
import modularKitchenImg from "../../assets/HomeImages/ModularKitchens.png";
import spacePlanningImg from "../../assets/HomeImages/SpacePlanning.png"; // add your image
import turnkeyImg from "../../assets/HomeImages/Turnkey.png"; // add your image

const services = [
	{
		label: "Residential Interior Design",
		image: livingRoom,
		title: "Transform your living spaces into luxurious homes tailored to your lifestyle.",
		desc: "We specialize in designing warm, functional, and stylish interiors that reflect your personality and enhance everyday living.",
	},
	{
		label: "Commercial Interior Design",
		image: commercialImg,
		title: "Create workspaces that inspire productivity and innovation.",
		desc: "From offices to retail outlets, we design professional environments that align with your brand identity and operational needs.",
	},
	{
		label: "Modular Kitchens",
		image: modularKitchenImg,
		title: "Experience the perfect blend of beauty and functionality with our modular kitchens.",
		desc: "Custom-built for efficiency and aesthetics, our kitchen designs maximize space and simplify your culinary life.",
	},
	{
		label: "Space Planning & 3D Visualisation",
		image: spacePlanningImg,
		title: "Visualize your dream space before it’s built.",
		desc: "Our expert space planning and 3D rendering services help you make informed decisions, ensuring perfect utilization and design clarity.",
	},
	{
		label: "Turnkey Projects",
		image: turnkeyImg,
		title: "End-to-end interior solutions, delivered flawlessly.",
		desc: "From concept to completion, we manage everything — ensuring a hassle-free experience and a perfectly executed vision.",
	},
];

const OurServices = () => {
	const [selected, setSelected] = useState(0);
	const [animating, setAnimating] = useState(false);
	const [direction, setDirection] = useState("right");

	// Animation handler
	const handleTabClick = (idx) => {
		if (idx === selected) return;
		setDirection(idx > selected ? "right" : "left");
		setAnimating(true);
		setTimeout(() => {
			setSelected(idx);
			setAnimating(false);
		}, 350); // match duration-350
	};

	return (
		<section className="w-full bg-[#f7f6f4] py-16 px-4">
			{/* Import Marcellus SC font */}
			<style>
				{`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap');
          .font-marcellus { font-family: 'Marcellus SC', serif; }
        `}
			</style>
			<div className="max-w-6xl mx-auto">
				{/* Title */}
				<h2 className="text-center text-3xl md:text-4xl font-marcellus text-[#2d4661] mb-8 tracking-wide">
					Our Services
				</h2>
				{/* Service Tabs */}
				<div className="flex justify-center gap-3 mb-10">
					{services.map((service, idx) => (
						<button
							key={service.label}
							onClick={() => handleTabClick(idx)}
							className={`px-6 py-2 text-base md:text-lg font-marcellus border transition 
                ${
									selected === idx
										? "bg-[#2d4661] text-white border-[#2d4661]"
										: "bg-[#dbe6ef] text-[#2d4661] border-[#dbe6ef] hover:bg-[#b8c9db]"
								}
                `}
							style={{ letterSpacing: "0.5px" }}
						>
							{service.label}
						</button>
					))}
				</div>
				{/* Content with slider animation */}
				<div className="relative h-[500px]">
					<div
						className={`
              absolute inset-0 w-full transition-transform duration-350
              ${animating ? (direction === "right" ? "-translate-x-full opacity-0" : "translate-x-full opacity-0") : "translate-x-0 opacity-100"}
              z-10
            `}
						style={{ pointerEvents: animating ? "none" : "auto" }}
					>
						{/* Current Content */}
						<div className="flex flex-col md:flex-row items-center md:items-start gap-10 h-full">
							{/* Left: Text */}
							<div className="flex-[1.5] flex flex-col justify-center h-full">
								<h3 className="text-xl md:text-2xl font-marcellus text-[#2d4661] mb-4 leading-snug uppercase">
									{services[selected].title}
								</h3>
								<p className="text-[#444] text-base md:text-lg mt-8 mb-8 font-marcellus">
									{services[selected].desc}
								</p>
								<button className="mt-2 px-8 py-2 border border-[#2d4661] text-[#2d4661] font-marcellus text-lg uppercase tracking-wide bg-transparent hover:bg-[#2d4661] hover:text-white transition">
									Schedule Call
								</button>
							</div>
							{/* Right: Image */}
							<div className="flex-[3] flex justify-center items-center">
								<img
									src={services[selected].image}
									alt={services[selected].label}
									className="rounded-lg shadow-lg object-cover"
									style={{ width: "813px", height: "468px" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurServices;