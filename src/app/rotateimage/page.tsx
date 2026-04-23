"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Article {
  category: string;
  title: string;
  link: string;
  image: string;
}

export default function Articles() {
  const articles: Article[] = [
    {
      category:
        "Our construction projects are recognized for their quality, durability, and attention to detail.",
      title: "Quality Excellence",
      link: "#",
      image: "/s4.jpg",
    },
    {
      category:
        "Modern construction techniques and materials to ensure the timely delivery of projects.",
      title: "Modern Techniques",
      link: "#",
      image: "/s3.jpg",
    },
    {
      category:
        "We adhere to the highest safety standards in all our construction activities.",
      title: "Safety Standards",
      link: "#",
      image: "/s1.jpg",
    },
    {
      category:
        "Our efficient project management ensures ontime completion of projects.",
      title: "Timely Delivery",
      link: "#",
      image: "/s2.jpg",
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-6 xl:px-20 lg:px-4 md:px-4 px-4">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} index={index} />
      ))}
    </div>
  );
}

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={inViewRef}
      initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
      animate={{
        opacity: inView ? 1 : 0,
        scale: inView ? 1 : 0.8,
        rotateY: inView ? 0 : -180,
        transition: {
          duration: 0.1,
          ease: "easeOut",
          delay: index * 0.1,
        },
      }}
      className="group shadow-lg overflow-hidden bg-white flex flex-col border-b-8 border-transparent hover:border-b-blue-800 transition-all duration-300 relative"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 transform group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-lg text-gray-800 mt-2">{article.title}</h2>
        <p className="text-md text-gray-500 mt-6">{article.category}</p>
        <div className="xl:mt-8 mt-4">
          <a href={article.link}>
            Read More{" "}
            <i className="las la-angle-double-right text-yellow"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
