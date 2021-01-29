<template>

 <div style="background-color:#CEFFD1" class="mx-3 mt-3 rounded-lg"><br>
 <div class="stanje  mx-5" >

<b-card style="max-width: 400px; border-radius: 20px; background-color: #e6e6e6;" class="text-center mx-auto mb-5"> 

  <croppa v-if="!Slike.url" :width="200" :height="200" canvas-color="#c4c4c4" placeholder="Učitaj sliku" style="font-size:20px;" v-model="slika"></croppa>

  <img v-if="Slike.url"  style="width:184px; height:184px;" v-bind:src="Slike.url" />
 
 
<form  title="Uredi profil" type="button" @click="urediSliku()">
  
   <icon class="addMore" v-if="Slike.url" name="profile"/>
  
</form>
 

  <div>
   <button v-if="!Slike.url" @click="ucitajSliku();"  class="primary">Učitaj</button>
   <p style="color:red;">{{feed}}</p>
  </div>
 

   <p style="font-size:30px; text-transform: uppercase;">{{Korisnik.ime}}</p>
   <p style="font-size:30px; text-transform: uppercase;">{{Korisnik.prezime}}</p>
   <p style="font-size:30px;">{{Korisnik.datum | formatDate}}</p>

   

</b-card>



   <b-card v-b-toggle.collapse-1 type="button"  class = "mx-auto text-center  header "
    style="border-radius: 100px; background-color:#F8F8F8; max-width:400px; height:85px; color:black;" ><b-card-text style="justify-content: center;">Udio masti u tijelu</b-card-text>
    </b-card>


      <b-collapse id="collapse-1" class="mt-2">
      <b-card class="mx-auto" style="background-color:#F8F8F8; max-width:900px; ">

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
          
          <button @click="obrisi_masti(Masti.id); " class="btn btn-danger">Obriši</button>
          <p class="mt-3 mb-1" style="color:red;">{{obrisano1}}</p>
          
         </b-form>
          
      </b-card>

        </b-collapse>


<b-card v-b-toggle.collapse-2 type="button"  class = "mt-5 mx-auto text-center header" style="border-radius: 100px; background-color:#F8F8F8; max-width:400px; height:85px; color:black;"><b-card-text style="justify-content: center;">Indeks tjelesne mase</b-card-text></b-card>
      <b-collapse id="collapse-2" class="mt-2">
      <b-card class="mx-auto" style="background-color:#F8F8F8; max-width:900px; "
        
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
            <button  @click="obrisi_indeks(Indeks.id)"  class="btn btn-danger">Obriši</button>
            <p class="mt-3 mb-1" style="color:red;">{{obrisano2}}</p>
         </b-form>
      </b-card>
      </b-collapse>


<b-card v-b-toggle.collapse-3 type="button"  class = "mt-5 mx-auto text-center  header" 
style="border-radius: 100px; background-color:#F8F8F8; max-width:400px; height:85px; color:black;">
<b-card-text style="justify-content: center;">Omjer struka i bokova</b-card-text>
</b-card>

 <b-collapse id="collapse-3" class="mt-2">

      <b-card class="mx-auto" style="background-color:#F8F8F8; max-width:900px; "
     
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
            <button  @click="obrisi_omjer(Omjer.id)"  class="btn btn-danger">Obriši</button>
            <p class="mt-3 mb-1" style="color:red;">{{obrisano3}}</p>
            
            
         </b-form>
         
      </b-card>
      </b-collapse>
 
   
    </div>  
    <br><br><br> 
    
</div>
</template>
<script>
import {db} from '@/views/firebase';
import store from "@/store";
import { firebase } from "@/views/firebase";
import {storage} from "@/views/firebase";




export default {

 
data(){
  return{
    Korisnik: {},
    Masti: {},
    Indeks: {},
    Omjer: {},
    Slike:{},
    obrisano1: '',
    obrisano2: '',
    obrisano3: '',
    slika: null,
    url: "",
    feed: "",

  }
},


  mounted(){
    this.getTvojeStanje();
    this.getTvojeStanje_Indeks();
    this.getTvojeStanje_Omjer();
    this.getUser()
    this.getSlika()
    
  },



  methods: {

    urediSliku(){
      

    db.collection("korisnici")
    .doc(store.currentUser).collection("slikeProfila").doc(store.currentUser).delete().then(function() {
    console.log("Document successfully deleted!");
    location.reload()
})
    .catch(function(error) {
    console.error("Error removing document: ", error);

    
         
    })

    },





    getSlika(){

      
  
    db.collection("korisnici")
    .doc(store.currentUser).collection("slikeProfila").doc(store.currentUser)
    .get()
    .then(doc => {
    if (doc.exists) {
    console.log("Document data:", doc.data());
    this.Slike={}
    this.Slike=doc.data()
    
    

    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
    });
},
    

    ucitajSliku(){

       

    
        this.slika.generateBlob((BlobData) => {
          console.log(BlobData)
           if(BlobData==null){
            this.feed="Niste učitali sliku"

        }else{

          this.feed="Uspješno učitano, molimo pričekajte"

        let imeSlike = 'slike/' + store.currentUser + '/' + Date.now() + '.png';

        storage 
          .ref(imeSlike)
          .put(BlobData)
          .then((result) => {
            console.log(result)
            result.ref.getDownloadURL().then((url) => {
              console.log("Link", url)

              db.collection("korisnici")
            .doc(store.currentUser).collection("slikeProfila").doc(store.currentUser)
     
            .set({
              url: url
               

            })
            setTimeout(function () { location.reload(true); }, 2000);
          })
          
      })
      
        }
    })
        
    },
    


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


//------------------------GET podaci korisnika------------------------------------------------//

getUser(){
  
    db.collection("korisnici")
    .doc(store.currentUser)
    .get()
    .then(doc => {
    if (doc.exists) {
    console.log("Document data:", doc.data());
    this.Korisnik={}
    this.Korisnik=doc.data()
    
    

    } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    }
    });
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

.header{
  font-size: 30px;
  outline: 0 !important;
  
  
}

.header:hover {
  
  outline: 0 !important;
  background-color: black;
  font-size: 30px;
  font-weight: 500;
}

.profile{
 position: absolute;
        z-index: 999;
        margin: 0 auto;
        left: 220px;
        right:0;
        top: 39%; /* Adjust this value to move the positioned div up and down */
        text-align: center;
        width: 30px;

  }

  .addMore{
 
  border: none;
  width: 32px;
  height: 32px;
  background-color: #eee;
  transition: all ease-in-out 0.2s;
  cursor: pointer;
}
.addMore:hover{
  
  border: 1px solid rgba(196, 196, 196, 1);
  background-color: rgba(196, 196, 196, 1);;
}

</style>