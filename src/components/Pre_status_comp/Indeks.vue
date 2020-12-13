<template>
  <div>
   
    


    <div  class="status mt-5 mx-auto" id="masti demo" style=" max-width:450px;">
      <b-card
        header="Udio masti u tijelu"
        class="text-center"
        style="background-color:#F8F8F8;"
      >
        <b-form  class="text-left">
          <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
            <b-form-select
              id="input-1"
              
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
            
              placeholder="Unesite dob"
              type="number"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite tjelesnu visinu (cm)"
            label-for="input-2"
          >
            <b-form-input
              
              type="number"
              placeholder="Unesite tjelesnu visinu (cm)"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite opseg struka"
            label-for="input-2"
          >
            <b-form-input
              
              placeholder="Unesite opseg struka (cm)"
              type="number"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite opseg vrata"
            label-for="input-2"
          >
            <b-form-input
          
              placeholder="Unesite opseg vrata (cm)"
              type="number"
            ></b-form-input>
          </b-form-group>

 
          <b-button type="sumbit" variant="success" data-toggle="modal" data-target="#exampleModalCenter">Izračunaj</b-button>
         <p>Udio masti iznosi: <strong>{{ }}</strong> % </p>
         <p>Status: <strong>{{}}</strong></p>
        </b-form>
      </b-card>
    </div>

    

 
   

    
    
  
   
  </div>

  

</template>

<script>
export default {
    name:'Indeks',
}
</script>