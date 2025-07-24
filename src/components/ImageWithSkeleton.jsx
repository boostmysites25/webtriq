import React, { useState } from "react";

const ImageWithSkeleton = ({
  src,
  alt = "",
  className = "",
  skeletonClassName = "",
  width,
  height,
  loading = "lazy",
  onLoad,
  onError,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = (e) => {
    setIsLoading(false);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setIsLoading(false);
    setHasError(true);
    if (onError) onError(e);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Skeleton loader */}
      {isLoading && (
        <div
          className={`skeleton absolute inset-0 rounded ${skeletonClassName}`}
          style={{ 
            width: width || "100%", 
            height: height || "100%",
            aspectRatio: props.style?.aspectRatio 
          }}
        />
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div
          className={`bg-gray-200 flex items-center justify-center text-gray-500 text-sm ${className}`}
          style={{ 
            width: width || "100%", 
            height: height || "100%",
            aspectRatio: props.style?.aspectRatio 
          }}
        >
          <span>Image failed to load</span>
        </div>
      )}
      
      {/* Actual image */}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithSkeleton; 