import React from "react";

// bg-[url('/mandir.jpg')] bg-no-repeat bg-cover bg-right-top

const LandingPageHero = () => {
  return (
    <div className="relative h-screen w-screen">
      <div className="absolute top-0 left-0 h-full w-full">
        <img src="/mandir.jpeg" alt="" className="object-cover h-full w-full" />
        <div className="h-full w-full bg-background/50 absolute top-0 left-0" />
      </div>

      <div>Sanatan Pratinidhi Sabha</div>
    </div>
  );
};

export default LandingPageHero;
