<template>
  <div class="mb-1">
      <label class="text-sm text-gray-800 font-medium" :for="id" v-text="label"></label>
      <slot></slot>
  </div>
</template>

<script>
export default {
    props:{
        id:{default:'',type:String},
        label:{default:'',type:String}
    }
}
</script>

<style>

</style>