<template>
  <div>
    <button :type="type" class="rounded text-white py-1 border px-3 shadow focus:outline-none" 
        @click="callback" :disabled="disabled" 
        :class="['bg-'+variant,'border-'+variant,{'opacity-50 cursor-not-allowed':disabled == true}]">
          <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
    props:{
        variant:{default:'primary',type:String},
        outline:{default:false,type:Boolean},
        disabled:{default:false,type:Boolean},
        type:{default:'button',type:String}
    },
    methods:{
      callback(e){
        this.$emit('click',e)
      }
    }
}
</script>

<style>

</style>