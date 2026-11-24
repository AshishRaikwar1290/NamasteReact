import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i am h1"),
//     React.createElement("h1", {}, "i am h2"),
//   ]),
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//React Element

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 *   -Img
 *   -Name of res, rating , cuisine
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */
// const jsxHeading = (
//   <h1 id="heading" className="head" tabIndex="1">
//     This JSX hhh
//   </h1>
// );

// const Title = () => (
//   <h1 id="heading" className="head" tabIndex="1">
//     This JSX hhh
//   </h1>
// );

// const number = 1000;

// //React Component
// const HeadingComponent = () => {
//   return (
//     <>
//       {/* <Title /> */}
//       {number}
//       {jsxHeading}
//       <h1>Hi</h1>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<HeadingComponent />);

const resObj = {
  data: [
    {
      id: "ashish",
      name: "Ashish",
      cousines: "North Indian",
      costForTwo: "400",
    },
    {
      id: "raikwar",
      name: "Raikwar",
      cousines: "South Indian",
      costForTwo: "500",
    },
  ],
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/736x/12/a5/fa/12a5faa4e64c755ad8be8aef95bf06a1.jpg"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  const { name, cousines, costForTwo } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.subbuskitchen.com/wp-content/uploads/2017/08/Street-Style-Maggie-Noodles_finalforweb1-scaled.jpg"
      ></img>
      <h3>{name}</h3>
      <h4>{cousines}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search-container"></div>
      <div className="res-container">
        {resObj?.data?.map((resData, _index) => (
          <RestaurantCard resData={resData} key={resData?.id} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
