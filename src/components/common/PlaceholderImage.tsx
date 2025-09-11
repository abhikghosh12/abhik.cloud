import React from 'react';

interface PlaceholderImageProps {
  width?: string | number;
  height?: string | number;
  text?: string;
  className?: string;
  alt?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 400,
  height = 300,
  text = 'Image',
  className = '',
  alt = 'Placeholder'
}) => {
  return (
    <div
      className={`bg-gradient-to-br from-[#E91E63] to-[#9C27B0] flex items-center justify-center text-white font-medium ${className}`}
      style={{ width, height }}
    >
      <span className="text-center">
        {text}
        <br />
        <span className="text-sm opacity-75">{typeof width === 'number' ? width : '100%'} × {typeof height === 'number' ? height : 'auto'}</span>
      </span>
    </div>
  );
};

export default PlaceholderImage;