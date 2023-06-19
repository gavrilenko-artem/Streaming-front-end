<script lang="ts" setup>
import { ref } from "vue";
import Page from "../components/layouts/Page.vue";
import Tabs from "../components/Tabs.vue";

import { tabsMock } from "../mocks/index";

const activeTab = ref<string>(tabsMock[0].id);
const tabChange = (tabID: string) => {
  activeTab.value = tabID;
};
import Banner from "../components/Banner.vue";
import RowContent from "../components/RowContent.vue";
import MovieFeed from "../components/MovieFeed.vue";

</script>

<template>
  <page paddingless>
    <div :class="paddingless ? '' : 'mx-6'">
    <tabs :tabs="tabsMock" :activeTab="activeTab" @on-tab-change="tabChange" />
    <banner />
  </div>
    <row-content
      class="flex-col"
    >
      <h1 class="text-white font-bold text-2xl mx-6">Special for you</h1>
      <movie-feed />
    </row-content>
  </page>
</template>
