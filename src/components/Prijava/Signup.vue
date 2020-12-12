<template>
  <div>
    <form
      class="container mt-5 mb-5"
      id="signup_cont"
      style="background-color:#c4c4c4; max-width:450px;"
    >
      <div class="mx-auto rounded-lg mt-5">
        <div class="form-group_login mx-auto p-3 m-4 ">
          <label
            class="mb-0 mt-2"
            id="signup"
            for="ime"
            style=" font-family:Segoe UI; font-size:20px; "
            >Ime:
          </label>
          <input
            type="text"
            class="form-control mx-auto "
            aria-describedby="emailHelp"
            placeholder="Unesite ime"
            v-model="ime"
          />

          <label
            class="mb-0 mt-2"
            id="signup"
            for="prezime"
            style=" font-family:Segoe UI; font-size:20px; "
            >Prezime:
          </label>
          <input
            type="text"
            class="form-control mx-auto"
            placeholder="Unesite prezime"
            v-model="prezime"
          />

          <label
            class="mb-0 mt-2"
            id="signup"
            for="datum"
            style=" font-family:Segoe UI; font-size:20px; "
            >Datum rođenja:
          </label>
          <input
            type="date"
            class="form-control mx-auto"
            placeholder="Unesite datum"
            v-model="datum"
          />

          <label
            class="mb-0 mt-2"
            id="signup"
            for="email"
            style=" font-family:Segoe UI; font-size:20px; "
            >E-mail:
          </label>
          <input
            type="email"
            class="form-control mx-auto"
            placeholder="Unesite e-mail"
            v-model="email"
          />

          <label
            class="mb-0 mt-2"
            id="signup"
            for="lozinka"
            style=" font-family:Segoe UI; font-size:20px; "
            >Lozinka:
          </label>
          <b-form-group description="Minimalno 6 znakova" class="text-right">
            <input
              type="password"
              class="form-control mx-auto"
              placeholder="Unesite lozinku"
              v-model="lozinka"
            />
          </b-form-group>
          <p class="text-danger text-center" v-if="feedback">{{ feedback }}</p>
        </div>

        <div class="sale text-center mt-3">
          <button type="button" @click="Signup" class="btn-primary mb-2 ">
            Registriraj se
          </button>
        </div>
      </div>
    </form>

    <br /><br /><br />
  </div>
</template>

<script>
import { firebase } from "@/views/firebase";

export default {
  name: "Signup",
  data() {
    return {
      ime: "",
      prezime: "",
      datum: "",
      email: "",
      lozinka: "",
      feedback: "",
      slug: "",
    };
  },

  methods: {
    Signup() {
      if (this.email && this.lozinka) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.lozinka)
          .then(function() {
            console.log("Uspijesna registacija");
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
.form-control {
  height: 50px;
}

#signup_cont {
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  background: #c4c4c4;
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
</style>
