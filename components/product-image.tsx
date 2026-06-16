import Image from "next/image";

interface ProductImageProps {
  src?: string;
  alt: string;
  className?: string;
}

export function ProductImage({ src, alt, className }: ProductImageProps) {
  const imageSrc = src && (src.startsWith("/") || src.startsWith("https://cdn.sanity.io/")) ? src : "/images/product-placeholder.svg";

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={1200}
      height={900}
      className={className}
      sizes="(min-width: 1024px) 720px, 100vw"
      priority={false}
    />
  );
}
