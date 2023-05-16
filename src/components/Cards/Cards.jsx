import React, { useState } from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image1.jpg';
import image3 from '../assets/image1.jpg';

const cards = [
  {
    id: 1,
    title: "Sabado 13/05/2023",
    image: image1,
    url: "https://www.instagram.com/",
    category: "Mes 5"
  },
  {
    id: 2,
    title: "Sabado 20/06/2023",
    image: image2,
    url: "https://www.instagram.com/",
    category: "Mes 6"
  },
  {
    id: 3,
    title: "Sabado 27/07/2023",
    image: image3,
    url: "https://www.instagram.com/",
    category: "Mes 7"
  },
];

function Cards() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredCards = selectedCategory === "All" ? cards : cards.filter(card => card.category === selectedCategory);

  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <div className="col-12 mb-4">
          <div className="btn-group">
            <button
              className={`btn btn-outline-secondary border-0 ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => handleCategoryChange("All")}
            >
              All
            </button>
            <button
              className={`btn btn-outline-secondary border-0 ${selectedCategory === "Mes 5" ? "active" : ""}`}
              onClick={() => handleCategoryChange("Mes 5")}
            >
              Mes 5
            </button>
            <button
              className={`btn btn-outline-secondary border-0 ${selectedCategory === "Mes 6" ? "active" : ""}`}
              onClick={() => handleCategoryChange("Mes 6")}
            >
              Mes 6
            </button>
            <button
              className={`btn btn-outline-secondary border-0 ${selectedCategory === "Mes 7" ? "active" : ""}`}
              onClick={() => handleCategoryChange("Mes 7")}
            >
              Mes 7
            </button>
          </div>
        </div>
        {filteredCards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
