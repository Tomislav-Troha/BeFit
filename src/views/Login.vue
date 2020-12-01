<template>
  <div class="container">
    <div class="card card-container">
      <!-- <img class="profile-img-card" src="//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" alt="" /> -->
      <p id="prijava">Prijava</p>
      <p id="profile-name" class="profile-name-card"></p>
      <form class="form-signin">
        <p id="email">E-MAIL</p>
        <span id="reauth-email" class="reauth-email"></span>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          required
          autofocus
        />
        <p id="lozinka">LOZINKA</p>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          required
        />
        <p id="no_account">Nemaš naš račun?</p>
        <router-link to="/Signup" tag="button" class="registracija"
          >Registriraj se!</router-link
        >
        <router-link to="/Signup" tag="button" class="prijava"
          >Prijavi se!</router-link
        >
      </form>
    </div>
    <!-- /card-container -->
  </div>
  <!-- /container -->
</template>

<style>
#no_account {
  margin-bottom: 0%;
}
.registracija {
  background: #0099ff 0 0;
  border-color: #0099ff;
  color: #ffffff;
  font-size: 20px;
  width: 65%;
  height: 60px;
  line-height: 50px;
  padding: 0px;
  border-radius: 10px;
  margin-top: 0%;
}
.prijava {
  background: green 0 0;
  border-color: green;
  color: #ffffff;
  font-size: 20px;
  width: 65%;
  height: 60px;
  line-height: 50px;
  padding: 0px;
  border-radius: 10px;
}
#prijava {
  font-family: "Segoe UI";
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
}
#email {
  font-family: "Segoe UI";
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
  font-weight: bold;
}
#lozinka {
  font-family: "Segoe UI";
  text-align: left;
  color: #444444;
  margin: 0%;
  font-style: italic;
  font-weight: bold;
}
body,
html {
  height: 100%;
  background-repeat: no-repeat;
  background-image: white;
}

.card-container.card {
  max-width: 350px;
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
  direction: ltr;
  height: 44px;
  font-size: 16px;
}

.form-signin input[type="email"],
.form-signin input[type="password"],
.form-signin input[type="text"],
.form-signin button {
  width: 100%;
  display: block;
  margin-bottom: 10px;
  z-index: 1;
  position: relative;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
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
  localStorage.setItem(
    "PROFILE_IMG_SRC",
    "//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120"
  );
  localStorage.setItem("PROFILE_NAME", "César Izquierdo Tello");
  localStorage.setItem("PROFILE_REAUTH_EMAIL", "oneaccount@gmail.com");
}
</script>
