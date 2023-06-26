<script lang="ts" setup>
import { Tab } from "../types/index";
defineProps<{ tabs: Tab[]; activeTab: string }>();
const emits = defineEmits<{
  'on-tab-change': [tab: string]
}>();
</script>

<template>
  <div class="my-9">
    <nav class="flex space-x-3">
      <a
        v-for="{ id, title } in tabs"
        :key="id"
        :class="id === activeTab ? 'bg-orange-700' : 'bg-streaming-black'"
        @click="emits('on-tab-change', id)"
        class="text-white py-3 px-5 rounded-lg cursor-pointer"
        >{{ title }}
      </a>
    </nav>
  </div>
</template>
