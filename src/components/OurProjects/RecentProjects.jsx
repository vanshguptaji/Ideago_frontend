import React, { useState, useRef, useLayoutEffect } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "../ui/draggable-card";
import ImageWithLoader from "../common/ImageWithLoader";

const images = Object.values(
  import.meta.glob("../../assets/OurProjects/projects/*.{jpg,jpeg,png,svg}", {
    eager: true,
    import: "default",
    query: "?url",
  })
);

const projectNames = [
  "Exterior Elevation",
  "Modern Modular Kitchen",
  "Modern Luxe Kitchen",
  "Minimalist Living Room",
  "Modern Party Room",
  "Compact Living Room Upgrade",
  "Modern Bedroom Design",
  "Elegant Bedroom",
  "Stylish Home Office",
  "Urban Seminar Hall",
  "Urban Living Space",
  "Scandinavian Interior",
  "Industrial Style Loft",
  "Coastal Living Room",
  "Rustic Cabin Retreat",
  "Elegant Office Space",
  "Modern Family Room",
  "Spacious Living Area",
  "Sophisticated Kitchen",
  "Bright and Airy Kitchen",
  "Chic Studio Apartment",
  "Urban Chic Apartment",
  "Modern Stylish Kitchen",
  "Elegant Living Room",
  "Contemporary Office",
  "Elegant Living Room",
  "Living Room with a View",
  "Sleek Kitchen Design",
  "Classic Living Room",
  "Urban Apartment Render",
  "Contemporary Kitchen",
  "Residential Exterior",
  "Residential Exterior",
  "Living Room Render",
  "Elegant Hallway",
  "Modern Facade",
  "Artistic Living Space",
  "Urban Loft Design",
  "Minimalist Interior",
  "Cozy Bedroom Retreat",
  "Sleek Bathroom Design",
  "Contemporary Office Space",
  "Luxury Suite",
  "Family Home Render",
  "Creative Workspace",
];

const projectDescriptions = [
  `At IdeaGo Interiors, we take pride in redefining urban aesthetics with design solutions that merge functionality with visual appeal. Our latest project—a stunning exterior elevation for Mr. Shivendra Singh’s residence in Varanasi—is a reflection of our commitment to elegant and purposeful design.

Set in the cultural heart of Varanasi, this project is a fusion of modern elevation trends and regional sensibilities. The facade features clean lines, textured surfaces, and a smart use of natural tones, creating a timeless look that resonates with both contemporary architecture and heritage surroundings.

Key Highlights:

Modern façade with minimalist detailing

Use of high-durability exterior materials suited for Varanasi's climate

Customized lighting layout to enhance nighttime aesthetics

Balconies and facade textures designed with symmetry and shadow play

Whether it’s a residential exterior elevation, a 3D front design, or modern architectural visualization, IdeaGo continues to set benchmarks for interior and exterior design services in Varanasi.

Looking to transform your home’s first impression? Let your walls speak with design.

📍 Location: Varanasi
👤 Client: Mr. Shivendra Singh
🏗️ Service: Modern Exterior Elevation Design
🏡 Category: Residential Architecture & Facade Design
`,

  `At IdeaGo Interiors, we specialize in creating spaces that are not just beautiful, but brilliantly functional. Our recent project—a modern modular kitchen designed for Mr. Ankur Rao in Varanasi—is a testament to our passion for smart design, premium materials, and personalized space planning.

This modular kitchen is built with space optimization, seamless storage, and modern aesthetics at its core. Designed with a sleek combination of matte-finish cabinets, soft-close drawers, integrated lighting, and ergonomic work zones, it offers both comfort and class.

Project Highlights:

L-shaped modular layout for efficient workflow

Anti-scratch laminate finishes in earthy tones

Modular storage units with concealed handles

Chimney and hob setup for modern Indian cooking needs

Ambient and task lighting for a well-lit workspace

Moisture-resistant materials ideal for Varanasi’s climate

As one of the leading interior design firms in Varanasi, IdeaGo Interiors is proud to deliver customized modular kitchen designs that combine style, durability, and functionality—perfectly suited for today’s modern lifestyle.

📍 Location: Varanasi
👤 Client: Mr. Ankur Rao
🍽️ Service: Modern Modular Kitchen Design
🏡 Category: Residential Kitchen Interiors

Looking to upgrade your kitchen into a space that inspires? Let IdeaGo bring your dream kitchen to life.`,


  `At IdeaGo Interiors, functionality meets finesse in every corner we design. Our latest project for Mr. Ankur Singh, a premium modular kitchen design in the heart of Varanasi, is a perfect reflection of modern convenience and aesthetic harmony.

Designed to enhance everyday living, this kitchen features modular cabinetry, seamless storage solutions, and a clean layout that ensures ease of movement while cooking. With high-quality finishes and space-maximizing elements, this kitchen is crafted to simplify life without compromising on style.

Project Highlights:

L-shaped modular layout for efficient workflow

Soft-close cabinets with durable laminate finish

Chimney and hob installation for modern Indian cooking

Overhead storage with hidden lighting

Sleek countertops and splash-proof wall paneling

Smart design tailored to fit compact urban homes

As one of the trusted names for modular kitchens in Varanasi, IdeaGo Interiors delivers kitchens that are built to last, easy to maintain, and designed for how you live.

📍 Location: Varanasi
👤 Client: Mr. Ankur Singh
🍽️ Service: Modular Kitchen Interior Design
🏡 Category: Residential Kitchen Interiors

Looking for a stylish yet practical kitchen transformation? Choose IdeaGo Interiors — the expert in modular kitchens and interior design in Varanasi.`,


  `At IdeaGo Interiors, we believe your bedroom should be more than just a place to sleep — it should be a personal sanctuary that reflects your lifestyle and taste. Our latest interior design project for Mr. Sharad Gupta in Varanasi showcases a master bedroom that blends luxury, comfort, and smart functionality.

Designed with a modern Indian aesthetic, this space features a calming color palette, intelligent storage solutions, and elegant lighting. Every detail — from the textured accent wall to the plush headboard and ambient ceiling lights — has been thoughtfully curated to create a tranquil yet stylish environment.

Project Highlights:

Modern master bedroom with soft neutral tones

Custom-designed wardrobes with sliding shutters

Designer headboard and upholstered back wall

False ceiling with cove lighting for a soothing ambiance

Engineered wooden flooring for a warm and premium feel

Smart storage units and clutter-free layout

Known as one of the most trusted interior designers in Varanasi, IdeaGo Interiors continues to deliver tailored home interior solutions that are both aesthetically pleasing and highly functional.

📍 Location: Varanasi
👤 Client: Mr. Sharad Gupta
🛏️ Service: Master Bedroom Interior Design
🏡 Category: Residential Interior Design`,


  `At IdeaGo Interiors, we understand that a well-designed workspace inspires productivity, collaboration, and confidence. Our recent office interior design project for Om Enterprises in Varanasi focused on creating a modern, high-functioning conference room that reflects professionalism and purpose.

The space has been thoughtfully planned with ergonomic furniture, acoustic wall treatments, and a minimal yet elegant design language, ensuring both aesthetics and utility. Equipped with smart lighting, concealed cabling, and sleek modular furniture, this conference room promotes focused discussions and seamless presentations.

Project Highlights:

Contemporary conference table with integrated cable management

Comfortable executive seating with lumbar support

Acoustic wall panels to minimize sound disturbances

Ambient LED lighting with task-specific illumination

Customized wall décor and branding elements

Neutral color palette to maintain a professional tone

As one of the leading names in office interior design in Varanasi, IdeaGo Interiors continues to transform commercial spaces into environments that reflect brand identity and support business efficiency.

📍 Location: Varanasi
🏢 Client: Om Enterprises
🎯 Service: Conference Room & Office Interior Design
🏬 Category: Corporate/Commercial Interiors`,


  `At IdeaGo Interiors, we believe true luxury lies in simplicity. Our recent project for Mr. Sahil in Varanasi is a perfect example of how a well-crafted modern bedroom can reflect personal style while embracing the energy of the modern material world.

Designed with clean lines, smart storage, and a neutral palette, this bedroom blends modern interior design trends with a sense of calm and clarity. From the sleek floating furniture to ambient lighting and thoughtfully chosen materials, every detail reflects the elegance of minimalism—designed to complement a fast-paced modern lifestyle.

Project Highlights:

Modern minimalist theme with soft color tones

Wall-mounted bed frame with textured headboard

Modular wardrobe with matte finish and hidden handles

Cove ceiling lights for ambient warmth

Space-saving furniture for a clutter-free experience

Use of durable, low-maintenance materials ideal for Varanasi’s climate

As a trusted name in bedroom interior design in Varanasi, IdeaGo Interiors brings you tailor-made solutions that balance modern aesthetics with practical living.

📍 Location: Varanasi
👤 Client: Mr. Sahil
🛋️ Service: Modern Bedroom Interior Design
🏡 Category: Residential Interiors`,


  `At IdeaGo Interiors, we believe great design doesn’t have to come with a high price tag. Our recent project for Mr. Economical in Varanasi is a perfect representation of how thoughtful planning and creative execution can transform a space beautifully—while staying within budget.

This simple bedroom interior design is tailored for functionality, comfort, and aesthetics. From smart space utilization to durable, cost-effective materials, every element is designed to offer maximum value without compromising on style. Ideal for homeowners seeking budget interior design in Varanasi, this project is a perfect example of affordable elegance.

Project Highlights:

Clean and minimalist layout with essential furniture

Laminated wardrobe and storage units for long-lasting utility

Neutral color palette to enhance space perception

Wall-mounted study desk and floating shelves

Cost-effective lighting and decor elements

Designed using Varanasi-sourced materials to reduce cost

As one of the most trusted names in affordable interior design in Varanasi, IdeaGo Interiors helps clients achieve their dream spaces with smart, resourceful solutions tailored to every budget.`,


  `At IdeaGo Interiors, we bring dreams to life with interiors that embody elegance, sophistication, and personal taste. Our recent project for Mr. Agrawal in the prestigious Bhelupur locality of Varanasi is a stunning example of timeless luxury blended with modern comfort.

Designed with meticulous attention to detail, this luxury bedroom interior showcases premium materials, bespoke furniture, and a curated color palette that evokes warmth and richness. Every corner of the room reflects refined aesthetics and a lifestyle rooted in elegance and comfort.

Project Highlights:

Designer wall paneling with rich fabric textures

Custom king-size bed with upholstered headboard

Italian marble-inspired flooring and mood lighting

False ceiling with layered lighting effects

Walk-in wardrobe with mirror-finish shutters

Handpicked décor elements to complement Varanasi’s heritage vibe

As a trusted leader in luxury interior design in Varanasi, especially in upscale areas like Bhelupur, IdeaGo Interiors crafts spaces that offer a seamless blend of opulence, culture, and functionality.

📍 Location: Bhelupur, Varanasi
👤 Client: Mr. Agrawal
🛌 Service: Luxury Bedroom Interior Design
🏡 Category: High-End Residential Interiors`,


  `At IdeaGo Interiors, we believe that a living room is more than just a space — it's the heart of every home. Our latest project for Mr. Manoj Jha in the prominent Ravindrapuri area of Varanasi combines contemporary style with intelligent functionality, creating a modern living hall that reflects both elegance and innovation.

This living space is designed with a balance of warm tones, clean lines, and tech-integrated convenience. From custom-built furniture to home automation features, every element was thoughtfully curated to provide a seamless lifestyle experience.

Project Highlights:

Sleek and spacious TV unit with hidden storage

Smart lighting system with voice/app control

False ceiling with ambient and accent lighting layers

Wall textures and finishes that reflect modern Indian luxury

Modular display and storage units for aesthetics and utility

Integrated home automation for lights, fans, and entertainment setup

As a growing name in living room interior design in Varanasi, especially in premium localities like Ravindrapuri, IdeaGo Interiors is known for blending style with smart living solutions—bringing the future of interiors to your home today.

📍 Location: Ravindrapuri, Varanasi
👤 Client: Mr. Manoj Jha
🛋️ Service: Living Hall Interior Design + Home Automation
🏡 Category: Smart Residential Interiors`,
];

const projects = images.map((image, idx) => ({
  name: projectNames[idx] || `Project ${idx + 1}`,
  image,
  description: projectDescriptions[idx] || "No description available.",
}));

const PROJECTS_PER_PAGE = 9;

function Modal({ open, onClose, project, image, thumbRect }) {
  const modalImgRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);

  const handleMouseMove = (e) => {
    const modal = e.currentTarget;
    const rect = modal.getBoundingClientRect();
    const y = e.clientY - rect.top;
    const percentY = (y / rect.height - 0.5) * 2; 
    setParallaxY(percentY * 20);
  };

  const handleMouseLeave = () => {
    setParallaxY(0);
  };

  useLayoutEffect(() => {
    if (!open || !thumbRect || !modalImgRef.current) return;

    const modalImg = modalImgRef.current;
    const modalRect = modalImg.getBoundingClientRect();

    const scaleX = thumbRect.width / modalRect.width;
    const scaleY = thumbRect.height / modalRect.height;
    const translateX =
      thumbRect.left +
      thumbRect.width / 2 -
      (modalRect.left + modalRect.width / 2);
    const translateY =
      thumbRect.top +
      thumbRect.height / 2 -
      (modalRect.top + modalRect.height / 2);

    modalImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scaleX}, ${scaleY})`;
    modalImg.style.transition = "none";

    requestAnimationFrame(() => {
      modalImg.style.transition =
        "transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1)";
      modalImg.style.transform = "";
      setAnimate(true);
    });
  }, [open, thumbRect]);

  useLayoutEffect(() => {
    if (!open && modalImgRef.current) {
      modalImgRef.current.style.transition = "";
      modalImgRef.current.style.transform = "";
    }
    if (!open) setAnimate(false);
  }, [open]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        className="bg-transparent rounded-lg shadow-lg max-w-4xl w-full p-0 relative max-h-[90vh] flex flex-col overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ cursor: "pointer" }}
      >
        <div
          className="absolute inset-0 w-full h-full z-0"
          style={{
            willChange: "transform",
            transform: `translateY(${parallaxY}px) scale(1.05)`,
            transition: "transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1)",
            pointerEvents: "none",
          }}
        >
          <img
            ref={modalImgRef}
            src={image}
            loading="lazy"
            alt={project.name}
            className="object-cover w-full h-full"
            draggable={false}
            style={{
              filter: "brightness(0.7)",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: animate ? "box-shadow 0.4s" : undefined,
              boxShadow: animate ? "0 10px 40px rgba(0,0,0,0.2)" : undefined,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.85) 100%)",
              zIndex: 1,
            }}
          />
        </div>
        <button
          className="absolute top-4 right-6 text-2xl font-bold text-gray-200 hover:text-white z-20"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex-1 flex flex-col overflow-y-auto pt-20 px-8 pb-8 z-10 relative">
          <div className="w-full flex flex-col items-center">
            <h3 className="text-3xl font-semibold mb-4 text-center text-white drop-shadow-lg">
              {project.name}
            </h3>
            <p className="text-base text-gray-200 text-left whitespace-pre-line">
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Collage2() {
  const [visibleCount, setVisibleCount] = useState(PROJECTS_PER_PAGE);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProjectIdx, setSelectedProjectIdx] = useState(null);
  const [thumbRect, setThumbRect] = useState(null);

  const thumbRefs = useRef([]);

  const handleKnowMore = () => {
    setVisibleCount((prev) => prev + PROJECTS_PER_PAGE);
  };

  const handleSeePhotos = (idx) => {
    const rect = thumbRefs.current[idx]?.getBoundingClientRect();
    setThumbRect(rect);
    setSelectedProjectIdx(idx);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProjectIdx(null);
    setThumbRect(null);
  };

  return (
    <section className="w-full py-12 px-2 mt-56 md:px-0 bg-[#f7f1ea] flex flex-col items-center">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap');
          .font-marcellus { font-family: 'Marcellus SC', serif; }
        `}
      </style>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-marcellus text-[#2d4661] mb-6 sm:mb-8 tracking-wide text-center">
        Recent Projects
      </h2>
      <p className="text-[#444] text-sm sm:text-base md:text-lg mb-8 font-marcellus text-center max-w-2xl">
        Explore our latest interior and exterior design projects, each crafted to reflect unique lifestyles and aspirations. From modern kitchens to elegant living spaces, discover how we turn ideas into reality.
      </p>
      <DraggableCardContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.slice(0, visibleCount).map((project, idx) => (
          <DraggableCardBody
            key={idx}
            className="p-0 bg-white/80 shadow-lg min-h-40 w-full max-w-xs"
          >
            <div
              className="relative h-64 w-full overflow-hidden rounded-md"
              ref={(el) => (thumbRefs.current[idx] = el)}
            >
              <ImageWithLoader
                src={project.image}
                alt={project.name}
                className=""
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col items-start">
                <span className="text-lg font-marcellus text-white drop-shadow font-semibold">
                  {project.name}
                </span>
                <button
                  className="mt-2 px-4 py-1 rounded bg-[#e3e6e8] text-[#3c2e1f] text-sm font-medium shadow hover:bg-[#d1d5db] transition cursor-pointer"
                  onClick={() => handleSeePhotos(idx)}
                >
                  Know More
                </button>
              </div>
            </div>
          </DraggableCardBody>
        ))}
      </DraggableCardContainer>
      {visibleCount < projects.length && (
        <button
          onClick={handleKnowMore}
          className="mt-8 px-6 py-2 rounded bg-[#e3e6e8] text-[#3c2e1f] text-base font-medium shadow hover:bg-[#d1d5db] transition"
        >
          Know More
        </button>
      )}
      {selectedProjectIdx !== null && (
        <Modal
          open={modalOpen}
          onClose={handleCloseModal}
          project={projects[selectedProjectIdx]}
          image={projects[selectedProjectIdx].image}
          thumbRect={thumbRect}
        />
      )}
    </section>
  );
}
