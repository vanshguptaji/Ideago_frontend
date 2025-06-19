import React, { useState } from "react";

const ImageWithLoader = ({ src, alt, className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <svg
            className="animate-spin h-8 w-8 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
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