<template>
  <div class="container">
    <img src="@/assets/fitness.jpg" alt="Fitness" style="width:100%;" />
    <router-link to="Home" tag="button" type=" submit" class="skola"
      >Škola prehrane</router-link
    >
    <router-link to="Home" tag="button" type=" submit" class="skola"
      >Prehrambeni status</router-link
    >
    <router-link to="Home" tag="button" type=" submit" class="skola"
      >Calorie counter</router-link
    >
    <div class="slogan">Budi fit i hrani se zdravo</div>
  </div>
</template>
<style>
.container {
  position: relative;
  text-align: center;
  color: white;
}

.slogan {
  position: absolute;
  top: 40px;
  right: 100px;
  font-size: 30px;
}
.container .skola {
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  background-color: #555;
  color: white;
  font-size: 16px;
  padding: 12px 24px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

.container .skola:hover {
  background-color: black;
}
</style>
