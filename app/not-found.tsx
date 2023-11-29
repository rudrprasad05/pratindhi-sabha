import react from "react";

interface props {}

const NotFound: React.FC<props> = ({}) => {
  return (
    <div className="grid place-content-center w-screen h-80v">
      <div className="text-5xl text-orange-500">Page Not Found</div>
    </div>
  );
};

export default NotFound;
