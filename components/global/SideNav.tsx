import { FullPostType } from "@/types";
import react from "react";

interface props {
  posts: FullPostType[];
}

const SideNav: React.FC<props> = ({ posts }) => {
  const arr: FullPostType[] = posts.slice(0, 3);
  return (
    <div className=" sticky top-8 bg-gray-50 py-5">
      <h1 className="text-xl font-bold">Recent Posts</h1>
      {arr.map((item) => (
        <div key={item.id} className="">
          <div className="">
            <img className="rounded-md" src={"/pic.jpg"} alt="" />
          </div>
          <div className="">{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
