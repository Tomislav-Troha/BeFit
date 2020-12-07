<template>
  <form @submit.prevent="loginKorisnik" class="container">
    <div class="form-group_sign mx-auto ">
      <label id="slova_signup" for="ime">Ime: </label>
      <input
        type="email"
        class="form-control mx-auto"
        id="email-adresa"
        aria-describedby="emailHelp"
        placeholder="Unesite ime"
        v-model="email"
      />
    </div>
    <div class="form-group_sign mx-auto">
      <label id="slova_signup" for="prezime">Prezime: </label>
      <input
        type="text"
        class="form-control mx-auto"
        id="lozinka"
        placeholder="Unesite prezime"
        v-model="lozinka"
      />
    </div>
    <div class="form-group_sign mx-auto">
      <label id="slova_signup" for="datum_rodenja">Datum rođenja: </label>
      <input
        type="date"
        class="form-control mx-auto"
        id="lozinka"
        placeholder="Unesite datum rodenja"
        v-model="lozinka"
      />
    </div>
    <div class="form-group_sign mx-auto">
      <label id="slova_signup" for="email">E-mail: </label>
      <input
        type="email"
        class="form-control mx-auto"
        id="lozinka"
        placeholder="Unesite E-mail"
        v-model="lozinka"
      />
    </div>
    <div class="form-group_sign mx-auto">
      <label id="slova_signup" for="lozinka">Lozinka: </label>
      <input
        type="password"
        class="form-control mx-auto"
        id="lozinka"
        placeholder="Unesite lozinku"
        v-model="lozinka"
      />
    </div>
    <p class="text-danger text-center " v-if="feedback">
      {{ feedback }}
    </p>
    <router-link to="Home" tag="button" type=" submit" class="btn-secondary_reg"
      >Registriraj se</router-link
    >
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss">
.btn-secondary_reg {
  margin-top: 8px;
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

#slova_signup {
  margin: 8px 60px 0px;

  font-family: "Segoe UI";
  color: #444444;
  font-style: italic;
  font-weight: bold;
}
</style>
