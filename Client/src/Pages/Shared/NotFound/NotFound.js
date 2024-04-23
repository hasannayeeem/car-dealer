import React from "react";

const NotFound = () => {
  return (
    <div className="mx-auto d-flex justify-content-center align-items-center flex-column">
     <div className="d-flex justify-content-center align-items-center w-100">
        <h2 className="mt-5">The page you are looking for is not available</h2>
        {/* <button className="btn btn-primary mt-5" style={{ transform: 'rotate(-10deg)' }}>Coming Soon</button> */}
    </div>
      <img
        src="https://cdn.dribbble.com/users/320367/screenshots/3474437/media/0504fc64577f624227cb5cd764aa2c1f.jpg?resize=400x300&vertical=center"
        width="50%"
        height="50%"
        alt=""
      />
    </div>
  );
};

export default NotFound;
