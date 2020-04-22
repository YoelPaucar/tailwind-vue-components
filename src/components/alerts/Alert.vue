<template>
<transition name="fade">
  <div class="text-white rounded border px-3 py-2" :class="[outline? 'text-'+variant+' border-'+variant+'' : 'bg-'+variant+' border-'+variant+'']">
    <div class="flex justify-between items-center">
      <p class="font-medium" v-text="title"></p>
      <closeicon iconclass="w-3 h-3 cursor-pointer" @click.native="$emit('close')" ></closeicon>
    </div>
    <slot></slot>
  </div>
</transition>
</template>

<script>
import closeicon from '@/components/icons/close'
export default {
  props:{
    outline:{default:false,type:Boolean},
    variant:{default:'primary',type:String},
    title:{default:'',type:String},
    bodynone:{default:false,type:Boolean}, 
  }, 
  components:{
    closeicon
  },
  methods:{
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>