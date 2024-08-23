import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", () => {
  const list = ref([
    {
      name: "Apple iPhone 15 Pro Max",
      imageUrl: "https://picsum.photos/200/300?random=1",

      about:
        "The latest high-end smartphone from Apple featuring a powerful A17 Bionic chip, advanced camera system, and ProMotion display.",
      status: "open",
      price: 1099,
    },
    {
      name: "Dyson V15 Detect Cordless Vacuum",
      imageUrl: "https://picsum.photos/200/300?random=2",

      about:
        "A powerful, cordless vacuum cleaner that detects hidden dust particles and provides deep cleaning.",
      status: "open",
      price: 699,
    },
    {
      name: "Nike Air Max 270",
      imageUrl: "https://picsum.photos/200/300?random=3",

      about:
        "Stylish and comfortable sneakers with a large Air Max unit in the heel for added cushioning.",
      status: "open",
      price: 150,
    },
    {
      name: "PlayStation 5",
      imageUrl: "https://picsum.photos/200/300?random=4",

      about:
        "Sony's latest gaming console featuring ultra-fast SSD, ray tracing, and immersive 3D audio.",
      status: "open",
      price: 499,
    },
    {
      name: "Estée Lauder Advanced Night Repair Serum",
      imageUrl: "https://picsum.photos/200/300?random=5",

      about:
        "A powerful serum that reduces the appearance of aging and hydrates the skin overnight.",
      status: "open",
      price: 75,
    },
  ]);

  const filterProduct = (search) => {
    return list.value.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  };

  return { list, filterProduct };
});
