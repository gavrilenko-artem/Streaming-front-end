<script lang="ts" setup>
interface Banner {
  id: string;
  title: string;
  plot: string;
  year: string;
  ganre: string;
  duration: string;
  poster: string;
}

const bannerMock: Banner = {
  id: "1",
  title: "Cowboys & Aliens",
  plot: "A spaceship arrives in Arizona, 1873, to take over the Earth, starting with the Wild West region. A posse of cowboys and natives are all that stand in their way.",
  year: "2011",
  ganre: "Action Drama Sci-Fi Thriller Western",
  duration: "1h 59m",
  poster:
    "https://www.film.ru/sites/default/files/styles/thumb_1024x450/public/trailers_frame/cowboys_aliens.jpg",
};

const bg = `url(${bannerMock.poster})`;
</script>

<template>
  <div class="flex p-8 w-full h-[460px] banner rounded-lg cursor-pointer">
    <div class="text-white self-end">
      <h1 class="text-4xl mb-8 font-bold">{{ bannerMock.title }}</h1>
      <p>{{ bannerMock.plot }}</p>
      <div class="flex mt-6 gap-6">
        <span>{{ bannerMock.year }}</span>
        <span>{{ bannerMock.ganre }}</span>
        <span>{{ bannerMock.duration }}</span>
      </div>
    </div>
  </div>
</template>

<style>
.banner {
  background: linear-gradient(
      0deg,
      rgba(70, 70, 70, 1) 2%,
      rgba(166, 186, 183, 0) 50%,
      rgba(2, 0, 36, 0) 100%
    ),
    v-bind(bg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
}
</style>
