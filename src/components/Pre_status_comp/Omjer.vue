<template>
     <div>
   
    


    <div  class="status mt-5 mx-auto" id="masti demo" style=" max-width:450px;">
      <b-card
        header="Omjer struka i bokova"
        class="text-center"
        style="background-color:#F8F8F8;"
      >
        <b-form @submit="onSubmit"  class="text-left">
          <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="form.omjer_spol"
              :options="omjer_spol"
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
             v-model="form.omjer_dob"
              placeholder="Dob"
              type="number"
              required
            ></b-form-input>
          </b-form-group>



          <b-form-group
            id="input-group-2"
            label="Unesite opseg struka (cm)"
            label-for="input-2"
          >
            <b-form-input
               v-model="form.omjer_struka"
              type="number"
              placeholder="Opseg struka (cm)"
              required
            ></b-form-input>
          </b-form-group>



          <b-form-group
            id="input-group-2"
            label="Unesite opseg bokova (cm)"
            label-for="input-2"
          >
            <b-form-input
               v-model="form.omjer_bok"
              placeholder="Opseg bokova (cm)"
              type="number"
              required
            ></b-form-input>
          </b-form-group>
          

 
          <b-button type="sumbit" variant="success" data-toggle="modal" data-target="#exampleModalCenter">Izračunaj</b-button>
         <p>Omjer struka i bokova iznosi: <strong>{{solution_omjer.toFixed(2) }}</strong></p>
         <p>Status: <strong>{{status_omjer}}</strong></p>
        </b-form>
      </b-card>
    </div>

<br><br><br><br><br><br>
  </div>

</template>


<script>
export default {
    name:'Omjer',
  
    data() {
    
    return {
      solution_omjer: 0,
      status_omjer: "",
      form: {
        omjer_spol: null,
        omjer_dob: "",
        omjer_struka: "",
        omjer_bok: ""
      },

      omjer_spol: [{ text: "Odaberi spol", value: null }, "Muško", "Žensko"],
      show: false,
    };
  
  },
  
methods: {
onSubmit(evt) {
      
      evt.preventDefault();
      JSON.stringify(this.form)
      
       var solution_omjer=null

       

        if(this.form.omjer_spol==="Muško"){
      this.solution_omjer=this.form.omjer_struka/this.form.omjer_bok
            
        if(this.solution_omjer < 0 || this.solution_omjer > 5){
          return this.status_omjer="Krivo uneseni podaci"
        }    

        else if(this.solution_omjer <= 0.95){
          return this.status_omjer='Muškarci s 0,95 ili niže imaju oblik kruške. Osobe s tijelima u obliku kruške spadaju u kategoriju nižeg rizika za zdravstvene probleme poput srčanih bolesti, dijabetesa tipa 2 i nekih oblika raka.'
        }

        else if(this.solution_omjer > 0.96 && this.solution_omjer < 1 ){
          return this.status_omjer= 'Spadaju u kategoriju srednjeg rizika za zdravstvene probleme'
        }

        else if(this.solution_omjer > 1 && this.solution_omjer < 3 ){
          return this.status_omjer = "Muškarci s omjerom 1,0 ili više smatraju se tijelima u obliku jabuke. Masnoća se skuplja oko sredine, a tijela u obliku jabuke suočavaju se s velikim rizikom od dijabetesa tipa 2 i bolesti srca, pa čak i nekih vrsta karcinoma."
        }

   
       
      }
      
      

      if(this.form.omjer_spol==="Žensko"){
      this.solution_omjer=this.form.omjer_struka/this.form.omjer_bok
            
        if(this.solution_omjer < 0 || this.solution_omjer > 5){
          return this.status_omjer="Krivo uneseni podaci"
        }    

        else if(this.solution_omjer <= 0.80){
          return this.status_omjer='žene s 0,80 ili niže imaju oblik kruške. Osobe s tijelima u obliku kruške spadaju u kategoriju nižeg rizika za zdravstvene probleme poput srčanih bolesti, dijabetesa tipa 2 i nekih oblika raka.'
        }

        else if(this.solution_omjer > 0.81 && this.solution_omjer < 0.84 ){
          return this.status_omjer= 'Spadaju u kategoriju srednjeg rizika za zdravstvene probleme'
        }

        else if(this.solution_omjer > 0.85 && this.solution_omjer < 3 ){
          return this.status_omjer = "Žene s omjerom 0.85 ili više smatraju se tijelima u obliku jabuke. Masnoća se skuplja oko sredine, a tijela u obliku jabuke suočavaju se s velikim rizikom od dijabetesa tipa 2 i bolesti srca, pa čak i nekih vrsta karcinoma."
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