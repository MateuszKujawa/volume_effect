import React from 'react';
import AnimatedOnScroll from '../../untils/AnimatedOnScroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';


interface InstagramImage {
    id: number;
    src: string;
    alt: string;
    link: string;
}
  
const images: InstagramImage[] = [
    {
        id: 1,
        src: "https://cdn.prod.website-files.com/60993dcfc8e83c7917ae8b70/60a47bdde0ad77f71c7db8bb_instagram-image-1-salon-webflow-template.jpg",
        alt: "Instagram Image 1",
        link: "https://www.instagram.com/example1",
    },
    {
        id: 2,
        src: "https://cdn.prod.website-files.com/60993dcfc8e83c7917ae8b70/60a47bdead8d3b6f7c232762_instagram-image-2-salon-webflow-template.jpg",
        alt: "Instagram Image 2",
        link: "https://www.instagram.com/example2",
    },
    {
        id: 3,
        src: "https://cdn.prod.website-files.com/60993dcfc8e83c7917ae8b70/60a47bded3f32c01958b9eb8_instagram-image-3-salon-webflow-template.jpg",
        alt: "Instagram Image 3",
        link: "https://www.instagram.com/example3",
    },
    {
        id: 4,
        src: "https://cdn.prod.website-files.com/60993dcfc8e83c7917ae8b70/60a47bde83c00dd55fb6e994_instagram-image-4-salon-webflow-template.jpg",
        alt: "Instagram Image 4",
        link: "https://www.instagram.com/example4",
    },
    {
        id: 5,
        src: "https://cdn.prod.website-files.com/60993dcfc8e83c7917ae8b70/60a47bdd61482958a1846871_instagram-image-7-salon-webflow-template.jpg",
        alt: "Instagram Image 5",
        link: "https://www.instagram.com/example5",
    },
    {
        id: 6,
        src: "https://cdn.prod.website-files.com/60993dcfc8e83c7917ae8b70/60a47bdde0ad77f71c7db8bb_instagram-image-1-salon-webflow-template.jpg",
        alt: "Instagram Image 6",
        link: "https://www.instagram.com/example6",
    },
];

const FollowUs: React.FC = () => {

    return (
    <section className="w-full mx-auto justify-center items-center bg-slate-100">
        <AnimatedOnScroll
          animation={{
            initial: { opacity: 0, y: -50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 1, ease: "easeOut" },
          }}
        >
            <div className="text-center pt-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Sprawdź nas na instagramie</h2>
            </div>
        </AnimatedOnScroll>

        <div className="container px-5 py-12 mx-auto lg:pt-24 lg:px-32">
        <AnimatedOnScroll
          animation={{
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 1, ease: "easeOut" },
          }}
        >
            <div className="flex flex-wrap -m-1 md:-m-2">
                <div className="flex flex-wrap w-1/2">
                {images.slice(0, 3).map((image) => (
                    <div
                    key={image.id}
                    className={`${
                        image.id === 3 ? "w-full" : "w-1/2"
                    } p-1 md:p-2`}
                    >
                    <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block overflow-hidden rounded-lg"
                    >
                        <img
                        alt={image.alt}
                        className="block object-cover object-center w-full h-full rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        src={image.src}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
                        </div>
                    </a>
                    </div>
                ))}
                </div>
                
                <div className="flex flex-wrap w-1/2">
                {images.slice(3).map((image) => (
                    <div
                    key={image.id}
                    className={`${
                        image.id === 4 ? "w-full" : "w-1/2"
                    } p-1 md:p-2`}
                    >
                    <a
                        href={image.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block overflow-hidden rounded-lg"
                    >
                        <img
                        alt={image.alt}
                        className="block object-cover object-center w-full h-full rounded-lg transform transition-transform duration-300 group-hover:scale-105"
                        src={image.src}
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl" />
                        </div>
                    </a>
                    </div>
                ))}
                </div>
            </div>
        </AnimatedOnScroll>
        </div>
    </section>
    );
};

export default FollowUs;