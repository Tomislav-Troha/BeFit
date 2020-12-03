<template>
  <body id="SignupForm">
    <div class="Signup-form">
      <div class="main-div">
        <form id="Login">
          <div class="form-group">
            <p id="ime">IME</p>
            <input type="email" class="form-control" />
          </div>
          <div class="form-group">
            <p id="surname">PREZIME</p>
            <input type="email" class="form-control" />
          </div>
          <div class="form-group">
            <p id="datum">DATUM ROĐENJA</p>
            <input type="email" class="form-control" />
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
          <router-link to="/Signup" tag="button" class="Singup_registracija"
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
  color: #ffffff;
  font-size: 20px;
  width: 65%;
  height: 60px;
  line-height: 50px;
  padding: 0px;
  border-radius: 10px;
}

#ime {
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
}
#surname {
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
}
#datum {
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
}

#email {
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
}

#lozinka {
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
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
    fill: rgba(201,201,201,1);
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.839));
		overflow: visible;
		width: 692px;
		height: 674px;
    top:200px;
    left: 34%;
    background-color: #C9C9C9;
}

.forma_signup,
#lozinka,
#email{
  padding-left:100px;
}


.Signup-form .form-group {
  margin-bottom: 10px;
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
