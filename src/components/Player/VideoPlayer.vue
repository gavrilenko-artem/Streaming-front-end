<script>
import TimeControl from "./TimeControl.vue"
import VolumeControl from "./VolumeControl.vue"
</script>

<template>
  <div class="wrapper px-6 py-9">
    <div class="player w-full aspect-video object-cover cursor-pointer" ref="player">
      <video 
        src="../../assets/video.mp4"
        class="video w-full h-full aspect-video relative object-cover rounded-lg cursor-pointer shadow-sm bg-streaming-black-200"
        controls
        allowfullscreen
        preload="auto"
        type="video/mp4"
        ref="video"
      />
      <time-control />
      <volume-control />
    </div>
  </div>
</template>

<style>
  ::-webkit-media-controls {
    display: none;
  }
</style>