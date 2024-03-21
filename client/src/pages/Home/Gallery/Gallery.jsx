import React from "react";
import image1 from "../../../assets/gallery/main.jpg";
import image2 from "../../../assets/gallery/nice.jpg";
import image3 from "../../../assets/gallery/48.jpg";
import image4 from "../../../assets/gallery/c.jpeg";
import image5 from "../../../assets/gallery/polo.jpeg";
import image6 from "../../../assets/gallery/download .jpeg";
import image7 from "../../../assets/gallery/Ryann_.jpg";

function Gallery() {
  return (
    <div className="md:w-[80%] mx-auto my-28">
      <div className="md-16 mb-8"> {/* Added margin-bottom here */}
        <h1 className="text-5xl font-bold text-center">Our Gallery</h1>
      </div>
      {/* Image Container */}
      <div className="md:grid grid-cols-2 items-center justify-center gap-4">
        <div className="md-4 md:mb-0">
          <img
            src={image1}
            alt=""
            className="md:h-[780px] w-full mx-auto rounded-md"
          />
        </div>
        <div className="gap-4 grid grid-cols-2 items-start">
          <div className="flex flex-col">
            <img src={image2} alt="" className="md:h-[250px] rounded-md mb-4" />
            <img src={image3} alt="" className="md:h-[250px] rounded-md mb-4" />
            <img src={image6} alt="" className="md:h-[250px] rounded-md" />
          </div>
          <div className="flex flex-col">
            <img src={image4} alt="" className="md:h-[250px] rounded-md mb-4" />
            <img src={image5} alt="" className="md:h-[250px] rounded-md mb-4" />
            <img src={image7} alt="" className="md:h-[250px] rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
