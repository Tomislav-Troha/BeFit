<template>
  <div>
    <form
      @submit.prevent="Login"
      class="container mt-5 mb-5"
      id="login"
      style="background-color:#c4c4c4; max-width:450px;"
    >
      <div class="mx-auto rounded-lg mt-5">
        <h3 class="naslov_prijava text-center">Prijava</h3>
        <div class="form-group_login mx-auto p-3 m-4 ">
          <label
            class="mb-0 mt-2"
            id="lozinka_login"
            for="email-adresa"
            style=" font-family:Segoe UI; font-size:20px; "
            >E-mail
          </label>
          <input
            type="email"
            class="form-control mx-auto"
            id="email-adresa"
            aria-describedby="emailHelp"
            placeholder="Unesite email"
            v-model="email"
            
          />

          <label
            class="mb-0 mt-2"
            id="lozinka_login"
            for="lozinka"
            style=" font-family:Segoe UI; font-size:20px; "
            >Lozinka
          </label>
          <input
            type="password"
            class="form-control mx-auto"
            id="lozinka"
            placeholder="Unesite lozinku"
            v-model="lozinka"
            
          />
          <p class="text-danger text-center" v-if="feedback">{{ feedback }}</p>
        </div>

        <div class="sale text-center mt-5 ">
          <p
            class="noacc mb-0"
            style=" font-family:Segoe UI; font-size:25px;  font-weight:600; "
          >
            Nemaš naš račun?
          </p>

          <router-link
            to="Signup"
            tag="button"
            type=" submit"
            class="btn-primary mb-1 "
            >Registriraj se</router-link
          >

          <button type="button" @click="Login()" class="btn-secondary  ">
            Prijavi se
          </button>
        </div>
      </div>
    </form>

    <br /><br /><br />
  </div>
</template>

<script>
import { firebase } from "@/views/firebase";
import slugify from "slugify";
import router from "@/router"

export default {
  name: "Login",
  data() {
    return {
      email: "",
      lozinka: "",
      feedback: "",
      slug: "",
    };
  },

  methods: {
    Login() {
      if (this.email && this.lozinka) {
        this.slug = slugify(this.email, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true,
        });

        let that = this;

        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.lozinka)
          .then(() => {
              router.push({name: "Home"}) 
            
            })
          .catch((err) => {
            this.feedback = err.message;
          });
        this.feedback = null;
      } else {
        this.feedback = "Ispunite sva polja!";
      }

      console.log("nastavak");
    },
  },
};
</script>

<style scoped>
.sale {
  height: 160px;
}

.form-control {
  height: 50px;
}

.btn-primary {
  stroke: rgba(112, 112, 112, 1);
  shape-rendering: auto;
  overflow: visible;
  width: 200px;
  height: 50px;
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

.btn-secondary {
  stroke: rgba(112, 112, 112, 1);
  shape-rendering: auto;
  overflow: visible;
  width: 200px;
  height: 50px;
  background-color: #00d841;
  border: none;
  border-radius: 22px;
  font-size: 25px;
  position: relative;
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  display: block;
  margin: 0 auto;
}
.btn-secondary:hover {
  background-color: #08a538;
}

#login {
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  background: #c4c4c4;
}
</style>
