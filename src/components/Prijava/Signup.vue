<template>
    <form @submit.prevent="loginKorisnik" class="container">
        
  <div class="form-group_sign">
    <label id="slova_signup" for="ime">Ime: </label>
    <input type="email" class="form-control" id="email-adresa" aria-describedby="emailHelp" placeholder="Unesite ime" v-model="email">
  </div>
  <div class="form-group_sign">
    <label id="slova_signup" for="prezime">Prezime: </label>
    <input type="text" class="form-control" id="lozinka" placeholder="Unesite prezime" v-model="lozinka">
  </div>
  <div class="form-group_sign">
    <label id="slova_signup" for="datum_rodenja">Datum rođenja: </label>
    <input type="date" class="form-control" id="lozinka" placeholder="Unesite datum rodenja" v-model="lozinka">
  </div>
  <div class="form-group_sign">
    <label id="slova_signup" for="email">E-mail: </label>
    <input type="email" class="form-control" id="lozinka" placeholder="Unesite E-mail" v-model="lozinka">
  </div>
  <div class="form-group_sign">
    <label id="slova_signup" for="lozinka">Lozinka: </label>
    <input type="password" class="form-control" id="lozinka" placeholder="Unesite lozinku" v-model="lozinka">
  </div>
  <p class="text-danger text-center" v-if="feedback">{{ feedback }}</p>
  <b-button class="button_register" variant="success">Registriraj se!</b-button>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" >

.button_register{
  margin-left: 170px;
  margin-top: 20px;
}

.form-group_sign{
  margin-left: 65px;
}

#slova_signup{
  margin-bottom: 0%;
  margin-top: 8px;
  font-family: "Segoe UI";
  color: #444444;
  font-style: italic;
  font-weight: bold;
}

</style>