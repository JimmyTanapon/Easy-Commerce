<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { useUserCartStore } from "@/stores/user/cart";
import { defineProps } from "vue";

const userCartStore = useUserCartStore();
</script>
<template>
  <div class="container">
    <UserLayout>
      <div class="flex p-4 gap-2">
        <!-- Form -->
        <div class="flex-auto w-64 p-8 rounded-badge bg-[#8ca6db]">
          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <!-- first name -->
              <div>
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >First name</label
                >
                <input
                  type="text"
                  id="first_name"
                  class="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-green-500 block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
              <!-- lastname -->
              <div>
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Last name</label
                >
                <input
                  type="text"
                  id="last_name"
                  class="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-green-500 block w-full p-2.5"
                  placeholder="Doe"
                  required
                />
              </div>
              <!-- Email address -->
              <div class="mb-6">
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Email address</label
                >
                <input
                  type="email"
                  id="email"
                  class="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-green-500 block w-full p-2.5"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <!-- phone number -->
              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900"
                  >Phone number</label
                >
                <input
                  type="tel"
                  id="phone"
                  class="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-green-500 block w-full p-2.5"
                  placeholder="123-45-678"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>
            </div>
            <!-- Address -->
            <div>
              <label
                for="address"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <textarea
                id="address"
                class="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-green-500 w-full p-2.5"
              ></textarea>
            </div>

            <button
              type="submit"
              class="text-white mt-8 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>

        <!-- Info -->

        <div class="flex-auto bg-[#b993d6] w-20 p-8 rounded-badge">
          <p class="text-2xl font-bold text-slate-950">Order Summary</p>

          <div class="overflow-y-auto h-2/3 mt-4 p-4 rounded-2xl border border-violet-200 bg-white/20">
            <div class="mt-4 m-0 divide-y divide-slate-100">
              <div
                v-for="product in userCartStore.items"
                class="flex flex-row w-full p-2"
              >
                <!-- Image Section -->
                <div class="flex-1 h-32 w-full">
                  <img
                    :src="`${product.imageUrl + index}`"
                    class="w-full h-full object-cover p-4 rounded-badge"
                  />
                </div>

                <!-- Product Details Section -->
                <div class="flex-1 p-4">
                  <div class="flex flex-col gap-10 text-slate-950">
                    <p class="font-bold">{{ product.name }}</p>
                    <div class="flex justify-between font-medium">
                      <p >{{ product.quantity }} ชิ้น.</p>
                      <p >
                        {{ product.quantity * product.price }} ฿.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-end flex-col p-4 gap-2  font-bold">
            <div class="flex flex-row gap-8">
              <span  >จำนวนสินค้าทั้งหมด</span>
              <span> {{ userCartStore.summaryQuantity }} ชิ้น</span>
            </div>
            <div class="flex flex-row gap-8">
              <span>รวมทั้งหมด</span>
              <span>{{ userCartStore.summaryPrice }} บาท</span>
            </div>
          </div>
        </div>
      </div>
    </UserLayout>
  </div>
</template>
