/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as itemsService from "../services/items";
import App from "./App";

jest.mock("../services/items.js");

afterEach(() => {
  jest.resetAllMocks();
});

const mockProducts = [
  {
    _id: "61d754d72092473d55a809e1",
    title: "Kindle",
    price: 50,
    quantity: 2,
    createdAt: "2020-10-04T05:57:02.777Z",
    updatedAt: "2020-10-04T05:57:02.777Z",
    _v: 0,
  },
  {
    _id: "51d754d72092473333a809e1",
    title: "Mac Mini",
    price: 850,
    quantity: 7,
    createdAt: "2020-10-04T05:57:02.777Z",
    updatedAt: "2020-10-04T05:57:02.777Z",
    _v: 0,
  },
];

test("the product names are displayed in h3 elements", async () => {
  itemsService.getProducts.mockResolvedValue(mockProducts);
  itemsService.getCart.mockResolvedValue([]);
  render(<App />);
  const productTitle = await screen.findByRole("heading", {
    level: 3,
    name: "Kindle",
  });

  expect(productTitle).toBeInTheDocument();
});

test("Adding a new product displays its title", async () => {
  itemsService.getProducts.mockResolvedValue([mockProducts[0]]);
  itemsService.getCart.mockResolvedValue([]);
  itemsService.addProduct.mockResolvedValue(mockProducts[1]);

  render(<App />);
  const user = userEvent.setup();

  await user.click(
    screen.getByRole("button", {
      name: "Add A Product",
    }),
  );

  await user.type(
    screen.getByRole("textbox", { name: /product name/i }),
    "Mac Mini",
  );
  await user.type(screen.getByRole("spinbutton", { name: /price/i }), "850");
  await user.type(screen.getByRole("spinbutton", { name: /quantity/i }), "7");
  await user.click(screen.getByRole("button", { name: "Add" }));

  const newProductTitle = await screen.findByRole("heading", {
    level: 3,
    name: "Mac Mini",
  });

  expect(newProductTitle).toBeInTheDocument();
});
