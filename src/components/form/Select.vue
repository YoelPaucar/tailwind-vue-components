<template>
  <div class="relative">
        <select v-model="selected" @change="$emit('input',selected)" class="custom-select block appearance-none w-full border border-gray-200 text-gray-800 bg-white py-3 px-4 pr-8 rounded leading-4 focus:outline-none  focus:border-primary" id="grid-state">
          <option v-for="option in options" :key="option.id" 
            :value="option.value" :selected="option.value == null" v-text="option.text"> </option> 
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
</template>

<script>
export default {
  props:{
    options:{ type:[Object,Array], required:true},
  },
  
  data(){
    return{
      selected:null
    }
  }
}
</script>

<style> 

</style>