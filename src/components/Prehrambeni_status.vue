<template>
  <div style="background-color:#CEFFD1" class="mx-3 mt-3">
    <div
      class="bg-secondary text-light mx-5 rounded-lg "
      id="poc_tekst"
      style="background-color:#CEFFD1"
    >
      <p
        class="lead p-3 mt-1 text-center"
        id="tekst"
        style="font-family: Segoe UI; font-size:30px; background-color:#CEFFD1;"
      >
        Svatko bi periodično trebao procijeniti svoj prehrambeni status.<br />
        Kao što liječnik obavlja sistematski pregled, <br />nutricionist vrši
        nutritivnu evaluaciju
      </p>
    </div>

    <div
      class="bg-secondary text-light mx-5  "
      style="display: flex; justify-content: center; background-color:#CEFFD1;"
      id="navigacije"
    >
      <b-card-group deck class="mx-auto ">
        <b-card
          v-scroll-to="'#masti'"
          class="text-center"
          type="button"
          style="width:350px; background-color: #c4c4c4; border-radius: 25px;   "
          align="center"
        >
          <b-card-text  
            style="font-size:25px;color:black;text-decoration: none;">
            Udio masti u tijelu</b-card-text>
        </b-card>

        <b-card
        v-scroll-to="'#indeks'"
          type="button"
          class="text-center "
          style=" background-color: #c4c4c4; border-radius: 25px;   "
        >
          <b-card-text  
            style="font-size:25px;color:black;text-decoration: none;">Indeks tjelesne mase</b-card-text>
        </b-card>

        <b-card
        v-scroll-to="'#omjer'"
          type="button"
          class="text-center "
          style=" background-color: #c4c4c4; border-radius: 25px; "
        >
          <b-card-text 
            style="font-size:25px;color:black;text-decoration: none;">Omjer struka i bokova
          </b-card-text>
        </b-card>
      </b-card-group>
    </div>

    <b-jumbotron class="mb-0 p-0 text-center mx-auto mt-5" style="background-color:#CEFFD1">
      <img src="@/assets/mali.jpg" width="50%" height="auto"  />
    </b-jumbotron>
    <br /><br /><br />
    <div id="masti"></div>

    <div class="status mt-5 mx-auto" style=" max-width:450px;">
      <b-card
        header="Udio masti u tijelu"
        class="text-center"
        style="background-color:#F8F8F8;"
      >
        <b-form @submit="onSubmit" class="text-left">
          <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="form.spol"
              :options="spol"
              required
            >
            </b-form-select>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite dob"
            label-for="input-2"
          >
            <b-form-input
              v-model="form.dob"
              placeholder="Unesite dob"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite tjelesnu visinu (cm)"
            label-for="input-2"
          >
            <b-form-input
              v-model.number="form.tjelesna_visina"
              type="number"
              placeholder="Unesite tjelesnu visinu (cm)"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite opseg struka"
            label-for="input-2"
          >
            <b-form-input
              v-model.number="form.opseg_struka"
              placeholder="Unesite opseg struka (cm)"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite opseg vrata"
            label-for="input-2"
          >
            <b-form-input
              v-model.number="form.opseg_vrata"
              placeholder="Unesite opseg vrata (cm)"
              type="number"
              required
            ></b-form-input>
          </b-form-group>

         
          <b-button
            type="sumbit"
            variant="success"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            >Izračunaj</b-button>
             
            
            <b-form  style="display:inline-block" @submit.prevent="tvojeStanje">
            <b-button
            class="ml-1"
            type="sumbit"
            variant="danger"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            >Spremi</b-button>
            </b-form>

          
          <p v-if="solution">
            Udio masti iznosi: <strong>{{ solution.toFixed(2) }}</strong> %
          </p>
          <p v-if="status_masti" >
            Status: <strong>{{ status_masti }}</strong>
          </p>
          <p style="color: red;">{{feedback}}</p>
          </b-form>
      </b-card>
    </div>

    <back-to-top bottom="50px" right="50px">
      <button type="button" class=" btn-to-top  ">
        <i class="fa fa-chevron-up text-center"></i>
      </button>
    </back-to-top>

    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <div id="indeks" class=""></div>
    <Indeks />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <br /><br />
    <div id="omjer"></div>
    <Omjer />
  </div>
</template>

<script>
import Indeks from "./Pre_status_comp/Indeks.vue";
import Omjer from "./Pre_status_comp/Omjer.vue";
import {db} from '@/views/firebase';
import store from "@/store";
import { firebase } from "@/views/firebase";




export default {
  name: "Prehrambeni_status",
  components: { Indeks, Omjer },
  
  data() {
    return {
      solution: 0,
      status_masti: "",
      email: "",
      feedback:"",
      user: {},
      form: {
        spol: null,
        dob: "",
        tjelesna_visina: "",
        opseg_struka: "",
        opseg_vrata: "",
      },

      spol: [{ text: "Odaberi spol", value: null }, "Muško", "Žensko"],
      show: false,
    };
  },
  
    
  
  
  methods: {



    tvojeStanje(){

      if(this.solution == 0 || this.status_masti === ""){
            this.feedback = "Niste unijeli podatke"
         }
      else{


      this.feedback = null
      db.collection("korisnici").doc(store.currentUser).collection("tvojeStanje").doc(store.currentUser )
      
      .set({

        solution: this.solution,
        status_masti: this.status_masti,
    
      })

      .then(ref => {
        
        console.log("Document written with ID: ", store.currentUser );
      })

      .then((doc) => {
        console.log("spremljeno")
      })
      .catch((e) => {
        console.error(e)
      })
      this.feedback="Uspjesno spremljeno";
      }
    },


//----------------------------------------------------------------------------------------//
  
    onSubmit(evt) {
      evt.preventDefault();
      JSON.stringify(this.form);

      var solution = null;
      
      if (this.form.spol === "Muško") {
        this.solution =
          495 /
            (1.0324 -
              0.19077 *
                Math.log10(this.form.opseg_struka - this.form.opseg_vrata) +
              0.15456 * Math.log10(this.form.tjelesna_visina)) -
          450;

        if (this.solution < 2) {
          return (this.status_masti = "Krivo uneseni podaci");
        } else if (this.solution > 2 && this.solution < 5) {
          return (this.status_masti =
            "”Esencijalna mast“ - minimalna količina masti potrebna za preživljavanje – sve manje od toga može dovesti do težih posljedica po zdravlje. Baš iz tog razloga bodybuilderi takvu nisku razinu masti imaju samo pred natjecanje, a ostatak vremena je održavaju više kako bi mogli normalno funkcionirati.");
        } else if (
          (this.solution > 6 && this.solution < 13) ||
          (this.solution > 14 && this.solution < 17)
        ) {
          return (this.status_masti =
            "Udio masnog tkiva u Vašem tijelu, osim što se ne odražava negativno na zdravlje, omogućuje Vam i prihvatljiv izgled.");
        } else if (this.solution > 18 && this.solution < 24) {
          return (this.status_masti = "U prosječnom rasponu");
        } else if (this.solution > 25 && this.solution < 80) {
          return (this.status_masti =
            "Udio masnog tkiva u Vašem tijelu viši je od preporučenog.Povišen udio masnog tkiva uzrok je upalnih procesa koji rezultiraju mnogim zdravstvenim problemima, poput dijabetesa tipa II, kardiovaskularnih bolesti, nekih vrsta karcinoma te drugih oboljenja.");
        }
      }

      if (this.form.spol === "Žensko") {
        this.solution =
          495 /
            (1.29579 -
              0.35004 *
                Math.log10(
                  this.form.opseg_struka + 95 - this.form.opseg_vrata
                ) +
              0.221 * Math.log10(this.form.tjelesna_visina)) -
          450;

        if (this.solution < 10 && this.solution > 80) {
          return (this.status_masti = "Krivo uneseni podaci");
        } else if (this.solution > 10 && this.solution < 13) {
          return (this.status_masti =
            "”Esencijalna mast“ - minimalna količina masti potrebna za preživljavanje – sve manje od toga može dovesti do težih posljedica po zdravlje. Baš iz tog razloga bodybuilderi takvu nisku razinu masti imaju samo pred natjecanje, a ostatak vremena je održavaju više kako bi mogli normalno funkcionirati.");
        } else if (
          (this.solution > 14 && this.solution < 20) ||
          (this.solution > 21 && this.solution < 24)
        ) {
          return (this.status_masti =
            "Udio masnog tkiva u Vašem tijelu, osim što se ne odražava negativno na zdravlje, omogućuje Vam i prihvatljiv izgled.");
        } else if (this.solution > 25 && this.solution < 31) {
          return (this.status_masti = "U prosječnom rasponu");
        } else if (this.solution > 31 && this.solution < 80) {
          return (this.status_masti =
            "Udio masnog tkiva u Vašem tijelu viši je od preporučenog.Povišen udio masnog tkiva uzrok je upalnih procesa koji rezultiraju mnogim zdravstvenim problemima, poput dijabetesa tipa II, kardiovaskularnih bolesti, nekih vrsta karcinoma te drugih oboljenja.");
        }
      }
    
    },

    
  },
};

</script>

<style scoped>
html,
body {
  background-color: #ceffd1;
}

.card-header {
  background-color: #e6e6e6;
  font-size: 30px;
  font-weight: 500;
}
.btn:focus {
  outline: 0 !important;
  border: none;
  box-shadow: none;
}

.vue-back-to-top {
  margin-bottom: 83px;
}

.btn-to-top {
  color: black;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 35px;
  line-height: 22px;
  background-color: #f9f8f8;
  border-color: #b7d8ff !important;
  outline: 0;
}

.btn-info:hover {
  text-decoration: none;
  background-color: #c4c4c4;
  color: black;
}

.bg-secondary {
  background-color: #ceffd1 !important;
}
#tekst {
  margin-top: 30px;
  font-family: "Segoe UI";
  color: black;
}

.status {
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 25px;
}
</style>
