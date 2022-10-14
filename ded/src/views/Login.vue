<template>
<div class="flex-container">
    <div><input type="text" v-model="nomePersonaggio" name="nomePersonazzio" placeholder="Nome Personaggio" required/></div>
    <div><input type="password" name="password" v-model="password" placeholder="password" required></div>
  
    <div><input type="button" value="Conferma" @click="controlloDati()" /></div>

  </div> 
    <div>
        
    </div>
</template>
<script>
import {mapActions} from 'pinia'
import {userDati} from '../stores/user'
export default{
    data(){return {
        nomePersonaggio:"",
        password:""

    }},
    methods:{
        ...mapActions(userDati, ['salvaNomeUtente']),
        controlloDati(){
            if(this.nomePersonaggio.length>0 && this.password.length>0){

                this.salvaNomeUtente(this.nomePersonaggio)
                this.$router.push('/home')
            }
        }
    },
    
}
</script>