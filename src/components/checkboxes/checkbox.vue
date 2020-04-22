<template>
  <div class="relative check"> 
      <input type="checkbox" class="hidden customcheck" v-model="checked"   @change="onChange"
        :id="id" :value="val">
      <label :for="id" class="customlabel select-none" ><slot></slot></label>  
  </div>
</template>

<script>
export default {
  
  // model:{
  //   prop:'value',
  //   event:'change'
  // },
  props:{
    id:{default:'',type:String}, 
    value:{default:[]},
    val:{default:'',type:String},
    name:{default:'',type:String}
  },
  data(){
    return{
      checkedProxy: false
    }
  },
  computed:{
    checked: {
      get () {
        return this.value
      },
      set (val) {
        this.checkedProxy = val
      }
    }
  },
  methods:{
    onChange(e){
      this.$emit('input',this.checkedProxy)
    }
  }
}
</script>

<style >
.check > .customlabel{
  margin-left: 22px;
}
.check > .customlabel::after{
  content: '';
  display: inline-flex;
  position: absolute;top:50%; transform: translateY(-50%); left: 0;
  border-radius: 50%;
  width: 16px; height: 16px;
  border-color:#1E74FD;
  border-width: 2px;
}
.check > .customlabel::before{
  content: '';
  /* display: inline-flex; */
  vertical-align: middle; top:50%; transform: translateY(-50%);  left: 4px;
  position: absolute;
  border-radius: 50%;
  width: 8px; height: 8px;
  background-color:white; 
}
.check .customcheck:checked + .customlabel::before{
  background-color: #1E74FD !important;
} 
</style>