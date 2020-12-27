<template>
 <div style="background-color:#CEFFD1" class="mx-3 mt-3"><br>
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
           <p class="mb-0 px-1 py-2"><strong > &nbsp; </strong></p>
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
          <p class="mb-0 px-1 py-2">  <strong> &nbsp;</strong> </p>
          </b-form-group>
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
           <p class="mb-0 px-1 py-2"><strong>  &nbsp; </strong></p>
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
          <p class="mb-0 px-1 py-2">  <strong> &nbsp;</strong> </p>
          </b-form-group>
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
           <p class="mb-0 px-1 py-2"><strong>  &nbsp; </strong></p>
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
          <p class="mb-0 px-1 py-2">  <strong>  &nbsp;</strong> </p>
          </b-form-group>
         </b-form>
      </b-card>
  
    </div>  
    <br><br><br> 
</div>
</template>
<script>


export default {
         
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