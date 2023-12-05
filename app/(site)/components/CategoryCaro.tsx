"use client";

import { FullCategoryType } from "@/types";
import React from "react";
import Carousel from "react-multi-carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { responsive } from "./CaroData";

import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface props {
  categories: FullCategoryType[];
}

const CaroCard = ({ data }: { data: FullCategoryType }) => {
  return (
    <div
      className="bg-secondary my-5 ring-1 ring-primary rounded-md overflow-clip text-center pb-5 mr-5 mb-5"
      key={data.id}
    >
      <div className="">
        <p className="py-5 capitalize">{data.name}</p>
      </div>

      <Link
        href={data.name || ""}
        // to={`/category/?query=${data.slug}&id=${data.id}`}
        className={`${buttonVariants({ variant: "link" })} px-3`}
      >
        View Blogs
      </Link>
    </div>
  );
};

const CategoryCaro: React.FC<props> = ({ categories }) => {
  const product = categories.map((item) => <CaroCard data={item} />);

  return (
    <div className="py-10">
      <h1 className="text-3xl text-primary pb-10">Browse by Category</h1>

      <Carousel
        additionalTransfrom={0}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container"
        dotListClass=""
        draggable
        infinite={true}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={true}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {product}
      </Carousel>
    </div>
  );
};

export default CategoryCaro;
