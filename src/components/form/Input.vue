<template>
  <div class="relative">
    <input :type="type" @input="$emit('updateSound',content)" v-model="content"  
       class="w-full appearance-none border focus:outline-none focus:border-primary bg-white rounded py-2 pl-3 pr-8 text-gray-700"
        :placeholder="placeholder" :required="required">
    <div class="absolute right-12 top-1/2 transform -translate-y-1/2 m-auto " @click="clear">
      <slot name="icon">
        <closeicon v-if="iconclose" :class="{'text-primary':statuslength}"
          iconclass="cursor-pointer h-3 w-3 text-gray-500 "></closeicon> 
      </slot>
    </div>
  </div>
</template>

<script>
import closeicon from '@/components/icons/close'
export default {
    components:{
        closeicon
    },
    model:{
      prop:'value',
      event:'updateSound'
    },
    props:{
        type:{default:'text',type:String},
        placeholder:{default:'',type:String},  
        iconclose:{default:false,type:Boolean},
        required:{default:false,type:Boolean},
        value:{type:String}
    },
    data(){
      return{
        content:this.value,
        statuslength:false
      }
    },
    watch:{
      content:function(){
        if(this.content.length >0){
          this.statuslength = true
        }else{
          this.statuslength = false
        }
      }
    },
    methods:{
      clear(){
        this.content = ''
        console.log('limpuiado')
      }
    }
}
</script>

<style>

</style>