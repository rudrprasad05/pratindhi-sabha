import { FullPostType } from "@/types";
import Image from "next/image";
import react from "react";

interface props {
  posts: FullPostType[];
}

const SideNav: React.FC<props> = ({ posts }) => {
  const arr: FullPostType[] = posts.slice(0, 3);
  return (
    <div className=" sticky rounded-sm shadow-sm top-8 bg-secondary py-5 px-7">
      <h1 className="text-xl font-bold pb-5">Recent Posts</h1>
      {arr.map((item) => (
        <div key={item.id} className="mb-5">
          <div className="">
            <img className="rounded-md" src={"/pic.jpg"} alt="" />
          </div>
          <div className="">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
