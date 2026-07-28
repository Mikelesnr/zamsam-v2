import img1 from "@/Images/home/20221123_124848.jpg";
import img2 from "@/Images/home/20230331_131544.jpg";
import img3 from "@/Images/home/20240306_155904.jpg";
import img4 from "@/Images/home/20240824_103352.jpg";
import img5 from "@/Images/home/20250327_120308.jpg";
import img6 from "@/Images/home/20250327_120316.jpg";
import img7 from "@/Images/home/20250327_121311.jpg";
import img8 from "@/Images/home/20250805_144412.jpg";
import img9 from "@/Images/home/20251030_095815.jpg";
import img10 from "@/Images/home/20251030_130902.jpg";
import img11 from "@/Images/home/20251030_144428.jpg";
import img12 from "@/Images/home/IMG_20210602_145348.jpg";
import img13 from "@/Images/home/IMG_20211113_115411.jpg";

export type GalleryImage = {
  src: string;
  alt: string;
};

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: img1, alt: "Zamsam Engineering job site — refrigeration work" },
  { src: img2, alt: "Zamsam Engineering job site — cooling equipment" },
  { src: img3, alt: "Zamsam Engineering job site — installation in progress" },
  { src: img4, alt: "Zamsam Engineering job site — servicing on location" },
  { src: img5, alt: "Zamsam Engineering job site — refrigeration equipment" },
  { src: img6, alt: "Zamsam Engineering job site — cold room equipment" },
  { src: img7, alt: "Zamsam Engineering job site — technician at work" },
  { src: img8, alt: "Zamsam Engineering job site — completed installation" },
  { src: img9, alt: "Zamsam Engineering job site — refrigeration unit" },
  { src: img10, alt: "Zamsam Engineering job site — cooling system" },
  { src: img11, alt: "Zamsam Engineering job site — technician servicing equipment" },
  { src: img12, alt: "Zamsam Engineering job site — on-site work" },
  { src: img13, alt: "Zamsam Engineering job site — completed job" },
];