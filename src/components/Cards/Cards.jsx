import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from '../assets/image1.jpg'
import image3 from '../assets/image1.jpg'

const cards = [
  {
    id: 1,
    title: "Sabado 13/05/2023",
    image: image1,
    url: "https://www.instagram.com/",
  },
  {
    id: 2,
    title: "Sabado 20/05/2023",
    image: image2,
    url: "https://www.instagram.com/",
  },
  {
    id: 3,
    title: "Sabado 27/05/2023",
    image: image3,
    url: "https://www.instagram.com/",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;