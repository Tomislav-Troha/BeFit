<template>
  <div class="container">
    <div class="jumbotron p-4 p-md-5  rounded ">
      <img
        src="@/assets/fitnes.jpg"
        id="slika"
        width="1110"
        height="300"
        alt="fitnes"
      />
    </div>

    <div id="jumbo" class="jumbotron p-4 p-md-5  rounded ">
      <div class="row mb-2">
        <div class="col">
          <div class="card" style="width:18rem;background-color:#6B5151; ">
            <router-link
              to="Home"
              tag="onclick"
              type=" submit"
              class="skola"
              style="margin-top:20px;"
              >Škola prehrane</router-link
            >
          </div>
        </div>
        <div class="col">
          <div class="card" style="width:18rem; background-color:#6B5151; ">
            <router-link
              to="Home"
              tag="onclick"
              type=" submit"
              class="prehrana"
              style="margin-top:20px;"
              >Prehrambeni status</router-link
            >
          </div>
        </div>
        <div class="col">
          <div class="card" style="width:18rem; background-color:#6B5151; ">
            <router-link
              to="Home"
              tag="onclick"
              type="submit"
              class="calorie"
              style="margin-top:20px;"
              >Calorie counter</router-link
            >
          </div>
        </div>
        <div class="top-right">
          <router-link :to="{ name: 'Login' }"> <p>Odjava</p></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
document.getElementById("");
</script>

<style>
.top-right {
  position: absolute;
  top: 6px;
  right: 190px;
  color: #0791fb;
}
#slika {
  margin-top: -48px;
  margin-left: -48px;
}
.card {
  margin-top: -35%;
  height: 120px;
  vertical-align: center;
}
#jumbo {
  margin: 0%;
  background-color: #00789e;
  font-family: "Tw Cen MT";
  font-weight: bold;
  white-space: nowrap;
  text-align: center;
  font-style: normal;
  font-weight: lighter;
  font-size: 25px;
  color: rgba(0, 0, 0, 1);
}
.jumbotron {
  margin-bottom: 0%;
  margin-top: 30px;
  height: 300px;
  box-sizing: border-box;
  max-width: 1140px;
  background-color: white;
}
</style>
