"use client";
import { useState } from "react";
import Image from "next/image";

const PlaceholderImage = ({
  src,
  alt,
  ...props
}: {
  src: string;
  alt: string;
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      {...props}
      onError={() => setImgSrc("/poster-placeholder.png")}
      width={500}
      height={750}
      priority
    />
  );
};

export default PlaceholderImage;
