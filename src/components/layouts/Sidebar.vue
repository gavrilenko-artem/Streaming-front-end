<script lang="ts" setup>
import {
  HomeIcon,
  FilmIcon,
  MagnifyingGlassIcon,
  CogIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
import {
  HomeIcon as HomeSolidIcon,
  FilmIcon as FilmSolidIcon,
  MagnifyingGlassIcon as MagnifyingGlassSolidIcon,
  CogIcon as CogSolidIcon,
  UserIcon as UserSolidIcon,
} from "@heroicons/vue/24/solid";
import { useRoute } from "vue-router";

const menu = [
  {
    to: "/",
    name: "Home",
    icon: HomeIcon,
    activeIcon: HomeSolidIcon,
  },
  {
    to: "/search",
    name: "Search",
    icon: MagnifyingGlassIcon,
    activeIcon: MagnifyingGlassSolidIcon,
  },
  {
    to: "/movies/1",
    name: "Movie",
    icon: FilmIcon,
    activeIcon: FilmSolidIcon,
  },
  {
    to: "/settings",
    name: "Settings",
    icon: CogIcon,
    activeIcon: CogSolidIcon,
  },
  {
    to: "/profile",
    name: "Profole",
    icon: UserIcon,
    activeIcon: UserSolidIcon,
  },
];
defineProps<{
  title?: string;
}>();

const route = useRoute();
</script>

<template>
  <div class="bg-streaming-black h-full flex flex-col overflow-y-auto min-w-0">
    <div class="mx-6 my-9">
      <h1 class="text-2xl font-weight-800 font-bold text-white">miniNetflix</h1>
    </div>
    <nav class="block">
      <div class="relative flex flex-col w-30 p-10 space-y-8">
        <router-link
          v-for="{ to, name, icon, activeIcon } in menu"
          :to="to"
          :key="to"
          :class="[
            route.path === to
              ? 'text-white'
              : 'text-streamming-text hover:text-white',
            'flex justify-start content-center flex-wrap',
          ]"
        >
          <component
            :is="route.path === to ? activeIcon : icon"
            class="w-8 h-8 mr-4"
          ></component>
          {{ name }}
        </router-link>
      </div>
    </nav>
  </div>
</template>
