<template>
  <body id="SignupForm">
    <div class="Signup-form">
      <div class="main-div">
        <form id="Sigup">
          <div class="form-group">
            <p id="ime">IME</p>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <p id="surname">PREZIME</p>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <p id="datum">DATUM ROĐENJA</p>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group">
            <p id="email_signup">E-MAIL</p>
            <input type="email" class="form-control" />
          </div>
          <div class="form-group">
            <p id="lozinka_signup">LOZINKA</p>
            <input type="password" class="form-control" />
          </div>
          <div class="form-group">
            <p id="lozinka_signup">PONOVI LOZINKU</p>
            <input type="password" class="form-control" />
          </div>
          <router-link to="/Home" tag="button" class="Singup_registracija"
            >Registriraj se!</router-link
          >
        </form>
      </div>
    </div>
  </body>
</template>

<script>
export default {};
</script>

<style lang="scss">
.form-control {
  height: 63px;
  width: 512px;
  display: inline-table;
}
.Singup_registracija {
  background: #0099ff 0 0;
  border-color: #0099ff;
  color: black;
  font-size: 25px;
  width: 65%;
  height: 60px;
  line-height: 50px;
  padding: 0px;
  border-radius: 10px;
  margin-top: 30px;
}

#ime {
  font-family: "Segoe UI";
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
  font-weight: bold;
  padding-left: 93px;
}
#surname {
  font-family: "Segoe UI";
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
  font-weight: bold;
  padding-left: 93px;
}
#datum {
  font-family: "Segoe UI";
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
  font-weight: bold;
  padding-left: 93px;
}

#email_signup {
  font-family: "Segoe UI";
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
  font-weight: bold;
  padding-left: 93px;
}

#lozinka_signup {
  font-family: "Segoe UI";
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
  font-weight: bold;
  padding-left: 93px;
}

.form-heading {
  color: silver;
  font-size: 23px;
}
.panel h2 {
  color: #444444;
  font-size: 30px;
  font: italic;
  margin: 0 0 8px 0;
  padding-bottom: 30px;
  font-family: Helvetica;
  font-style: italic;
}
.panel p {
  color: #777777;
  font-size: 14px;
  margin-bottom: 30px;
  line-height: 24px;
}
.main-div {
  position: fixed;
  overflow: visible;
  fill: rgba(201, 201, 201, 1);
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.839));
  overflow: visible;
  width: 692px;
  height: 674px;
  top: 200px;
  left: 34%;
  background-color: #c9c9c9;
}

.Signup-form .form-group {
  margin: 0%;
}
.Signup-form {
  text-align: center;
}
.forgot a {
  color: #777777;
  font-size: 14px;
  text-decoration: underline;
}

.forgot {
  text-align: left;
  margin-bottom: 30px;
}
.botto-text {
  color: #ffffff;
  font-size: 14px;
  margin: auto;
}

.back {
  text-align: left;
  margin-top: 10px;
}
.back a {
  color: #444444;
  font-size: 13px;
  text-decoration: none;
}
</style>
