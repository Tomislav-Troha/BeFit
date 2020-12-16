<template>
  <div>
   
    


    <div class="status  mx-auto" id="masti demo" style=" max-width:450px;">
      <b-card
        header="Indeks tjelesne mase"
        class="text-center"
        style="background-color:#F8F8F8;"
      >
        <b-form @submit="onSubmit"  class="text-left">
          <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="form.indeks_spol"
              :options="indeks_spol"
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
             v-model="form.indeks_dob"
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
               v-model="form.indeks_tjelesna_visina"
              type="number"
              placeholder="Unesite tjelesnu visinu (cm)"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite tjelesnu masu"
            label-for="input-2"
          >
            <b-form-input
               v-model="form.indeks_tjelesna_masa"
              placeholder="Unesite vašu težinu (kg)"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
          

 
          <b-button type="sumbit" variant="success" data-toggle="modal" data-target="#exampleModalCenter">Izračunaj</b-button>
         <p>Indeks tjelesna mase iznosi: <strong>{{solution_indeks.toFixed(2) }}</strong></p>
         <p>Status: <strong>{{status_tjelesne_mase}}</strong></p>
        </b-form>
      </b-card>
    </div>

  </div>

  

</template>

<script>
export default {
    name:'Indeks',
  
    data() {
    
    return {
      solution_indeks: 0,
      status_tjelesne_mase: "",
      form: {
        indeks_spol: null,
        indeks_dob: "",
        indeks_tjelesna_visina: "",
        indeks_tjelesna_masa: ""
      },

      indeks_spol: [{ text: "Odaberi spol", value: null }, "Muško", "Žensko"],
      show: false,
    };
  
  },
  
methods: {
onSubmit(evt) {
      
      evt.preventDefault();
      JSON.stringify(this.form)
      
       var solution_indeks=null

       

        if(this.form.indeks_spol==="Muško" || this.form.indeks_spol==="Žensko"){
        this.solution_indeks = this.form.indeks_tjelesna_masa /  ((this.form.indeks_tjelesna_visina/100) * (this.form.indeks_tjelesna_visina/100))
            
        if(this.solution_indeks < 2 || this.solution_indeks > 70 ){
          return this.status_tjelesne_mase="Krivo uneseni podaci"
        }    

        else if(this.solution_indeks < 18.5){
          return this.status_tjelesne_mase='Pothranjenost'
        }

        else if(this.solution_indeks > 18.5 && this.solution_indeks < 24.99 ){
          return this.status_tjelesne_mase = 'Normalna tjelesna težina'
        }

        else if(this.solution_indeks > 25 && this.solution_indeks < 29.99 ){
          return this.status_tjelesne_mase = "Povišena tjelesna težina"
        }

        else if(this.solution_indeks > 30 && this.solution_indeks < 34.99 ){
          return this.status_tjelesne_mase = "Debljina 1. razreda (gojaznost)"
        }

        else if(this.solution_indeks > 35 && this.solution_indeks < 39.99 ){
          return this.status_tjelesne_mase = "Debljina 2. razreda (gojaznost)"
        }

        else if(this.solution_indeks > 40 && this.solution_indeks < 70 ){
          return this.status_tjelesne_mase = "Debljina 3. razreda (teška gojaznost)"
        }
        
       
            
        

       
      }
}
}
  

}


</script>

<style scoped>
.card-header {
  background-color: #e6e6e6;
  font-size: 30px;
  font-weight: 500;
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