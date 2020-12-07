<template>
  <form @submit.prevent="Login" class="container">
    <h3 id="naslov_prijava">Prijava</h3>
    <div class="form-group_login mx-auto p-3 m-4 ">
      <label id="lozinka_login" for="email-adresa">Email adresa: </label>
      <input
        type="email"
        class="form-control mx-auto"
        id="email-adresa"
        aria-describedby="emailHelp"
        placeholder="Unesite email"
        v-model="email"
      />

      <label id="lozinka_login" for="lozinka">Lozinka: </label>
      <input
        type="password"
        class="form-control mx-auto"
        id="lozinka"
        placeholder="Unesite lozinku"
        v-model="lozinka"
      />
    </div>

    <p class="noacc">Nemaš naš račun?</p>
    <p class="text-danger text-center" v-if="feedback">{{ feedback }}</p>
    <router-link to="Signup" tag="button" type=" submit" class="btn-secondary"
      >Registriraj se</router-link
    >
    <p class="text-danger text-center" v-if="feedback">{{ feedback }}</p>
    <router-link to="Home" tag="button" type=" submit" class="btn-primary "
      >Prijavi se</router-link
    >
  </form>
</template>

<script>
export default {};
</script>

<style>
.noacc {
  margin-top: 80px;
  font-size: 20px;
  color: black;
  margin-bottom: -17%;
  margin-left: 160px;
}

#lozinka_login {
  margin: 10px 50px 0px 50px;
  font-family: "Segoe UI";
  color: #444444;
  font-style: italic;
  font-weight: bold;
  position: flex;
}

#naslov_prijava {
  font-family: "Segoe UI";
  color: #444444;
  font-style: italic;
  font-weight: bold;
  margin-left: 180px;
}

.container {
  max-width: 500px !important;
  height: 500px;
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  margin-top: 80px;
  background: #c4c4c4;
  position: inherit;
}

.btn-primary {
  stroke: rgba(112, 112, 112, 1);
  shape-rendering: auto;
  overflow: visible;
  width: 200px;
  height: 50px;
  background-color: #00b0de;
  border: none;
  border-radius: 22px;
  font-size: 25px;
  margin-top: 8px;
  margin-left: 140px;
  position: relative;
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}

.btn-secondary {
  margin-top: 80px;
  margin-left: 140px;
  stroke: rgba(112, 112, 112, 1);
  shape-rendering: auto;
  overflow: visible;
  width: 200px;
  height: 50px;
  background-color: #00b0de;
  border: none;
  border-radius: 22px;
  font-size: 25px;
  position: relative;
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
}

.form-control {
  width: 350px !important;
  height: 55px !important;
}
</style>
