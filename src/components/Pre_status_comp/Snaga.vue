<template>
   <div>
    
    <div class="calorie mt-5 mx-5">
      <b-card
        header="Cilj: Veličina i snaga:"
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
            
          >
           <strong>{{solution7.toFixed(0)}}&nbsp;kCal </strong></b-form-group>
          <b-form-group
            id="fieldset-horizontal"
            label="PROTEINA ="
            label-for="input-horizontal"
            label-cols-sm="2"
            label-cols-lg="2"
            content-cols-sm
            content-cols-lg="2"
          >
          <p>  <strong>{{ solution8.toFixed(0) }}&nbsp;g</strong> </p>
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
            <strong>{{ solution9.toFixed(0) }}&nbsp;g</strong>
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
            <strong>{{solution10.toFixed(0)}} &nbsp;g</strong>
          </b-form-group>
        </b-form>
      </b-card>
    </div>
  </div> 
</template>
<script>

export default {

  name:'Snaga', 
  props: ['solution7','solution8','solution9','solution10'],

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
</style>