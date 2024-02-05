import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return React.createElement("div", {
    id: "app",
    children: [
      React.createElement("header", {
        children: [
          React.createElement("h1", null, "The Shop!"),
          React.createElement("div", {
            className: "cart",
            children: [
              React.createElement("h2", null, "Your Cart"),
              React.createElement("p", null, "Your cart is empty."),
              React.createElement("p", null, "Total: $0"),
              React.createElement(
                "button",
                { className: "checkout", disabled: true },
                "Checkout",
              ),
            ],
          }),
        ],
      }),

      React.createElement("main", {
        children: [
          React.createElement("div", {
            className: "product-listing",
            children: [
              React.createElement("h2", null, "Products"),
              React.createElement("ul", {
                className: "product-list",
                children: [
                  React.createElement(Product, {
                    title: "Amazon Kindle",
                    price: "$79.99",
                    quantity: "5 left in stock",
                    key: 0
                  }),
                  React.createElement(Product, {
                    title: "Apple 10.5 inch iPad",
                    price: "$649.99",
                    quantity: "2 left in stock",
                    key: 1
                  }),
                  React.createElement(Product, {
                    title: "Yamaha Portable Keyboard",
                    price: "$159.99",
                    quantity: "0 left in stock",
                    key: 2
                  }),
                ],
              }),
            ],
          }),
          React.createElement(AddForm),
        ],
      }),
    ],
  });
};

const Product = ({ title, price, quantity }) => {
  return React.createElement("li", {
    className: "product",
    children: [
      React.createElement("div", {
        className: "product-details",
        children: [
          React.createElement("h3", null, title),
          React.createElement("p", { className: "price" }, price),
          React.createElement("p", { className: "quantity" }, quantity),
          React.createElement("div", {
            className: "actions product-actions",
            children: [
              React.createElement(
                "button",
                { className: "add-to-cart" },
                "Add to Cart",
              ),
              React.createElement("button", { className: "edit" }, "Edit"),
            ],
          }),
          React.createElement("button", {
            className: "delete-button",
            children: [React.createElement("span", null, "X")],
          }),
        ],
      }),
    ],
  });
};

const AddForm = () => {
  React.createElement("p", {
    children: [
      React.createElement(
        "button",
        { className: "add-product-button" },
        "Add A Product",
      ),
      React.createElement("h3", null, "Add Product"),
      React.createElement("form", {
        children: [
          React.createElement("div", {
            className: "input-group",
            children: [
              React.createElement(
                "label",
                { htmlFor: "product-name" },
                "Product Name:",
              ),
              React.createElement("input", {
                type: "text",
                id: "product-name",
                name: "product-name",
                required: true,
              }),
            ],
          }),
          React.createElement("div", {
            className: "input-group",
            children: [
              React.createElement(
                "label",
                { htmlFor: "product-price" },
                "Price:",
              ),
              React.createElement("input", {
                type: "number",
                id: "product-price",
                name: "product-price",
                required: true,
                min: "0",
                step: "0.01",
              }),
            ],
          }),
          React.createElement("div", {
            className: "input-group",
            children: [
              React.createElement(
                "label",
                { htmlFor: "product-quantity" },
                "Quantity:",
              ),
              React.createElement("input", {
                type: "number",
                id: "product-quantity",
                name: "product-quantity",
                required: true,
                min: "0",
              }),
            ],
          }),
          React.createElement("div", {
            className: "actions form-actions",
            children: [
              React.createElement("button", { type: "submit" }, "Add"),
              React.createElement("button", { type: "button" }, "Cancel"),
            ],
          }),
        ],
      }),
    ],
  });
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(React.createElement(App));
