<script setup>
import { useUserCartStore } from "@/stores/user/cart";
import { onMounted, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";

const isLoggedIn = ref(false);
const searchText = ref("");
const router = useRouter();
const userCartStore = useUserCartStore();
const searchHandler = (event) => {
  if (event.key === "Enter") {
    router.push({
      name: "search",
      query: { q: searchText.value },
    });
    console.log(searchText.value);
  }
};
const login = () => {
  localStorage.setItem("isLoggedIn", true);
  return (isLoggedIn.value = true);
};

const logout = () => {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("cart-store")
  localStorage.removeItem("checkout-order")
  window.location.reload()
  return (isLoggedIn.value = false);
};
onMounted(() => {
  // Check if user is logged in
  isLoggedIn.value = localStorage.getItem("isLoggedIn") === "true";
});
</script>
<template>
  <div class="max-w-screen-xl mx-auto h-full relative">
    <!-- NavBar -->
    <div
      class="navbar shadow-xls fixed w-full top-0 left-0  bg-gradient-to-r from-pink-500/10  to-violet-500/10 bg-opacity-10 backdrop-blur-md backdrop-filter px-6 py-4 shadow-lg z-50"
    >
      <div class="flex-1">
        <RouterLink :to="{ name: 'home' }" class="btn btn-ghost text-xl">
          <svg
            id="logo-79"
            class="gradient"
            width="80%"
            height="100%"
            viewBox="0 0 125 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="ccustom"
              d="M88.861 37.225c.759 0 1.208-.575 1.208-1.474 0-.932-.482-1.474-1.192-1.474-.406 0-.688.18-.899.466h-.01V33.27h-.44v3.873h.44v-.368h.01c.228.314.504.45.883.45Zm-.032-.369c-.596 0-.889-.471-.889-1.1 0-.606.282-1.105.894-1.105.531 0 .786.477.786 1.105 0 .634-.255 1.1-.791 1.1Zm1.983 1.214c.341 0 .558-.12.785-.7l1.198-3.028h-.466l-.64 1.745c-.086.233-.184.547-.184.547h-.01s-.104-.314-.19-.547l-.661-1.745h-.477l1.094 2.72-.108.276c-.108.271-.233.342-.417.342a.616.616 0 0 1-.298-.06h-.022v.39c.12.049.228.06.396.06Zm3.106-.927h.737V33.27h-.737v3.873Zm2.539.082c.861 0 1.452-.64 1.452-1.469 0-.829-.59-1.468-1.452-1.468-.861 0-1.452.64-1.452 1.468 0 .83.59 1.469 1.452 1.469Zm0-.564c-.455 0-.704-.363-.704-.905 0-.541.249-.91.704-.91.45 0 .704.369.704.91 0 .542-.254.905-.704.905Zm3.019 1.43c.412 0 .769-.097 1.002-.314.206-.19.331-.455.331-.845v-2.568h-.71v.293h-.011c-.168-.233-.422-.369-.77-.369-.703 0-1.202.531-1.202 1.36 0 .84.607 1.327 1.225 1.327.352 0 .563-.14.725-.325h.017v.304c0 .379-.2.58-.618.58-.341 0-.498-.136-.558-.31h-.731c.075.542.541.867 1.3.867Zm-.01-1.706c-.38 0-.63-.276-.63-.748 0-.466.25-.758.624-.758.444 0 .661.346.661.753 0 .412-.19.753-.656.753Zm3.134.84c.861 0 1.452-.64 1.452-1.469 0-.829-.591-1.468-1.452-1.468-.862 0-1.452.64-1.452 1.468 0 .83.59 1.469 1.452 1.469Zm0-.564c-.455 0-.705-.363-.705-.905 0-.541.25-.91.705-.91.449 0 .704.369.704.91 0 .542-.255.905-.704.905Zm1.794.482h.737v-2.779h-.737v2.78Zm0-3.212h.737v-.661h-.737v.66Zm1.212 4.122h.737V36.83h.01c.158.239.412.396.802.396.715 0 1.203-.57 1.203-1.469 0-.867-.471-1.468-1.208-1.468a.972.972 0 0 0-.818.423h-.016v-.347h-.71v3.69Zm1.392-1.44c-.439 0-.672-.331-.672-.835 0-.498.185-.894.645-.894.455 0 .639.368.639.894s-.238.834-.612.834Zm2.83.612c.693 0 1.17-.336 1.17-.894 0-.65-.515-.78-.981-.878-.395-.081-.763-.103-.763-.341 0-.2.189-.31.476-.31.315 0 .504.11.537.407h.666c-.054-.558-.46-.92-1.192-.92-.634 0-1.132.286-1.132.888 0 .606.487.742.986.84.379.075.731.102.731.368 0 .195-.184.32-.509.32-.33 0-.558-.141-.607-.461h-.682c.043.59.493.98 1.3.98Zm3.968-.082v-2.779h-.737v1.604c0 .368-.212.628-.558.628-.314 0-.461-.179-.461-.504v-1.728h-.731v1.853c0 .607.347 1.002.964 1.002.39 0 .607-.146.797-.4h.016v.324h.71Zm.476 0h.737V35.53c0-.369.2-.607.498-.607.271 0 .428.163.428.477v1.744h.737V35.53c0-.369.19-.607.499-.607.271 0 .428.163.428.477v1.744h.737v-1.869c0-.607-.331-.986-.916-.986-.352 0-.645.184-.834.488h-.011a.83.83 0 0 0-.77-.488.908.908 0 0 0-.807.45h-.016v-.374h-.71v2.78Z"
              fill="#E5708C"
            ></path>
            <path
              d="M118.481 2.149c0-1.183.959-2.143 2.142-2.143h1.429a2.142 2.142 0 0 1 0 4.286h-1.429a2.142 2.142 0 0 1-2.142-2.143ZM58.49 14.29c0 7.888-6.394 14.283-14.283 14.283-7.888 0-14.283-6.395-14.283-14.283C29.924 6.4 36.319.007 44.207.007 52.096.007 58.49 6.4 58.49 14.29Zm-31.352-.071c.79 0 1.436.64 1.357 1.426A14.283 14.283 0 1 1 12.857.007c.785-.08 1.426.568 1.426 1.356V12.79c0 .79.64 1.429 1.429 1.429h11.426ZM78.487 31.43a4.285 4.285 0 1 1 0 8.57h-7.141a4.285 4.285 0 0 1 0-8.57h7.141Zm-4.285-2.857c7.889 0 14.284-6.395 14.284-14.283a14.22 14.22 0 0 0-1.789-6.925l2.36-2.36a2.928 2.928 0 1 0-4.142-4.14l-2.06 2.06A14.22 14.22 0 0 0 74.201.006C66.314.007 59.92 6.4 59.92 14.29c0 7.888 6.395 14.283 14.283 14.283Zm44.279-14.283c0 7.888-6.395 14.283-14.284 14.283-7.888 0-14.283-6.395-14.283-14.283 0-7.89 6.395-14.283 14.283-14.283 7.889 0 14.284 6.394 14.284 14.283Z"
              fill="url(#gradient_a1234)"
            ></path>
            <defs>
              <linearGradient
                id="gradient_a1234"
                x1="0"
                y1="16"
                x2="119"
                y2="16"
                gradientUnits="userSpaceOnUse"
              >
                <stop class="ccompli1" stop-color="#64C2DB"></stop>
                <stop
                  class="ccompli2"
                  offset=".307"
                  stop-color="#7476ED"
                ></stop>
                <stop class="ccustom" offset=".604" stop-color="#C994DF"></stop>
                <stop class="ccompli1" offset="1" stop-color="#E56F8C"></stop>
              </linearGradient>
            </defs>
          </svg>
        </RouterLink>
      </div>

      <div class="form-control">
        <input
          type="text"
          v-model="searchText"
          placeholder="Search"
          @keyup="searchHandler"
          class="input input-bordered w-24 md:w-auto"
        />
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <div class="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span class="badge badge-sm indicator-item">{{
                userCartStore.summaryQuantity
              }}</span>
            </div>
          </div>
          <div
            tabindex="0"
            class="card card-compact dropdown-content bg-base-100  z-[1] mt-3 w-52 shadow"
          >
            <div class="card-body">
              <span class="text-lg font-bold"
                >{{ userCartStore.summaryQuantity }} Items</span
              >
              <span class="text-info"
                >Subtotal: {{ userCartStore.summaryPrice }} บาท</span
              >
              <div class="card-actions">
                <RouterLink
                  :to="{ name: 'cart' }"
                  class="btn btn-primary btn-block"
                  >View cart</RouterLink
                >
              </div>
            </div>
          </div>
        </div>

        <button class="btn btn-ghost" v-if="!isLoggedIn" @click="login">
          Login
        </button>

        <div v-else class="dropdown dropdown-end">
          <div
            tabindex="0"
            role="button"
            class="btn btn-ghost btn-circle avatar"
          >
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-white bg-opacity-100 backdrop-blur-lg backdrop-filter rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <RouterLink :to="{name:'profile'}">

                <a class="justify-between"> Profile </a>
              </RouterLink>
            </li>
            <li><a @click="logout">Logout</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="mt-24">
      <slot></slot>
    </div>

    <!-- Footer -->
    <footer
      class="footer footer-center bg-base-300 text-base-content p-4 mt-10"
    >
      <aside>
        <p>
          Copyright © {{ new Date().getFullYear() }} - All right reserved by
          ACME Industries Ltd
        </p>
      </aside>
    </footer>
    <!-- <footer
      class="footer bg-success flex justify-center gap-20 items-center rounded-t-full mt-10 text-white p-10"
    >
      <nav>
        <h6 class="footer-title">Services</h6>
        <a class="link link-hover">Branding</a>
        <a class="link link-hover">Design</a>
        <a class="link link-hover">Marketing</a>
        <a class="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 class="footer-title">Company</h6>
        <a class="link link-hover">About us</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Jobs</a>
        <a class="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 class="footer-title">Legal</h6>
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </nav>
    </footer> -->
  </div>
</template>
