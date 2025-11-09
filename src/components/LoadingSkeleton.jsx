import React from "react";

const LoadingSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      {/* Advice title placeholder */}
      <div className="h-4 bg-gray-600 rounded w-1/3 mx-auto"></div>

      {/* Advice text placeholder */}
      <div className="space-y-2">
        <div className="h-5 bg-gray-600 rounded w-3/4 mx-auto"></div>
        <div className="h-5 bg-gray-600 rounded w-2/4 mx-auto"></div>
      </div>

      {/* Divider placeholder */}
      <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto mt-6"></div>
    </div>
  );
};

export default LoadingSkeleton;
