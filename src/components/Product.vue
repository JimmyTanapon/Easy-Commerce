<script setup>
import { defineProps } from "vue";

defineProps ({
    products: Array,
    addProductToCart: Function
})
</script>
<template>
  <section
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
  >
    <div
      v-for="(product, index) in products"
      class="card bg-base w-90 min-h-11 shadow-xl mt-10 "
    >
      <figure>
        <img :src="`${product.imageUrl + index}`" class="w-full h-64" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.name }}</h2>
        <p>{{ product.about }}</p>
        <div class="card-actions justify-end items-center">
          <p class="font-bold text-primary">${{ product.price }}</p>

          <button class="btn btn-primary " @click="addProductToCart(product)">Buy Now</button>
        </div>
      </div>
    </div>
  </section>
</template>
