<script setup>
import CloseIcon from "@/components/icons/CloseIcon.vue";
import UserLayout from "@/layouts/UserLayout.vue";
import { useUserCartStore } from "@/stores/user/cart";

const userCartStore = useUserCartStore();
</script>
<template>
  <div class="container">
    <UserLayout>
      <h1 class="text-3xl font-boldl m-4">Shopping Cart</h1>
      <div class="flex gap-4 p-4">
        <div class="flex-auto w-64 bg-base-200 p-8 rounded-badge">
          <div class="flex" v-for="(item, index) in userCartStore.items">
            <div class="flex-1">
              <img
                :src="`https://picsum.photos/200/300?random=`+index"
                class="w-full p-4 h-72  rounded-badge"
              />
            </div>

            <div class="flex-1 p-4 relative">
              <div class="flex flex-col justify-between h-full">
                <div>
                  <div class="grid grid-cols-2 gap-2">
                    <div>
                      <p>{{ item.name }}</p>
                      <!-- <p>{{ item.about }}</p> -->
                      <p>{{ item.price }} บาท</p>
                    </div>

                    <select
                      class="w-1/2 h-auto rounded-md p-4"
                      v-model="item.quantity"
                      @change="userCartStore(index, event.target.value)"
                    >
                      <option v-for="quantity in [1, 2, 3, 4, 5]">
                        {{ quantity }}
                      </option>
                    </select>
                    <div>
                      <CloseIcon
                        @click="userCartStore.removeItem(index)"
                        class="absolute top-2 right-2 w-3 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
                <div>In Stock</div>
              </div>
            </div>
          </div>
        </div>

        <div class="flex-auto w-32 bg-slate-200 p-8 rounded-badge">
          <div class="text-2xl">Order summary</div>
          <div class="mt-4 m-0 divide-y divide-base-100">
            <div class="flex justify-between align-middle mb -2">
              <p>ราคาสินค้าทั้งหมด</p>
              <p>
                {{
                  userCartStore.summaryQuantity

                }}
                ชิ้น
              </p>
            </div>
            <div class="flex justify-between align-middle mb-2">
              <p>ค่าส่ง</p>
              <p>$100</p>
            </div>
            <div class="flex justify-between align-middle mb-2">
              <p>รวมทั้งหมด</p>
              <p>
                {{ userCartStore.summaryPrice }}
                บาท
              </p>
            </div>
            <RouterLink to="/checkout" class="btn btn-primary w-full mt-4">
              ชำระเงิน
            </RouterLink>
          </div>
        </div>
      </div>
    </UserLayout>
  </div>
</template>
