import {defineStore} from 'pinia'

export const userDati=defineStore('userinfo',{state:()=>({
    nomeutente:"",
    class:"",
}),
actions:{
    salvaNomeUtente(nomeUtente){
        this.nomeutente=nomeUtente
    },
    salvaClass(Class){
        this.class=Class
    }
},
getters:{
    getNomeUtente:(state)=>state.nomeutente,
    getclassUtente:(state)=>state.class
}

})