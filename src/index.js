import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1
        style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
      >
        Bangladesh Pizza Hut
      </h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <menu className="menu">
      <h2> Our Menu</h2>
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato,Mozarella,Onion,Chilli"
        photoName="pizzas/spinaci.jpg"
        price="10"
      />
      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        photoName="pizzas/focaccia.jpg"
        price="6"
      /> */}
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We are Working in the Website. visit again later </p>
      )}
    </menu>
  );
}

function Pizza({ pizzaObj }) {
  // if (pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* <span>{+pizzaObj.price + 2}</span> */}
        {pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{pizzaObj.price}</span>
        )}
      </div>
    </li>
  );
}
function Footer() {
  // return React.createElement(
  //   "footer",
  //   null,
  //   "we are using React.createElement instead of JSX"
  // );
  const hour = new Date().getHours();
  const openHour = 7;
  const closeHour = 20;
  const openRest = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {openRest ? (
        <Order closeH={closeHour} openH={openHour} />
      ) : (
        <p>
          We are open between {openHour} to {closeHour}. Please visit us in this
          perticular time
        </p>
      )}
    </footer>
  );
}
function Order({ closeH, openH }) {
  return (
    <div className="order">
      <p>
        {" "}
        We are Open from {openH}:00 to {closeH}:00.Come and visit or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const firstReact = ReactDom.createRoot(document.getElementById("root"));
firstReact.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
