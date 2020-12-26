<template>
  <div class="bg-secondary text-light p-5 mx-5 mt-5 rounded-lg">
    <img
      src="@/assets/befit.png"
      class="slika mx-auto d-block img-fluid unlock-icon"
      alt="fitnes"
    />

    <b-card-group
      deck
      class="mx-auto mr-4 mt-4"
      style="display: flex;justify-content: center;"
    >
      <b-card class="text-center " style="max-width:550px;" align="center">
        <b-card-text
          ><router-link
            to="Skola_prehrane"
            style="font-size:25px;color:black;text-decoration: none;"
            >Škola prehrane</router-link
          ></b-card-text
        >
      </b-card>

      <b-card class="text-center " style="max-width:550px;">
        <b-card-text style="font-size:25px"
          ><router-link
            to="Prehrambeni_status"
            style="font-size:25px;color:black;text-decoration: none;"
            >Prehrambeni status</router-link
          ></b-card-text
        >
      </b-card>

      <b-card class="text-center" style="max-width:550px; ">
        <b-card-text style="font-size:25px"
          ><router-link
            to="Calorie"
            style="font-size:25px;color:black;text-decoration: none;"
            >Calorie counter</router-link
          ></b-card-text
        >
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card-text {
  font-family: "Segoe UI";
  color: black;
  font-style: italic;
  font-weight: bold;
}

.card-deck .card {
  background-color: #6b5151;
  margin-top: 75px;
}

.bg-secondary {
  background-color: #00789e !important;
}
</style>