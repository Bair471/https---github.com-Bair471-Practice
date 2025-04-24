import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        image: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        image: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        image: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onio n",
        price: 12,
        image: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        image: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        image: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
    const style = {};
    return (
        <header className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </header>
    )
}

function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza pizzaObj={pizza} />
                ))}
            </ul>
            {/* <Pizza 
                name="Pizza Spinaci"
                ingredient="Tomato, mozarella, spinach, and ricotta cheese"
                image={pizzaSpinaciImage}
                price={12}
            />
            <Pizza 
                name="Pizza Funghi"
                ingredient="Tomato, mushrooms"
                image={pizzaFughiImage}
                price={10}
            />
            <Pizza 
                name="Pizza Salamino"
                ingredient="Tomato, mozarella, and pepperoni"
                image={pizzaSalaminoImage}
                price={15}
            /> */}
        </main>
    )
}

function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.pizzaObj.image} alt={props.pizzaObj.name} />
            <h3>{props.pizzaObj.name}</h3>
            <p>{props.pizzaObj.ingredient}</p>
            <span>{props.pizzaObj.price + 3}</span>
        </div>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    let status = "";
    if (isOpen) {
        status = "We are currently open!"
    } else {
        status = "We are currently close!"
    }
    // if(hour >= openHour && hour <= closeHour) alert("We are currently open!");
    // else alert("Sorry we are closed!")
    return (
        <footer className="footer">
            {isOpen && (
                <div className="order">
                    <p>We're open until until {closeHour} : 00. Come visit us or order online.</p>
                <button className="btn">Order</button>
                </div>)}
        </footer>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>);


