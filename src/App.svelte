<script lang="ts">
  import {
    COIN_MARKET_CAP,
    DXT_LOGO,
    FLCL_TWO_IMG,
    HOUOBY_LOGO,
    HYPE_ILLUSTRATION,
    ROADMAP_BOY_IMG,
    TRUST_WALLET,
    UNISWAP,
    ANIMEVERSE_FIRST_IMG,
    ANIMEVERSE_SECOND_IMG,
    ANIMEVERSE_THIRD_IMG,
  } from "./assets/img";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";

  const cards_data = [
    {
      title: "Community",
      desc: "Our conviction lies in recognizing the community's paramount role in driving our achievements. Our primary emphasis will be on fostering a resilient and devoted following, establishing connections with influential figures, and organizing diverse contests and giveaways to ensure the community's continuous prosperity.",
    },
    {
      title: "Transparency",
      desc: "Openness and transparency are fundamental to our project's triumph. We are committed to providing regular updates on platforms like Telegram and Twitter, while also actively seeking input from our community members to ensure the optimal outcome.",
    },
  ];

  const logos = [COIN_MARKET_CAP, DXT_LOGO, HOUOBY_LOGO];
</script>

<main>
  <Header />
  <section id="hype-illustration" class="overflow-hidden">
    <div class="py-10">
      <div class="slide-going-animation flex">
        <div class="part-1 sliding-text">
          <h1 class="flex-shrink-0 mx-10 font-medium">
            •&nbsp;Nothing can happen till you swing the bat.
          </h1>
          <h1 class="flex-shrink-0 mx-10 font-medium">
            •&nbsp;Nothing can happen till you swing the bat.
          </h1>
        </div>
        <div class="part-2 sliding-text">
          <h1 class="flex-shrink-0 mx-10 font-medium">
            •&nbsp;Nothing can happen till you swing the bat.
          </h1>
          <h1 class="flex-shrink-0 mx-10 font-medium">
            •&nbsp;Nothing can happen till you swing the bat.
          </h1>
        </div>
      </div>
    </div>
    <div class="illustration">
      <div class=" px-4 lg:px-0 py-6 lg:py-10">
        <img
          src={HYPE_ILLUSTRATION}
          alt=""
          class="mx-auto w-full lg:max-w-[1200px]"
        />
      </div>
    </div>
    <div class="py-10">
      <div class="slide-going-animation flex">
        <div class="part-1 sliding-text font-bold reverse">
          <h1 class="flex-shrink-0">
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
          </h1>
        </div>
        <div class="part-2 sliding-text reverse font-bold">
          <h1 class="flex-shrink-0">
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
            <span class="mx-12">We Hype</span> •
          </h1>
        </div>
      </div>
    </div>
  </section>
  <!--  tokenomics -->
  <section
    id="tokenomics"
    class=" relative overflow-x-hidden w-full bg-black pt-20 pb-16 z-10"
  >
    <div class="art-text h-100 lg:h-[200px]">
      <h1
        class="text-9xl lg:text-[580px] font-bold absolute top-[-5%] lg:top-[-16%] lg:left-[50%] lg:translate-x-[-50%] -z-10 text-transparent"
      >
        $FLCL
      </h1>
    </div>
    <div class="container">
      <div class="flex flex-col lg:flex-row items-end">
        <div class="w-full lg:w-2/5 lg:mb-28 mb-12 px-10">
          <h1
            class="text-8xl md:text-[128px] text-white mt-8 lg:mt-0 font-extrabold gradient-text w-fit"
          >
            $FLCL
          </h1>
          <ul
            class="text-white text-3xl md:text-[40px] leading-tight list-disc pl-8 lg:mt-5"
          >
            <li>1B Token Supply</li>
            <li>0% Buy Tax</li>
            <li>0% Sell Tax</li>
            <li>100% Liquidity Locked</li>
          </ul>
        </div>
        <div class="flex-auto">
          <img
            src={FLCL_TWO_IMG}
            alt=""
            class="w-full px-4 lg:px-0 lg:max-w-[890px] ml-auto"
          />
        </div>
      </div>
    </div>
  </section>
  <!-- animeverse -->
  <section id="animeverse">
    <!--   part one -->
    <div class="relative">
      <img src={ANIMEVERSE_FIRST_IMG} alt="animeverse" class="w-full h-full" />
      <div class="absolute lg:bottom-[55px] lg:right-[48px] bottom-3 right-5">
        <p
          class=" lg:text-8xl md:text-4xl text-3xl text-white xl:font-bold font-semibold md:font-bold"
        >
          Animeverse
        </p>
        <p
          class="text-right text-[10px] lg:text-xl md:text-[14.71px] text-white lg:font-semibold"
        >
          COMING SOON
        </p>
      </div>
    </div>
    <!--  part two -->
    <div class="flex flex-wrap">
      <div
        class="lg:w-6/12 w-full h-fit md:h-auto lg:flex flex-col items-center justify-center"
      >
        <div
          class="lg:h-3/4 h-[180px] flex flex-col justify-center items-center"
        >
          <div>
            <p class="md:text-[14px] xl:text-lg text-[8px] xl:font-semibold">
              A virtual anime world where the anime community can
            </p>
            <p
              class="md:text-xl xl:text-3xl leading-none text-lg font-normal gradient-text"
            >
              <span class="inline-block align-middle"
                >Connect. Play. Earn. Trade. Have Fun.</span
              >
            </p>
          </div>
        </div>
        <div class="w-full lg:h-1/4 flex items-end">
          <!-- Updated width class here -->
          <img
            src={ANIMEVERSE_SECOND_IMG}
            alt="animeverse_second_image"
            class="w-full"
          />
        </div>
      </div>

      <div class="w-full lg:w-6/12 flex items-center justify-center">
        <!-- Updated width class here -->
        <img src={ANIMEVERSE_THIRD_IMG} alt="" class="w-full" />
      </div>
    </div>
  </section>
  <section id="roadmap">
    <div class="container py-16 pt-24">
      <div class="title flex items-center">
        <div class="w-2/12" />
        <div class="w-3/12 hidden lg:block" />
        <div class="lg:w-7/12 px-3 lg:px-0 text-center lg:text-left pb-14">
          <h1 class="text-5xl lg:text-7xl font-extrabold mb-3">Fooly Cooly</h1>
          <p class="lg:w-[90%]">
            Naota shows us the tumultuous process of adolescence and the
            emotional and psychological changes that come with it.
          </p>
        </div>
      </div>
      <div
        class="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 lg:gap-y-0 px-8 lg:px-0"
      >
        <div class="card-wrapper lg:mt-0 mt-[180px] left-[10%]">
          <div
            class="card relative text-center h-full p-5 lg:p-10 border border-black rounded-2xl lg:px-16"
          >
            <img
              src={ROADMAP_BOY_IMG}
              class="absolute w-[200px] top-[-0px] translate-y-[-100%] lg:w-[250px] -z-10 left-[20%] lg:left-[40%]"
              alt=""
            />
            <h1
              class="lg:text-5xl text-3xl font-bold gradient-text py-3 lg:py-5"
            >
              Community
            </h1>
            <p class="py-8 lg:text-xl">
              Our conviction lies in recognizing the community's paramount role
              in driving our achievements. Our primary emphasis will be on
              fostering a resilient and devoted following, establishing
              connections with influential figures, and organizing diverse
              contests and giveaways to ensure the community's continuous
              prosperity.
            </p>
          </div>
        </div>
        <div class="card-wrapper">
          <div
            class="card text-center h-full p-5 lg:p-10 border border-black rounded-2xl lg:px-16"
          >
            <h1
              class="lg:text-5xl text-3xl font-bold gradient-text py-3 lg:py-5"
            >
              Transparency
            </h1>
            <p class="py-8 lg:text-xl">
              Openness and transparency are fundamental to our project's
              triumph. We are committed to providing regular updates on
              platforms like Telegram and Twitter, while also actively seeking
              input from our community members to ensure the optimal outcome.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="logos">
    <div class="bg-black px-4 lg:px-0 py-10">
      <div class="flex justify-center gap-6 lg:gap-8 flex-wrap">
        {#each logos as logo}
          <img src={logo} alt="" class="h-[30px] lg:h-auto" />
        {/each}
      </div>
    </div>
  </section>
  <Footer />
</main>

<style lang="postcss">
  .slide-going-animation .part-1 {
    animation: slide-going-animation 20s linear infinite;
  }
  .sliding-text,
  .sliding-text.reverse {
    @apply lg:text-4xl text-2xl flex flex-shrink-0;
  }
  .slide-going-animation .part-2 {
    animation: slide-going-animation 20s linear infinite;
  }
  .slide-going-animation .part-1.reverse,
  .slide-going-animation .part-2.reverse {
    animation-direction: reverse;
  }

  @keyframes slide-going-animation {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  .art-text h1 {
    -webkit-text-stroke: 5px rgba(255, 255, 255, 0.553);
  }
  @media only screen and (max-width: 500px) {
    .art-text h1 {
      -webkit-text-stroke: 2px rgba(255, 255, 255, 0.298);
    }
  }
</style>
