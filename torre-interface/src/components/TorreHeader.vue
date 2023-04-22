
<script setup> 
import { RouterLink } from 'vue-router';
</script>

<template>
  <header>
    <nav class="container">
        <div class="branding">
            <h1>torre</h1>
            <h2>.co</h2>
        </div>
        <ul class="nav-routes">
            <RouterLink to="/">SEARCH</RouterLink>
            <RouterLink to="/signin">SIGN IN</RouterLink>
        </ul>
    </nav>
  </header>
</template>



<style lang="scss" scoped>
@import url("https://use.typekit.net/jmq5unc.css");

.container{
  box-shadow: 0px 8px 5px -5px #000; 
}

header {
  
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;
    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }
      h1 {
        font-weight: 400;
        font-size: 24px;
        color: white;
       
      }
      h2 {
        font-weight: 200;
        font-size: 23px;
        color:#cddc39;
        margin-left: -7px;
      }
    }
    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;
      a {
        font-weight: 200;
        text-decoration: none;
        color: #cddc39;
      }
    }
  }
}
</style>