import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useUserCartStore = defineStore("cart", () => {
  const items = ref([]);

  const loadcart = () => {
    const previousCart = localStorage.getItem("cart-store");
    if (previousCart) {
      items.value = JSON.parse(previousCart);
    }
  };
  const summaryPrice = computed(() => {
    return items.value.reduce((accumulator, item) => {
      return accumulator + item.quantity * item.price;
    }, 0);
  });
  const summaryQuantity = computed(() =>
    items.value.reduce((accumulator, item) => {
      return accumulator + parseInt(item.quantity);
    }, 0)
  );
  const addToCart = (productData) => {
    const foundIndex = items.value.findIndex(
      (item) => item.name === productData.name
    );

    if (foundIndex !== -1) {
      const newQunatity = (items.value[foundIndex].quantity += 1);
      updateQuantity(foundIndex, newQunatity);
    } else {
      productData.quantity = 1;
      items.value.push(productData);
    }
    localStorage.setItem("cart-store", JSON.stringify(items.value));
  };

  const updateQuantity = (index, quantity) => {
    items.value[index].quantity = quantity;

    localStorage.setItem("cart-store", JSON.stringify(items.value));
  };
  const removeItem = (index) => {
    items.value.splice(index, 1);
    localStorage.setItem("cart-store", JSON.stringify(items.value));
  };
  const checkOutOrder = (userData) => {
    let checkOutOrder = {
      ...userData,
      totalPrice: summaryPrice.value,
      payment: "Credit Card",
      createdDate: new Date().toLocaleString(),
      orderNumber: "AA" + Math.floor(Math.random() * 90000 + 1000),
    };
    localStorage.setItem("checkout-order", JSON.stringify(checkOutOrder));
  };

  const loadCheckoutOrder = () => {
    const previousOrder = localStorage.getItem("checkout-order");
    if (previousOrder) {
      return JSON.parse(previousOrder);
    } else {
      return;
    }
  };
  return {
    loadCheckoutOrder,
    loadcart,
    items,
    addToCart,
    updateQuantity,
    removeItem,
    summaryPrice,
    summaryQuantity,
    checkOutOrder,
  };
});
