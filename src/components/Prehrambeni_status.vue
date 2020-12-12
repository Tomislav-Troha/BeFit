<template>
  <div>
    <div class="bg-secondary text-light mx-5 rounded-lg " id="poc_tekst">
      <p
        class="lead p-3 mt-1 text-center"
        id="tekst"
        style="font-family: Segoe UI; font-size:30px; background-color:white;"
      >
        Svatko bi periodično trebao procijeniti svoj prehrambeni status.<br />
        Kao što liječnik obavlja sistematski pregled, <br />nutricionist vrši
        nutritivnu evaluaciju
      </p>
    </div>

    <div
      class="bg-secondary text-light mx-5  "
      style="display: flex; justify-content: center;"
      id="navigacije"
    >
      <b-card-group deck class="mx-auto ">
        <b-card
          class="text-center"
          type="button"
          style="width:350px; background-color: #c4c4c4; border-radius: 25px;   "
          align="center"
        >
          <b-card-text
            style="font-size:25px;color:black;text-decoration: none;"
          >
            <nav-item v-scroll-to="'#masti'">Udio masti u tijelu</nav-item>
          </b-card-text>
        </b-card>

        <b-card
          class="text-center "
          style=" background-color: #c4c4c4; border-radius: 25px;   "
        >
          <b-card-text style="font-size:25px "
            ><router-link
              to="Prehrambeni_status"
              style="font-size:25px;color:black;text-decoration: none; "
              >Indeks tjelesne mase</router-link
            ></b-card-text
          >
        </b-card>

        <b-card
          class="text-center "
          style=" background-color: #c4c4c4; border-radius: 25px; "
        >
          <b-card-text
            style="font-size:25px; color:black;text-decoration: none;"
            >Omjer struka i bokova</b-card-text
          >
        </b-card>
      </b-card-group>
    </div>

    <div class="text-center mt-5">
      <img src="@/assets/rendi.jpg" />
    </div>
    <br /><br /><br />

    <div class="status mt-5 mx-auto" id="masti" style=" max-width:450px;">
      <b-card
        header="Udio masti u tijelu"
        class="text-center"
        style="background-color:#F8F8F8;"
      >
        <b-form @submit="onSubmit" @reset="onReset" class="text-left">
          <b-form-group id="input-group-1" label="Spol:" label-for="input-1">
            <b-form-select
              id="input-1"
              v-model="form.spol"
              :options="spol"
              required
            >
            </b-form-select>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite dob"
            label-for="input-2"
          >
            <b-form-input
              v-model="form.dob"
              placeholder="Unesite dob"
              type="number"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite tjelesnu visinu (cm)"
            label-for="input-2"
          >
            <b-form-input
              v-model="form.tjelesna_visina"
              type="number"
              placeholder="Unesite tjelesnu visinu (cm)"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite opseg struka"
            label-for="input-2"
          >
            <b-form-input
              v-model="form.opseg_struka"
              placeholder="Unesite opseg struka (cm)"
              type="number"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Unesite opseg vrata"
            label-for="input-2"
          >
            <b-form-input
              v-model="form.opseg_vrata"
              placeholder="Unesite opseg vrata (cm)"
              type="number"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="success">Izračunaj</b-button>
          <b-button type="reset" variant="danger" class="mx-2">Reset</b-button>
        </b-form>
      </b-card>
    </div>
    <back-to-top bottom="50px" right="50px">
      <button type="button" class=" btn-to-top  ">
        <i class="fa fa-chevron-up text-center"></i>
      </button>
    </back-to-top>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        spol: null,
        dob: "",
        tjelesna_visina: "",
        opseg_struka: "",
        opseg_vrata: "",
      },

      spol: [{ text: "Odaberi spol", value: null }, "Muško", "Žensko"],
      show: true,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      JSON.stringify(this.form);
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.spol = null;
      this.form.dob = "";
      this.form.tjelesna_visina = "";
      this.form.opseg_struka = "";
      this.form.opseg_vrata = "";

      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
.card-header {
  background-color: #e6e6e6;
  font-size: 30px;
  font-weight: 500;
}
.btn:focus {
  outline: 0 !important;
  border: none;
  box-shadow: none;
}

.vue-back-to-top {
  margin-bottom: 83px;
}

.btn-to-top {
  color: black;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  font-size: 35px;
  line-height: 22px;
  background-color: #f9f8f8;
  border-color: #b7d8ff !important;
  outline: 0;
}

.btn-info:hover {
  text-decoration: none;
  background-color: #c4c4c4;
  color: black;
}

.bg-secondary {
  background-color: white !important;
}
#tekst {
  margin-top: 30px;
  font-family: "Segoe UI";
  color: black;
}

.status {
  fill: rgba(196, 196, 196, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  overflow: visible;
  background: green;
  border-radius: 25px;
}
</style>
