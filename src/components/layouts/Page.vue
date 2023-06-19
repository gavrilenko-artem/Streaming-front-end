<script lang="ts" setup>
withDefaults(
  defineProps<{
  paddingless: Boolean
}>(), {
  paddingless: false
}
)
</script>

<template>
  <section
    class="bg-streaming-black-200 h-full flex flex-1 flex-col overflow-y-auto min-w-0"
  >
    <div>
      <slot />
    </div>
  </section>
</template>
