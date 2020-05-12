<template>
  <div id="navigation">
      <div class="card col-2 m-5 p-2">
        <div
          class="nav flex-column nav-pills"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          <router-link to="/" class="nav-link" tag='a'>
            Home</router-link>
          <router-link to="/traiding" class="nav-link" activeClass="active" tag='a'>
            Traiding</router-link>
          <router-link to="/yourstocks" class="nav-link" activeClass="active" tag='a'>
            Your Stocks</router-link>
          <router-link to="/history" class="nav-link" activeClass="active" tag='a'>
            History</router-link>
          <router-link to="/settings" class="nav-link" activeClass="active" tag='a'>
            Settings</router-link>
        </div>
      </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
