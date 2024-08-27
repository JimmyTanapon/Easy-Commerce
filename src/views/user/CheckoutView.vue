<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import router from "@/router";
import { useUserCartStore } from "@/stores/user/cart";
import { reactive } from "vue";

const userCartStore = useUserCartStore();

const FormData = [
  { name: "Email Address", field: "email" },
  {
    name: "Name",
    field: "name",
  },
  {
    name: "Address",
    field: "address",
  },
  {
    name: "Note",
    field: "note",
  },
];
const userFormData = reactive({
  email: "",
  name: "",
  address: "",
  note: "",
});

const checkout = () => {
  if (
    userFormData.name == "" ||
    userFormData.address == "" ||
    userFormData.email == ""
  ) {
    alert("Please fill out all required fields");
    return;
  }
  userCartStore.checkOutOrder(userFormData);
  router.push({ name: "success" });
};
// const payment = () => {};
</script>
<template>
  <div class="container">
    <UserLayout>
     
      <div   class="flex p-4 gap-2">
        <!-- Form -->
        <div class="flex-auto w-64 p-8 rounded-badge bg-slate-200">
          <div class="grid gap-6 mb-6 md:grid-row-2">
            <!-- first name -->
            <div v-for="form in FormData">
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900"
                >{{ form.name }}</label
              >
              <textarea
                v-if="form.field === 'address'"
                class="textarea textarea-bordered h-24 w-full"
                placeholder="Address"
                v-model="userFormData[form.field]"
              ></textarea>
              <input
                v-else
                type="text"
                :id="form.name"
                v-model="userFormData[form.field]"
                class="bg-green-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-100 focus:border-green-500 block w-full p-2.5"
                :placeholder="form.name"
                required
              />
            </div>
          </div>
        </div>
        <!-- Info -->
        <div class="flex-auto bg-base-200 w-20 p-8 rounded-badge">
          <p class="text-2xl font-bold text-slate-950">Order Summary</p>

          <div
            class="overflow-y-auto scrollbar h-2/3 mt-4 p-4 rounded-2xl border border-gray-500 bg-white"
          >
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
                      <p>{{ product.quantity }} ชิ้น.</p>
                      <p>{{ product.quantity * product.price }} ฿.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-end flex-col p-4 gap-2 font-bold">
            <div class="flex flex-row gap-8">
              <span>จำนวนสินค้าทั้งหมด</span>
              <span> {{ userCartStore.summaryQuantity }} ชิ้น</span>
            </div>
            <div class="flex flex-row gap-8">
              <span>รวมทั้งหมด</span>
              <span>{{ userCartStore.summaryPrice }} บาท</span>
            </div>
            <button class="btn btn-primary w-full mt-4" @click="checkout()">
              ชำระเงิน
            </button>
          </div>
        </div>
        
      </div>
    </UserLayout>
  </div>
</template>
