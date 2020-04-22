<template>
  <div class="bg-white text-gray-800 border rounded  p-4">
      <div class="flex">
          <slot name="header"></slot>
      </div>
      <div class="mt-1 flex">
          <slot name="body"></slot>
      </div>
  </div>
</template>

<script>
import closeicon from '@/components/icons/close'
export default {
    components:{
        closeicon
    },
}
</script>

<style>

</style>