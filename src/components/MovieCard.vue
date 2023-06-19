<script lang="ts" setup>
import { StarIcon } from '@heroicons/vue/24/solid';
interface MovieFeed {
  title: string;
  poster: string;
  year: string;
  id: string;
  rate: string;
  linc?: string;
}
defineProps<MovieFeed>()
</script>

<template>
  <div class="mr-6">
    <img 
      :src="poster"
      class="h-48 w-86 rounded-lg mr-4 aspect-video drop-shadow cursor-pointer"  
      alt="Movie description" 
    />
    <div class="flex mt-4 justify-between">
      <h2 class="text-white text-lg">
        {{ title }}
      </h2>
      <div class="w-30 flex items-center">
        <div class="h-3 text-gray-500 flex items-center mr-4">{{ year }}</div>
        <div class="h-3 text-gray-500 flex items-center">
          <StarIcon class="text-orange-600 mr-1 w-4" /> 
          {{ rate }}</div>
      </div>
    </div>
  </div>
</template>

<style>
.carousel__viewport {
  @apply pl-6
}
</style>
