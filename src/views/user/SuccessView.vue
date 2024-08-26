<script setup>
import UserLayout from "@/layouts/UserLayout.vue";
import { useUserCartStore } from "@/stores/user/cart";
import { onMounted, ref } from "vue";

const userCartStore = useUserCartStore();
const orderData = ref({});

onMounted(() => {
  const order = userCartStore.loadCheckoutOrder();
  if (order.orderNumber) {
    orderData.value = order;
  }
  console.log(orderData.value);
});
</script>
<template>
  <div class="container">
    <UserLayout>
      <div class="   shadow-lg   rounded-lg flex p-4 w-full flex-col gap-4 divide-y ">
        <div class="  flex flex-col gap-2 my-4">
          <span class="font-bold text-xl">Your order is successful !</span>
          <span class="font-semibold">Hi, {{ orderData.name }}</span>
          <span>เตรียมรับสินค้าของคุณได้เลย</span>
        </div>

        <div class="grid grid-cols-4 my-4">
          <div class="flex flex-col gap-2">
            <span class="font-semibold">Order date</span>
            <span>{{ orderData.createdDate }}</span>
          </div>
          <div class="flex flex-col gap-2">
            <span class="font-semibold">Order Number</span>
            <span>{{ orderData.orderNumber }}</span>
          </div>

          <div class="flex flex-col gap-2">
            <span class="font-semibold">Payment Method</span>
            <span>{{ orderData.payment }}</span>
          </div>

          <div class="flex flex-col gap-2">
            <span class="font-semibold">Address</span>
            <span>{{ orderData.address }}</span>
          </div>
        </div>

        <div
          v-for="product in userCartStore.items"
          class="grid grid-cols-4 my-4 py-4 "
        >
        <div class="h-[250px]">
            <img
              :src="`${product.imageUrl + index}`"
              class="w-full h-full object-cover"
            />
          </div>
          

          <div class=" font-semibold text-lg px-2">{{ product.name }}</div>
          <div>จำนวนสินค้าทั้งหมด: {{ product.quantity }}</div>
          <div>ราคารวม: {{ product.price * product.quantity }} บาท</div>
        </div>

        <div class=" grid grid-rows-2  py-4 gap-4 ">
          <div class="flex  justify-between">
            <div>ราคาสินค้าทั้งหมด</div>
            <div>{{  userCartStore.summaryPrice }} บาท</div>
          </div>
          <div  class="flex  justify-between">
            <div>ค่าส่ง</div>
            <div>0 บาท</div>
          </div>
        </div>
        
        <div class="flex  justify-between py-4">
            <div>ราคารวมทั้งสิ้น</div>
            <div>{{  userCartStore.summaryPrice }} บาท</div>
          </div>
        
      </div>
      
    </UserLayout>
  </div>
</template>
