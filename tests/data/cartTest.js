import {
  addToCart,
  cart,
  loadFromStorage,
  updateDeliveryOption,
} from "../../data/cart.js";

describe("test suite: addToCart", () => {
  it("adds an existing product to cart", () => {
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "e1d07eb678c6e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();

    addToCart("e1d07eb678c6e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual(
      "e1d07eb678c6e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
    );
    expect(cart[0].quantity).toEqual(2); // Should be 2 since we're adding to existing item with quantity 1
  });

  it("adds a new product to cart", () => {
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();

    addToCart("e1d07eb678c6e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual(
      "e1d07eb678c6e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
    );
    expect(cart[0].quantity).toEqual(1); // Should be 1 for a new product
  });
});
