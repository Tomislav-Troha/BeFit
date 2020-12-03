<template>
  <div class="container">
    <div class="card card-container">
      <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
      <p id="prijava">Prijava</p>
      <p id="profile-name" class="profile-name-card"></p>
      <form class="form-signin" id="forma_login">
        <p id="emailLogin">E-MAIL</p>
        <span id="reauth-email" class="reauth-email"></span>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          required
          autofocus
        />
        <p id="lozinkaLogin">LOZINKA</p>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          required
        />

        <div class="noacc">
          <strong id="no_account">Nemaš naš račun?</strong>
        </div>
        <router-link
          to="/Signup"
          tag="button"
          type="submit"
          class="registracija"
          >Registriraj se!</router-link
        >
        <router-link to="Home" tag="button" type=" submit" class="prijava"
          >Prijavi se!</router-link
        >
      </form>
    </div>
    <!-- /card-container -->
  </div>
  <!-- /container -->
</template>

<script>
export default {
  name: "FormComponent",

  data() {
    return {
      form: {
        inputEmail: "",
        inputPassword: "",
      },
    };
  },

  validations: {
    form: {
      inputEmail: { required },
      inputPassword: { required, inputEmail },
    },
  },
};
</script>

<style>
.registracija {
  fill: rgba(0, 216, 65, 1);
  stroke: rgba(112, 112, 112, 1);
  stroke-width: 1px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  shape-rendering: auto;
  position: absolute;
  overflow: visible;
  width: 225px;
  height: 78px;
  background-color: #00d841;
  border: none;
  border-radius: 22px;
  font-size: 25px;
}
.prijava {
  stroke: rgba(112, 112, 112, 1);
  stroke-width: 1px;
  stroke-linejoin: miter;
  stroke-linecap: butt;
  stroke-miterlimit: 4;
  shape-rendering: auto;
  position: absolute;
  overflow: visible;
  width: 225px;
  height: 78px;
  background-color: #00b0de;
  border: none;
  border-radius: 22px;
  font-size: 25px;
}
#prijava {
  font-family: "Segoe UI";
  font-weight: bold;
  white-space: nowrap;
  text-align: center;
  font-style: normal;
  font-weight: lighter;
  font-size: 50px;
  color: rgba(0, 0, 0, 1);
}
#emailLogin {
  font-family: "Segoe UI";
  text-align: left;
  color: #444444;
  font-style: italic;
  font-weight: bold;
  margin: 0%;
}
#lozinkaLogin {
  font-family: "Segoe UI";
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
  font-weight: bold;
}

.forma_login,
#lozinkaLogin,
#emailLogin {
  padding-left: 100px;
}

.noacc,
#no_account {
  margin-top: 125px;
  font-size: 20px;
  color: black;
}

body,
html {
  height: 100%;
  background-repeat: no-repeat;
  background-image: white;
}

.card-container.card {
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.788));
  position: fixed;
  overflow: visible;
  width: 662px;
  height: 727px;
  left: 34%;
  transform: matrix(1, 0, 0, 1, 0, 0);
  border-radius: 10px;
  background-color: #c4c4c4;
}

.btn {
  font-weight: 700;
  height: 36px;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

/*
 * Card component
 */
.card {
  background-color: #f7f7f7;
  /* just in case there no content*/
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  /* shadows and rounded borders */
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
  -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

/*
 * Form styles
 */

.reauth-email {
  display: block;
  color: #404040;
  line-height: 2;
  margin-bottom: 0px;
  font-size: 14px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.form-signin #inputEmail,
.form-signin #inputPassword {
  fill: rgba(255, 255, 255, 1);
  overflow: visible;
  width: 423px;
  height: 89px;
  border-radius: 10px;
  background-color: #ffffff;
  border: none;
  left: 100px;
}

.form-signin input[type="email"],
.form-signin input[type="password"],
.form-signin input[type="text"],
.form-signin button {
  width: 225px;
  height: 78px;
  display: block;
  margin-bottom: 10px;
  z-index: 1;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  left: 200px;
}

.form-signin .form-control:focus {
  border-color: rgb(104, 145, 162);
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgb(104, 145, 162);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgb(104, 145, 162);
}

.btn.btn-signin:hover,
.btn.btn-signin:active,
.btn.btn-signin:focus {
  background-color: rgb(12, 97, 33);
}

.forgot-password {
  color: rgb(104, 145, 162);
}

.forgot-password:hover,
.forgot-password:active,
.forgot-password:focus {
  color: rgb(12, 97, 33);
}
</style>

<script>
$(document).ready(function() {
  // DOM ready

  // Test data
  /*
   * To test the script you should discomment the function
   * testLocalStorageData and refresh the page. The function
   * will load some test data and the loadProfile
   * will do the changes in the UI
   */
  // testLocalStorageData();
  // Load profile if it exits
  loadProfile();
});

/**
 * Function that gets the data of the profile in case
 * thar it has already saved in localstorage. Only the
 * UI will be update in case that all data is available
 *
 * A not existing key in localstorage return null
 *
 */
function getLocalProfile(callback) {
  var profileName = localStorage.getItem("PROFILE_NAME");
  var profileReAuthEmail = localStorage.getItem("PROFILE_REAUTH_EMAIL");

  if (profileName !== null && profileReAuthEmail !== null) {
    callback(profileName, profileReAuthEmail);
  }
}

/**
 * Main function that load the profile if exists
 * in localstorage
 */
function loadProfile() {
  if (!supportsHTML5Storage()) {
    return false;
  }
  // we have to provide to the callback the basic
  // information to set the profile
  getLocalProfile(function(profileName, profileReAuthEmail) {
    //changes in the UI

    $("#profile-name").html(profileName);
    $("#reauth-email").html(profileReAuthEmail);
    $("#inputEmail").hide();
    $("#remember").hide();
  });
}

/**
 * function that checks if the browser supports HTML5
 * local storage
 *
 * @returns {boolean}
 */
function supportsHTML5Storage() {
  try {
    return "localStorage" in window && window["localStorage"] !== null;
  } catch (e) {
    return false;
  }
}

/**
 * Test data. This data will be safe by the web app
 * in the first successful login of a auth user.
 * To Test the scripts, delete the localstorage data
 * and comment this call.
 *
 * @returns {boolean}
 */
function testLocalStorageData() {
  if (!supportsHTML5Storage()) {
    return false;
  }

  localStorage.setItem("PROFILE_NAME", "César Izquierdo Tello");
  localStorage.setItem("PROFILE_REAUTH_EMAIL", "oneaccount@gmail.com");
}
</script>
