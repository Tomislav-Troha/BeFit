<template>
  <div style="background-color:#ceffd1" class="mx-3">
    <br>
    <div
      class="status mt-5 mx-5 p-4"
      style="background-color: #f8f8f8; !important; max-width:450px;"
      id="masti"
    >
      <h2>Unesi podatke:</h2>
      <b-form @submit="onSubmit" class="text-left">
        <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
          <b-form-select
            
            id="input-1"
            v-model="form.calorie_spol"
            :options="calorie_spol"
            required
          >
          </b-form-select>
        </b-form-group>
        <b-form-group id="input-group-1" label="Aktivnost:" label-for="input-1">
          <b-form-select
            
            id="input-1"
            v-model="form.calorie_aktivnost"
            :options="calorie_aktivnost"
            required
          >
          </b-form-select>
        </b-form-group>
        <b-form-group
          
          id="input-group-2"
          label="Unesite težinu (kg):"
          label-for="input-2"
        >
          <b-form-input
            v-model="form.calorie_tezina"
            type="number"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Unesite visinu (cm):" label-for="input-1">
          <b-form-input
           
            id="input-1"
            type="number"
            v-model="form.calorie_visina"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label=" Unesite dob:" label-for="input-1">
          <b-form-input
           
            id="input-1"
            type="number"
            v-model="form.calorie_dob"
            required
          >
          </b-form-input>
        </b-form-group>
        <b-button
          type="sumbit"
          variant="success"
          data-toggle="modal"
          data-target="#exampleModalCenter"
          >Izračunaj</b-button
        >

        <p class="text-danger text-center" v-if="feedback">{{ feedback }}</p>
        
      </b-form>
    </div>
    <div class="calorie mt-5 mx-5">
      <b-card
        header="Cilj: izgubiti masti, dnevni unos mora biti:"
        class="text-left"
        style="background-color:#F8F8F8;"
      >
        <b-form class="text-left">
          <b-form-group
            id="fieldset-horizontal"
            label="KALORIJA (dnevno) ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
            v-model="kalorija1"
          >
           <strong>{{ solution1.toFixed(0) }}&nbsp;kCal </strong></b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label="PROTEINA ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
          >
          <p>  <strong>{{ solution2.toFixed(0) }}&nbsp;g</strong> </p>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label="UGLJIKOHIDRATA ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
          >
            <strong>{{ solution2.toFixed(0) }}&nbsp;g</strong>
          </b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label="MASTI ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
          >
            <strong>{{ solution3.toFixed(0) }} &nbsp;g</strong>
          </b-form-group>
        </b-form>
      </b-card>
    </div>
    
  <misicnaMasa  :solution4="solution4" :solution5="solution5" :solution6="solution6" />

  <Snaga :solution7="solution7" :solution8="solution8" :solution9="solution9" :solution10="solution10" />
  </div>
  
  
</template>

<script>


import misicnaMasa from "./Pre_status_comp/misicnaMasa.vue";
import Snaga from "./Pre_status_comp/Snaga.vue";





export default {
  name: "Calorie",
  
  components: {misicnaMasa, Snaga},
  
  data() {
    return {
      feedback:" ",

      solution1: 0,
      solution2: 0,
      solution3: 0,

      solution4: 0,
      solution5: 0,
      solution6: 0,
      solution7: 0,

      solution8: 0,
      solution9: 0,
      solution10: 0,

    
      form: {
        calorie_aktivnost: null,
        calorie_spol: null,
        calorie_tezina:null,
        calorie_visina:null,
        calorie_dob:null,
        kalorija1: "",
        proteina1: "",
        ugljikohidrata1: "",
        masti1: "",
        
      },

      calorie_spol: [{ text: "Odaberi spol", value: null }, "Muško", "Žensko"],
      calorie_aktivnost: [
        { text: "Odaberi aktivnost", value: null },
        "Neaktivan",
        "Srednje aktivan",
        "Jako aktivan",
      ],
      show: false,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      JSON.stringify(this.form);

      var solution = null;

      //-----------------------Prva kartica--------------------------------

       if (this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Neaktivan") {
        this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)+5))*1.2
        this.solution2=(this.solution1*0.40)/7.7
        this.solution3=(this.solution1*0.20)/7.7
       }

      if (this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Neaktivan") {
        this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)+5))*1.2
        this.solution2=(this.solution1*0.40)/7.7
        this.solution3=(this.solution1*0.20)/7.7
      }
      else if(this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Srednje aktivan"){
        this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)+5))*1.55
        this.solution2=(this.solution1*0.40)/7.7
        this.solution3=(this.solution1*0.20)/7.7
      }
       else if(this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Jako aktivan"){
        this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)+5))*1.9
        this.solution2=(this.solution1*0.40)/7.7
        this.solution3=(this.solution1*0.20)/7.7
      }
     
 
       if (this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Neaktivan"){
         this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)-161))*1.2
         this.solution2=(this.solution1*0.40)/7.7
         this.solution3=(this.solution1*0.20)/7.7
       }
       else if(this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Srednje aktivan"){
        this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)-161))*1.55
        this.solution2=(this.solution1*0.40)/7.7
        this.solution3=(this.solution1*0.20)/7.7
      }
      else if(this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Jako aktivan"){
        this.solution1=(((this.form.calorie_tezina*10)+(this.form.calorie_visina*6.25)-(this.form.calorie_dob*5)-161))*1.9
        this.solution2=(this.solution1*0.40)/7.7
        this.solution3=(this.solution1*0.20)/7.7
      }



//----------------------Druga kartica-------------------------------


      if (this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Neaktivan") {
        this.solution4=(((this.form.calorie_tezina*11)+(this.form.calorie_visina*6.50)-(this.form.calorie_dob*5)+5))*1.33
        this.solution5=(this.solution4*0.40)/7.7
        this.solution6=(this.solution4*0.20)/7.7
      }
      else if(this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Srednje aktivan"){
        this.solution4=(((this.form.calorie_tezina*11)+(this.form.calorie_visina*6.50)-(this.form.calorie_dob*5)+5))*1.7
        this.solution5=(this.solution4*0.40)/7.7
        this.solution6=(this.solution4*0.20)/7.7
      }
       else if(this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Jako aktivan"){
        this.solution4=(((this.form.calorie_tezina*11)+(this.form.calorie_visina*6.50)-(this.form.calorie_dob*5)+5))*2
        this.solution5=(this.solution4*0.40)/7.7
        this.solution6=(this.solution4*0.20)/7.7
      }
  

       if (this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Neaktivan"){
         this.solution4=(((this.form.calorie_tezina*11)+(this.form.calorie_visina*6.50)-(this.form.calorie_dob*5)-161))*1.33
         this.solution5=(this.solution4*0.40)/7.7
         this.solution6=(this.solution4*0.20)/7.7
       }
       else if(this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Srednje aktivan"){
        this.solution4=(((this.form.calorie_tezina*11)+(this.form.calorie_visina*6.50)-(this.form.calorie_dob*5)-161))*1.7
        this.solution5=(this.solution4*0.40)/7.7
        this.solution6=(this.solution4*0.20)/7.7
      }
      else if(this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Jako aktivan"){
        this.solution4=(((this.form.calorie_tezina*11)+(this.form.calorie_visina*6.50)-(this.form.calorie_dob*5)-161))*2
        this.solution5=(this.solution4*0.40)/7.7
        this.solution6=(this.solution4*0.20)/7.7
      }



//-----------------------Treca kartica--------------------------------




 if (this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Neaktivan") {
        this.solution7=(((this.form.calorie_tezina*12)+(this.form.calorie_visina*6.75)-(this.form.calorie_dob*5)+5))*1.42
        this.solution8=(this.solution7*0.30)/7.7
        this.solution9=(this.solution7*0.50)/7.7
        this.solution10=(this.solution7*0.20)/7.7
      }

      else if(this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Srednje aktivan"){
        this.solution7=(((this.form.calorie_tezina*12)+(this.form.calorie_visina*6.75)-(this.form.calorie_dob*5)+5))*1.85
        this.solution8=(this.solution7*0.30)/7.7
        this.solution9=(this.solution7*0.50)/7.7
        this.solution10=(this.solution7*0.20)/7.7
      }

       else if(this.form.calorie_spol == "Muško" && this.form.calorie_aktivnost == "Jako aktivan"){
        this.solution7=(((this.form.calorie_tezina*12)+(this.form.calorie_visina*6.75)-(this.form.calorie_dob*5)+5))*2
        this.solution8=(this.solution7*0.30)/7.7
        this.solution9=(this.solution7*0.50)/7.7
        this.solution10=(this.solution7*0.20)/7.7
      }
  

       if (this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Neaktivan"){
         this.solution7=(((this.form.calorie_tezina*12)+(this.form.calorie_visina*6.75)-(this.form.calorie_dob*5)-161))*1.42
         this.solution8=(this.solution7*0.30)/7.7
        this.solution9=(this.solution7*0.50)/7.7
        this.solution10=(this.solution7*0.20)/7.7
       }

       else if(this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Srednje aktivan"){
        this.solution7=(((this.form.calorie_tezina*12)+(this.form.calorie_visina*6.75)-(this.form.calorie_dob*5)-161))*1.85
        this.solution8=(this.solution7*0.30)/7.7
        this.solution9=(this.solution7*0.50)/7.7
        this.solution10=(this.solution7*0.20)/7.7
      }

       else if(this.form.calorie_spol == "Žensko" && this.form.calorie_aktivnost == "Jako aktivan"){
        this.solution7=(((this.form.calorie_tezina*12)+(this.form.calorie_visina*6.75)-(this.form.calorie_dob*5)-161))*2
        this.solution8=(this.solution7*0.30)/7.7
        this.solution9=(this.solution7*0.50)/7.7
        this.solution10=(this.solution7*0.20)/7.7
      }



//-----------------------<<<<---------------------------------




       if (this.solution1 <= 0 && this.solution2 <= 0 && this.solution3 <= 0 && this.solution4 <= 0 && this.solution5 <= 0 && this.solution6 <= 0 && this.solution7 <= 0 && this.solution8 <= 0 && this.solution9 <= 0)
      {
        this.feedback="Molimo provjerite unos"
      }
      else this.feedback=false


      console.log(this.solution1)
      console.log(this.solution2)
      console.log(this.solution3)
      console.log(this.solution4)
    },
  },
  
};
</script>

<style scoped>
.card-header {
  background-color: #e6e6e6;
  font-size: 30px;
  font-weight: 500;
}

.calorie {
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 25px;
}

#masti{
   fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  border-radius: 5px;
}
</style>
