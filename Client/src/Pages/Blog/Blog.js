import React from "react";
import { Link } from 'react-router-dom';
import { Button, Col, Row  } from 'react-bootstrap';

const Blog = ({ restaurant }) => {
  const { name, image, _id, rating, location, cuisine, description } = restaurant || {_id: 1,
  name: "Culinary Delights",
  image: "https://etimg.etb2bimg.com/photo/75161189.cms",
  cuisine: "Italian",
  location: "123 Main Street, Cityville",
  rating: 4.5,
  description: "Savor the richness of Italian cuisine at Culinary Delights. From mouth-watering pasta to heavenly desserts, our restaurant is a celebration of flavor and tradition.",};
  return (
    <Row className='justify-content-center py-20'>
                {/* {trendingRestaurants.slice(0, 6).map(restaurant => ( */}
                    <Col key={restaurant?._id} md={4} lg={4} xl={4} className='mb-4'>
                        <div>
      <div className="bg-white border border-white max-w-sm px-6 pt-6 pb-2 shadow-lg transform hover:scale-105 transition duration-500 h-[480px]">
        <div className="relative">
          <img className="w-full h-25" src={image} alt="Colors" />
          <p className="position-absolute top-0 end-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-bottom-start">
            {Number(rating).toFixed(1)}
          </p>
          <p className="position-absolute bottom-2 start-2 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-top-end rounded-bottom-start">
            {cuisine}
          </p>
        </div>
        <h1 className="text-gray-800 mt-4 text-2xl font-bold cursor-pointer">
          {name}
        </h1>
        <h1>
          {location}
        </h1>
        <p>
          {description.slice(0, 80)}...
        </p>
        <div className="my-4">
          <Link to={`/restaurantDetails/${_id}`} className="d-block">
            <Button variant="primary" className="mt-4 text-xl w-full">Details</Button>
          </Link>
        </div>
      </div>
    </div>
                    </Col>
                    <Col key={restaurant?._id} md={4} lg={4} xl={4} className='mb-4'>
                        <div>
      <div className="bg-white border border-white max-w-sm px-6 pt-6 pb-2 shadow-lg transform hover:scale-105 transition duration-500 h-[480px]">
        <div className="relative">
          <img className="w-full h-25" src={image} alt="Colors" />
          <p className="position-absolute top-0 end-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-bottom-start">
            {Number(rating).toFixed(1)}
          </p>
          <p className="position-absolute bottom-2 start-2 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-top-end rounded-bottom-start">
            {cuisine}
          </p>
        </div>
        <h1 className="text-gray-800 mt-4 text-2xl font-bold cursor-pointer">
          {name}
        </h1>
        <h1>
          {location}
        </h1>
        <p>
          {description.slice(0, 80)}...
        </p>
        <div className="my-4">
          <Link to={`/restaurantDetails/${_id}`} className="d-block">
            <Button variant="primary" className="mt-4 text-xl w-full">Details</Button>
          </Link>
        </div>
      </div>
    </div>
                    </Col>
                    <Col key={restaurant?._id} md={4} lg={4} xl={4} className='mb-4'>
                        <div>
      <div className="bg-white border border-white max-w-sm px-6 pt-6 pb-2 shadow-lg transform hover:scale-105 transition duration-500 h-[480px]">
        <div className="relative">
          <img className="w-full h-25" src={image} alt="Colors" />
          <p className="position-absolute top-0 end-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-bottom-start">
            {Number(rating).toFixed(1)}
          </p>
          <p className="position-absolute bottom-2 start-2 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-top-end rounded-bottom-start">
            {cuisine}
          </p>
        </div>
        <h1 className="text-gray-800 mt-4 text-2xl font-bold cursor-pointer">
          {name}
        </h1>
        <h1>
          {location}
        </h1>
        <p>
          {description.slice(0, 80)}...
        </p>
        <div className="my-4">
          <Link to={`/restaurantDetails/${_id}`} className="d-block">
            <Button variant="primary" className="mt-4 text-xl w-full">Details</Button>
          </Link>
        </div>
      </div>
    </div>
                    </Col>
                {/* ))} */}
            </Row>
    
  );
};

export default Blog;
