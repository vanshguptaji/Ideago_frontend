import React, { useState } from "react";

const ImageWithLoader = ({ src, alt, className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <svg
            className="animate-spin-fast h-10 w-10 text-blue-500 drop-shadow-lg"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 50 50"
          >
            <circle
              className="opacity-20"
              cx="25"
              cy="25"
              r="20"
              stroke="currentColor"
              strokeWidth="6"
            />
            <path
              className="opacity-80"
              fill="currentColor"
              d="M25 5
                a 20 20 0 0 1 0 40
                a 20 20 0 0 1 0 -40"
            />
          </svg>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
        className={`object-cover w-full h-full transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        loading="lazy"
        {...props}
      />
    </div>
  );
};

export default ImageWithLoader;