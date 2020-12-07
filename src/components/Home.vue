<template>
  <div class="sticky-top">
    <div class="budi_fit">
      <b-jumbotron class="fitnes">
        <img
          src="@/assets/befit.png"
          class="slika mx-auto d-block img-fluid unlock-icon"
          alt="fitnes"
        />
        <b-card-group deck class="mx-auto mr-4">
          <b-card class="text-center " style="max-width:550px;" align="center">
            <b-card-text
              ><router-link
                to="Skola_prehrane"
                style="font-size:25px;color:black;"
                >Škola prehrane</router-link
              ></b-card-text
            >
          </b-card>

          <b-card class="text-center " style="max-width:550px;">
            <b-card-text style="font-size:25px">Prehrambeni status</b-card-text>
          </b-card>

          <b-card class="text-center" style="max-width:550px; ">
            <b-card-text style="font-size:25px">Calorie counter</b-card-text>
          </b-card>
        </b-card-group>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.card-text {
  font-family: "Segoe UI";
  color: black;
  font-style: italic;
  font-weight: bold;
}

.card-deck .card {
  background-color: #6b5151;
  margin-top: 70px;
}

.container {
  height: 100px;
  margin-top: -96px;
}

.budi_fit {
  margin: 0% 5.38% 0% 5.38%;
}

.fitnes {
  background-color: #00789e;
  margin: 2% 1.8% 0% 1.8%;
  height: 600px;
}
</style>
