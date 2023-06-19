<script lang="ts" setup>
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import { movies } from "../mocks/movies.ts";
import MovieCard from "./MovieCard.vue";
</script>

<template>
  <div class="mt-4">
    <carousel :items-to-show="4.5">
      <slide v-for="movie in movies" :key="movie.id">
        <movie-card v-bind="movie" />
      </slide>
    </carousel>
  </div>
</template>

<style></style>
