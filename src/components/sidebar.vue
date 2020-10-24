<template>
  <div class="sidebar">
    <div class="logo"></div>
    <div class="menu-items">
      <router-link to="/dashboard" active-class="active" exact tag="button" class="nav-link">
        <div class="link-container">
          Dashboard
        </div>
      </router-link>
       <router-link to="/clients" active-class="active" exact tag="button" class="nav-link">
        <div class="link-container">
          Clients
        </div>
      </router-link>
       <router-link to="/campaigns" active-class="active" exact tag="button" class="nav-link">
        <div class="link-container">
          Campaigns
        </div>
      </router-link>
       <router-link to="/audience" active-class="active" exact tag="button" class="nav-link">
        <div class="link-container">
          Audience
        </div>
      </router-link>
       <router-link to="/games" active-class="active" exact tag="button" class="nav-link">
        <div class="link-container">
          Games
        </div>
      </router-link>
       <router-link to="/redemption" active-class="active" tag="button" class="nav-link">
        <div class="link-container">
          Redemption
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
      // name: 'Sidebar'
}
</script>

<style scoped>
.sidebar{
  position: absolute;
  top: 0;
  background: #2f323a;
  width: 15%;
  height: 100vh;
}
.menu-items{
  position: relative;
  top: 15%;
}
.nav-link{
  padding: 1em;
  color: #ffffff;
}
.link-container{
  border-bottom: 1px solid #707070;
  padding: .5em;
}
.link-container:active{
  background: #ffffff;
  color: #44099F;
}
</style>