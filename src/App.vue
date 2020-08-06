<template>
<v-app>
  <v-main>
  <div id="app" class="d-flex flex-column h-100">
    <nav-bar />
    <div class="container flex-grow-1">
      <error />
      <div class="mt-5">
        <router-view />
      </div>
    </div>
    <footer class="bg-light text-center p-3">
        <table class="tb-centered">
          <tr><td><div class="logo"/></td><td>
            <span style = "text-align: center;">Login with <a href="https://auth0.com">Auth0</a></span></td></tr>
        </table>
    </footer>
  </div>
  </v-main>
</v-app>
</template>
<script>
import NavBar from "./components/NavBar";
import Error from "./components/Error";

export default {
  components: {
    NavBar,
    Error
  }
};
</script>
