<template>
  <div class="progress">
    <div class="progress-bar bg-info" role="progressbar" :style="{width: currentwidth + '%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
      {{currentItem}} / 10
    </div>

  </div>
</template>

<script>
  import {eventBus} from "../main";

  export  default {
    data(){
      return{
        currentItem : 0,
        currentwidth : 0,
      }
    },
    created(){
      eventBus.$on("progressBarUpdated", (current) => {
        this.currentItem = current;
        this.currentwidth = current * 10;
      })
    }
  }
</script>