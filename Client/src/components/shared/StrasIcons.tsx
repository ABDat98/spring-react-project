import React from "react";

const StarIcon = ({ filled = false }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-6 h-6 ${filled ? "text-yellow-500" : "text-gray-400"}`}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        {/* Common star path */}
        <path d="M12 2l3.09 6.26 6.91 1-5 4.87L18.18 22 12 18.26 5.82 22 7 14.13 2 9.13l6.91-1z" />
    </svg>
);

// Half star: render an empty star then overlay half a full star on top
const HalfStarIcon = () => (
    <div className="relative w-6 h-6">
        {/* The full (yellow) star clipped to 50% width */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
            <StarIcon filled={true} />
        </div>
        {/* The empty (gray) star as background */}
        <StarIcon filled={false} />
    </div>
);

export { StarIcon, HalfStarIcon };
