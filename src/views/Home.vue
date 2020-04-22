<template>
  <div class="home mx-4">
    <!-- ALERTS -->
    <p class="font-semibold text-center text-xl my-2">ALERTS </p>
    <div class="mb-4 max-w-full grid grid-cols-4 gap-4  sm:grid-cols-2">
      <tc-alert v-if="showalert" @close="showalert = false" title="Registro Correcto 😎" ></tc-alert>
      <tc-alert title="Actualizado" variant="purple-400" :outline="false">Usuario actualizado</tc-alert>
      <tc-alert title="Actualizado" variant="success" :outline="false">Usuario actualizado</tc-alert>
      <tc-alert title="Actualizado" variant="danger" :outline="false">Usuario actualizado</tc-alert>
    </div>
    <!-- FORMS -->
    <p class="font-semibold text-center text-xl my-2">FORMS </p>
    <div class="mb-4  mt-4 max-w-full  grid grid-cols-6 sm:grid-cols-2 gap-4">
      <tc-input :iconclose="true"></tc-input>
      <tc-input placeholder="Nombre" :iconclose="true"></tc-input>
      <tc-input placeholder="Direccion" v-model="direction">
        <template v-slot:icon>
          <iconsuer class="text-gray-700"></iconsuer>
        </template>
      </tc-input> 
    </div>
    <!-- CHECKBOXES -->
    <p class="font-semibold text-center text-xl my-2">CHECKBOXES </p>
    <div class="mb-4  mt-4 max-w-full  grid grid-cols-6 gap-4">
      <TcCheckbox id="andres"  val="andres" v-model="formData">Andres P</TcCheckbox>
      <TcCheckbox id="jose" val="jose" v-model="formData">Jose PE</TcCheckbox>
      <TcCheckbox id="josee" val="josee" v-model="formData">Josew</TcCheckbox>
      <!-- <TcCheckbox id="surname" v-model="check" svalue="surname" text="Option 3"></TcCheckbox>
      <TcCheckbox id="lastname" v-model="check" svalue="lastname" text="Option 4"></TcCheckbox> -->
      <h3>{{formData}}</h3>
    </div>
    <!-- SELECTECS -->
    <p class="font-semibold text-center text-xl my-2">SELECTECS </p>
    <div class=" mb-4 mt-4 max-w-full  grid grid-cols-6 gap-4">
      <TcSelect :options="options" v-model="selected"></TcSelect> {{selected}}
      <TcSelect :options="options" v-model="selected2"></TcSelect> {{selected2}}
    </div>
    <!-- BUTTONS -->
    <p class="font-semibold text-center text-xl my-2">BUTTONS </p>
    <div class=" mb-4 mt-4 max-w-full  grid grid-cols-6 gap-4">
      <TcButton @click="al()" >Registrate</TcButton> 
      <TcButton variant="secondary">Ingresar</TcButton> 
      <TcButton variant="warning" :disabled="true">Seguro</TcButton> 
      <TcButton variant="success">Correcto!</TcButton> 
      <TcButton @click="showalert = !showalert" variant="dark">Alertpe</TcButton> 
    </div>
    <!-- CARDS -->
    <p class="font-semibold text-center text-xl my-2">CARDS </p>
    <div class=" mb-4 mt-4 max-w-full  grid grid-cols-4 sm:grid-cols-2 gap-4">
      <TcCard>
        <template v-slot:header>
          <h1>TITLEs</h1>
        </template>
        <template v-slot:body>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quam nostrum temporibus placeat cumque soluta ullam quas dignissimos! Laborum nesciunt quo dolores repudiandae vero facilis, maiores nemo ea sapiente sit!</p>
        </template>
      </TcCard>
      <TcCard>
        <template v-slot:header>
          <h1 class="m-auto font-semibold">LOGIN</h1>
        </template>
        <template v-slot:body>
          <div class="flex flex-col w-full">
            <form @submit.prevent="checkloginpe">
            <TcGroup label="Email" id="email">
              <TcInput type="email" placeholder="Usuario" v-model="userlogin.email" :closebotton="false" id="email"></TcInput>
            </TcGroup>
            <TcGroup label="Contraseña" id="password">
            <TcInput type="password" v-model="userlogin.password" placeholder="Contraseña" :closebotton="false" id="password"></TcInput>
            </TcGroup>
            <TcButton type="submit" class="ml-auto mt-auto" variant="primary mt-2">Ingresar</TcButton>
            </form>
          </div>
        </template>
      </TcCard>
    </div>
    <p>https://markus.oberlehner.net/blog/vue-functional-base-components-powered-by-css-modules/</p>
    <p>https://themeforest.net/item/mobilekit-bootstrap-4-based-mobile-ui-kit-template/25384264</p>
    <p>https://themeforest.net/item/finapp-wallet-banking-html-mobile-template/25738217</p>
  </div>
</template>

<script>
// @ is an alias to /src
import TcAlert from '@/components/alerts/Alert'
import TcInput from '@/components/form/Input'
import TcSelect from '@/components/form/Select'
import TcCheckbox from '@/components/checkboxes/checkbox'
import iconsuer from '@/components/icons/user'
import TcButton from '@/components/buttons/button'
import TcCard from '@/components/card/Card'
import TcGroup from '@/components/form/group'
export default {
  name: 'Home',
  components: {
    TcAlert,TcInput,iconsuer,TcCheckbox,TcSelect,TcButton,TcCard,TcGroup
  },
  data(){
    return{
      direction:'', formData:[],
       options:[
          { value: null, text: 'Please select an option' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option' },
          { value: 'c', text: 'This is an option with object value' },
          { value: 'd', text: 'This one is disabled', disabled: true }
       ],selected:null,selected2:null,
       showalert:true,
       userlogin:{}
    }
  },
  watch:{
    direction:function(){
      console.log(this.direction)
    },
    check:function(){
      console.log(this.check)
    },
    selected:function(){
      console.log(this.selected)
    },
    
  },
  methods:{
    al(){
      alert('Registerpe')
    },
    checkloginpe(){
      console.log(this.userlogin)
    }
  }
}
</script>
