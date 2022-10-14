<template>
  <main>
    {{getNomeUtente}}
    <div class="flex-container">
     <table border="1 solid black" v-if="personaggio">
      <tr>
        <td>id</td>
        <td>{{personaggio.id}} </td>
      </tr>
      <tr>
        <td>Level</td>
        <td>{{personaggio.level}}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{{personaggio.name}}</td>
      </tr>
      <tr>
        <td>Class</td>
        <td>{{personaggio.class}}</td>
      </tr>
      <tr>
        <td>XP</td>
        <td>{{personaggio.xp}}</td>
      </tr>
      <tr>
        <td>Attributi</td>
        <td></td>
      </tr>
      <tr>
        <td>strenght</td>
        <td>{{personaggio.attributes.strenght}}</td>
      </tr>
      <tr>
        <td>dexterity</td>
        <td>{{personaggio.attributes.dexterity}}</td>
      </tr>
      <tr>
        <td>constitution</td>
        <td>{{personaggio.attributes.constitution}}</td>
      </tr>
      <tr>
        <td>intelligence</td>
        <td>{{personaggio.attributes.intelligence}}</td>
      </tr>
      <tr>
        <td>wisdom</td>
        <td>{{personaggio.attributes.wisdom}}</td>
      </tr>
      <tr>
        <td>charisma</td>
        <td>{{personaggio.attributes.charisma}}</td>
      </tr>
     </table>


    </div>
    <div v-if="personaggio && personaggio.class=='wizard'">
      <p><strong>Libro degli incatesimi</strong></p>
{{libroIncatesimi}}

    </div>
  </main>
</template>

<script>
import {mapGetters,mapActions} from 'pinia'
import { userDati } from '../stores/user';
export default{
  data(){return{
    valore:"dsadasdas",
   personaggio:"",
   libroIncatesimi:""
  }},
  mounted(){
  
  this.axios.get('http://localhost:3000/api/heroes/').then( (response)=>{
    this.personaggio=response.data[1]; 
    console.log(response.data[1])
    this.salvaClass(this.personaggio.class)
    this.libroIncatesimiImport()
  })


  },
  computed:{
    ...mapGetters(userDati,['getNomeUtente']),
   
  },
  methods:{
    ...mapActions(userDati, ['salvaClass']),
    libroIncatesimiImport(){
      this.axios.get('https://www.dnd5eapi.co/api/classes/wizard/levels/1/spells').then( (response)=>{
    this.libroIncatesimi=response.data.results; 
    console.log(response.data.results)
  
  })
    },
    
  }

}

</script>