import React from "react";
import Data from "../Data";
import Card from "./Card";
const Main = () => {
  return (
    <>
      <div className="container">
        <div className="row row-cols-2">
          {Data.map((item, index) => {
            return (
              <Card
                imgUrl={item.imgUrl}
                sName={item.sName}
                btnUrl={item.btnUrl}
              />
            );
          })}
        </div>
      </div>
      <footer className="bg-dark text-center text-white">
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a
            className="text-white"
            href="https://www.netflix.com/in/browse/genre/83"
          >
            Netflix.com
          </a>
        </div>
      </footer>
    </>
  );
};

export default Main;
