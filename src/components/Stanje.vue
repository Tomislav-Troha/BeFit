<template>
 <div style="background-color:#CEFFD1" class="mx-3 mt-3 rounded-lg"><br>
 <div class="stanje  mx-5" >
      <b-card
        header="Udio masti u tijelu"
        class="text-left mx-auto mt-5"
        style="background-color:#F8F8F8; max-width:900px; "
      >
        <b-form class="text-left">
          <b-form-group
            id="fieldset-horizontal"
            label="Vaš udio masti u tijelu iznosi:"
            label-for="input-horizontal"
            label-cols-sm="3"
            label-cols-lg="3"
            content-cols-sm
            content-cols-lg="3"
           
          >
           <p class="mb-0 px-1 py-2"><strong >{{Masti.solution}} &nbsp; </strong></p>
           </b-form-group>
           <b-form-group
            id="fieldset-horizontal"
            label="Vaš status:"
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2">
            
          <p class="mb-0 px-1 py-2">  <strong>{{Masti.status_masti}} &nbsp;</strong> </p>
          </b-form-group>
          
          <button @click.prevent="obrisi_masti(Masti.id); " class="btn btn-danger">Obriši</button>
          <p class="mt-3 mb-1" style="color:red;">{{obrisano1}}</p>
          
         </b-form>
      </b-card>
       <b-card
        header="Indeks tjelesne mase "
       class="text-left mx-auto mt-5"
        style="background-color:#F8F8F8; max-width:900px; "
      >
        <b-form class="text-left">
          <b-form-group
            id="fieldset-horizontal"
            label="Vaš indeks tjelesne mase iznosi:"
            label-for="input-horizontal"
             label-cols-sm="4"
            label-cols-lg="4"
            content-cols-sm
            content-cols-lg="4"
           
          >
           <p class="mb-0 px-1 py-2"><strong>  &nbsp;{{Indeks.solution_indeks}} </strong></p>
           </b-form-group>
           <b-form-group
            id="fieldset-horizontal"
            label="Vaš status:"
            label-for="input-horizontal"
             label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
          >
          <p class="mb-0 px-1 py-2">  <strong> &nbsp;{{Indeks.status_tjelesne_mase}}</strong> </p>
          </b-form-group>
            <button  @click.prevent="obrisi_indeks(Indeks.id)"  class="btn btn-danger">Obriši</button>
            <p class="mt-3 mb-1" style="color:red;">{{obrisano2}}</p>
         </b-form>
      </b-card>
      <b-card
        header="Omjer struka i bokova "
        class="text-left mx-auto mt-5"
        style="background-color:#F8F8F8; max-width:900px;"
      >
        <b-form class="text-left">
          <b-form-group
            id="fieldset-horizontal"
            label="Vaš omjer struka i bokova iznosi:"
            label-for="input-horizontal"
            label-cols-sm="4"
            label-cols-lg="4"
            content-cols-sm
            content-cols-lg="4"
           
          >
           <p class="mb-0 px-1 py-2"><strong>  &nbsp;{{Omjer.solution_omjer}} </strong></p>
           </b-form-group>
           <b-form-group
            id="fieldset-horizontal"
            label="Vaš status:"
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
          >
          <p class="mb-0 px-1 py-2">  <strong>  &nbsp;{{Omjer.status_omjer}}</strong> </p>
          
          </b-form-group>
            <button  @click.prevent="obrisi_omjer(Omjer.id)"  class="btn btn-danger">Obriši</button>
            <p class="mt-3 mb-1" style="color:red;">{{obrisano3}}</p>
            
            
         </b-form>
         
      </b-card>

      
   
    </div>  
    <br><br><br> 
    
</div>
</template>
<script>
import {db} from '@/views/firebase';
import store from "@/store";
import { firebase } from "@/views/firebase";




export default {

 
data(){
  return{
    Masti: {},
    Indeks: {},
    Omjer: {},
    obrisano1: '',
    obrisano2: '',
    obrisano3: '',

  }
},


  mounted(){
    this.getTvojeStanje();
    this.getTvojeStanje_Indeks();
    this.getTvojeStanje_Omjer();
    
  },



  methods: {

    


    //--------------------------BRISANJE MASTI----------------------------------------------//

       obrisi_masti(){

         if(this.Masti.id==null){
            this.obrisano1 = "Nista nije spremljeno"
         }

         else{

    db.collection("korisnici").doc(store.currentUser).collection("tvojeStanje").doc(store.currentUser).delete().then(function() {
    console.log("Document successfully deleted!");
})
    .catch(function(error) {
    console.error("Error removing document: ", error);
});

         }
      },



      //--------------------------BRISANJE INDEKS----------------------------------------------//

      obrisi_indeks(id){
        if(this.Indeks.id==null){
            this.obrisano2 = "Nista nije spremljeno"
         }
         else{
     db.collection("korisnici").doc(store.currentUser).collection("tvojeStanje_Indeks").doc(store.currentUser).delete().then(function() {
    console.log("Document successfully deleted!");
})
    .catch(function(error) {
    console.error("Error removing document: ", error);
});
         }
      },



      //---------------------------BRISANJE OMJER---------------------------------------------//

      obrisi_omjer(id){
        if(this.Omjer.id==null){
            this.obrisano3 = "Nista nije spremljeno"
         }
         else{
      db.collection("korisnici").doc(store.currentUser).collection("tvojeStanje_Omjer").doc(store.currentUser).delete().then(function() {
    console.log("Document successfully deleted!");
})
    .catch(function(error) {
    console.error("Error removing document: ", error);
});
         }
      },



//------------------------------------------------------------------------//

    
    getTvojeStanje(){
      db.collection("korisnici").doc(store.currentUser).collection("tvojeStanje").doc(store.currentUser)
      
        
        .get()
        .then(doc => {
        if (doc.exists) {
           console.log("Document data:", doc.data());
           this.Masti = {}
            this.Masti = doc.data()
            this.Masti.id = doc.id



        } else{
          console.log("No such document!");
        }
      
    
        })
    },

    //------------------------------------------------------------------------//

    getTvojeStanje_Indeks(){
    
    db.collection("korisnici").doc(store.currentUser).collection("tvojeStanje_Indeks").doc(store.currentUser).get()
      .then(doc => {
        if (doc.exists) {
           console.log("Document data:", doc.data());
           this.Indeks = {}
            this.Indeks = doc.data()
            this.Indeks.id = doc.id



        } else{
          console.log("No such document!");
        }
      })
      
    },

//------------------------------------------------------------------------//

       getTvojeStanje_Omjer(){
         
      db.collection("korisnici").doc(store.currentUser).collection("tvojeStanje_Omjer").doc(store.currentUser).get()
      .then(doc => {
        if (doc.exists) {
           console.log("Document data:", doc.data());
           this.Omjer = {}
            this.Omjer = doc.data()
            this.Omjer.id = doc.id



        } else{
          console.log("No such document!");
        }
      })
       }
    },
         
}
</script>

<style scoped>
.stanje {
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 25px;

}
.card-header {
 
  font-size: 30px;
  font-weight: 500;
}
</style>