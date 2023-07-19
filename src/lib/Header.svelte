<script lang="ts">
  import { HEADER_COOL_BOY } from "../assets/img";
  import { navbar_items_data } from "./navbar_items_data";

  let navbar_show = false;
</script>

<nav class="fixed w-full bg-transparent">
  <div class="flex p-4 lg:px-16 lg:py-5 justify-between">
    <div class=" text-white flex-shrink-0">
      <h1 class="text-xl lg:text-4xl font-bold">Fooly Cooly</h1>
    </div>
    <button
      class="text-white hover:text-slate-200 cursor-pointer lg:hidden"
      on:click={() => (navbar_show = true)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="25" viewBox="0 0 448 512">
        <path
          fill="currentColor"
          d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z"
        />
      </svg>
    </button>
    <div
      class="fixed lg:static w-full lg:w-auto h-screen md:h-auto bg-band-red-500 lg:bg-transparent top-0 left-0 py-32 lg:py-0 lg:-translate-x-0 transition-transform {navbar_show
        ? 'translate-x-0'
        : '-translate-x-full'}"
    >
      <ul class="flex gap-8 text-white items-center lg:flex-row flex-col">
        {#each navbar_items_data as nav_data}
          <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
          <li class="" on:keydown={null} on:click={() => (navbar_show = false)}>
            <a href={nav_data.href} class="">{@html nav_data.label} </a>
          </li>
        {/each}
        <li>
          <a
            href="https://twitter.com/FoolyCoolyERC"
            target="_blank"
            class="inline-block"
          >
            <svg
              class="inline-block mr-3"
              width="30"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.704 7.48979C33.3307 7.8015 33.1155 8.26761 33.1177 8.754C33.1181 8.84434 33.1181 8.93467 33.1181 9.025C33.1181 19.6999 25.2819 32 10.9594 32C7.21547 32 3.69722 31.046 0.610818 29.352C0.195319 29.124 0.406742 28.475 0.880711 28.475C2.34757 28.475 3.76749 28.268 5.11521 27.8787C7.14522 27.2921 6.50754 24.0942 5.06892 22.5465C4.58291 22.0236 4.16487 21.4331 3.82912 20.7899C3.51335 20.1849 4.0562 19.55 4.73862 19.55C5.26053 19.55 5.30456 18.8191 4.84156 18.5782C2.2894 17.2504 0.543088 14.5204 0.543088 11.35C0.543088 11.3056 0.591207 11.2778 0.629922 11.2995C0.958645 11.4841 1.30378 11.6462 1.66233 11.7827C2.33172 12.0375 2.72441 11.1518 2.28775 10.584C1.22468 9.20179 0.591331 7.45076 0.591331 5.54994C0.591331 3.52402 3.04987 3.2293 4.5763 4.56137C7.71338 7.299 11.5992 9.14417 15.8568 9.74451C16.7911 9.87625 17.5177 9.01855 17.5177 8.07501C17.5177 3.62496 20.9898 0 25.3058 0C27.2173 0 28.9712 0.708505 30.3284 1.89322C30.7662 2.27546 31.3472 2.48743 31.9089 2.33787C32.6364 2.14419 33.3473 1.89543 34.0329 1.59716C34.7169 1.29957 35.4394 1.91961 35.0395 2.54928C34.869 2.81787 34.6831 3.07534 34.4832 3.32041C34.0835 3.8103 34.4991 4.69456 35.104 4.51066C35.672 4.33798 36.1581 4.97913 35.7743 5.43203C35.1431 6.17687 34.4498 6.86718 33.704 7.48979Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://t.me/foolycoolyerc"
            target="_blank"
            class="inline-block ml-3"
          >
            <svg
              class="inline-block"
              width="30"
              viewBox="0 0 38 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.61147 14.0218C12.8086 9.42519 19.6084 6.3948 23.0105 4.93078C32.7246 0.750497 34.7431 0.0242843 36.0587 0.000251606C36.3481 -0.00497905 36.9951 0.0692404 37.4141 0.421108C38.0358 0.943043 38.0394 2.07597 37.9704 2.8258C37.4439 8.54842 35.1662 22.4355 34.0073 28.8449C33.5169 31.5569 32.5515 32.4664 31.6169 32.5553C29.5856 32.7487 28.0431 31.1663 26.0757 29.8321C22.9971 27.7441 21.2578 26.4443 18.2694 24.4069C14.8159 22.0523 17.0547 20.7582 19.0229 18.6432C19.538 18.0897 28.4879 9.66707 28.6611 8.90297C28.6829 8.8074 28.7029 8.45115 28.4984 8.26313C28.2938 8.07511 27.992 8.13929 27.7742 8.19047C27.4654 8.26299 22.5473 11.6263 13.0198 18.2803C11.6238 19.2721 10.3594 19.7553 9.2265 19.73C7.9775 19.7022 5.57514 18.9994 3.78915 18.3987C1.59858 17.6621 -0.142457 17.2724 0.00921018 16.0213C0.0881866 15.3695 0.955561 14.7031 2.61147 14.0218Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://app.uniswap.org/#/swap?outputCurrency=0xc65f8ce288954d914f58e3d19ea8294dfa5f2e5f"
            class="px-5 py-2 bg-white text-black rounded">Buy Now</a
          >
        </li>
        <li class="block lg:hidden">
          <button
            class="px-5 py-2 border-white border-2 text-white rounded"
            on:click={() => (navbar_show = false)}>Back</button
          >
        </li>
      </ul>
    </div>
  </div>
</nav>

<header class=" bg-band-red-500">
  <div class="container">
    <div class="flex lg:flex-row flex-col lg:w-full lg:h-screen items-center">
      <div class="w-full lg:w-[45%] pt-28 px-5 text-center">
        <h1
          class="text-4xl lg:text-[78px] font-bold leading-[1.1em] mb-5 lg:text-left heading-animation-character"
        >
          Its time for FLCL to take on the World.
        </h1>
        <div class="text-white text-center lg:text-left mb-8 lg:mb-0">
          <a
            href="https://twitter.com/FoolyCoolyERC"
            target="_blank"
            class="inline-block"
          >
            <svg
              class="inline-block mr-3 w-[25px] lg:w-[40px]"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.704 7.48979C33.3307 7.8015 33.1155 8.26761 33.1177 8.754C33.1181 8.84434 33.1181 8.93467 33.1181 9.025C33.1181 19.6999 25.2819 32 10.9594 32C7.21547 32 3.69722 31.046 0.610818 29.352C0.195319 29.124 0.406742 28.475 0.880711 28.475C2.34757 28.475 3.76749 28.268 5.11521 27.8787C7.14522 27.2921 6.50754 24.0942 5.06892 22.5465C4.58291 22.0236 4.16487 21.4331 3.82912 20.7899C3.51335 20.1849 4.0562 19.55 4.73862 19.55C5.26053 19.55 5.30456 18.8191 4.84156 18.5782C2.2894 17.2504 0.543088 14.5204 0.543088 11.35C0.543088 11.3056 0.591207 11.2778 0.629922 11.2995C0.958645 11.4841 1.30378 11.6462 1.66233 11.7827C2.33172 12.0375 2.72441 11.1518 2.28775 10.584C1.22468 9.20179 0.591331 7.45076 0.591331 5.54994C0.591331 3.52402 3.04987 3.2293 4.5763 4.56137C7.71338 7.299 11.5992 9.14417 15.8568 9.74451C16.7911 9.87625 17.5177 9.01855 17.5177 8.07501C17.5177 3.62496 20.9898 0 25.3058 0C27.2173 0 28.9712 0.708505 30.3284 1.89322C30.7662 2.27546 31.3472 2.48743 31.9089 2.33787C32.6364 2.14419 33.3473 1.89543 34.0329 1.59716C34.7169 1.29957 35.4394 1.91961 35.0395 2.54928C34.869 2.81787 34.6831 3.07534 34.4832 3.32041C34.0835 3.8103 34.4991 4.69456 35.104 4.51066C35.672 4.33798 36.1581 4.97913 35.7743 5.43203C35.1431 6.17687 34.4498 6.86718 33.704 7.48979Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            href="https://t.me/foolycoolyerc"
            target="_blank"
            class="inline-block ml-3"
          >
            <svg
              class="inline-block w-[25px] lg:w-[40px]"
              viewBox="0 0 38 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.61147 14.0218C12.8086 9.42519 19.6084 6.3948 23.0105 4.93078C32.7246 0.750497 34.7431 0.0242843 36.0587 0.000251606C36.3481 -0.00497905 36.9951 0.0692404 37.4141 0.421108C38.0358 0.943043 38.0394 2.07597 37.9704 2.8258C37.4439 8.54842 35.1662 22.4355 34.0073 28.8449C33.5169 31.5569 32.5515 32.4664 31.6169 32.5553C29.5856 32.7487 28.0431 31.1663 26.0757 29.8321C22.9971 27.7441 21.2578 26.4443 18.2694 24.4069C14.8159 22.0523 17.0547 20.7582 19.0229 18.6432C19.538 18.0897 28.4879 9.66707 28.6611 8.90297C28.6829 8.8074 28.7029 8.45115 28.4984 8.26313C28.2938 8.07511 27.992 8.13929 27.7742 8.19047C27.4654 8.26299 22.5473 11.6263 13.0198 18.2803C11.6238 19.2721 10.3594 19.7553 9.2265 19.73C7.9775 19.7022 5.57514 18.9994 3.78915 18.3987C1.59858 17.6621 -0.142457 17.2724 0.00921018 16.0213C0.0881866 15.3695 0.955561 14.7031 2.61147 14.0218Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="w-full lg:w-[55%]">
        <div class="wrapper text-center">
          <img src={HEADER_COOL_BOY} alt="" class="mx-auto" />
        </div>
      </div>
    </div>
  </div>
</header>

<style>
  nav {
    background: linear-gradient(180deg, #cf616d 0%, #d43647 100%);
    z-index: 1000;
  }
  .heading-animation-character {
    text-transform: uppercase;
    background-image: linear-gradient(
      -225deg,
      #ffffff 0%,
      #ffffff 29%,
      #d3d1a9 67%,
      #fff 100%
    );
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: text-clip 2.5s linear infinite;
    display: inline-block;
  }

  @keyframes text-clip {
    to {
      background-position: 200% center;
    }
  }
</style>
