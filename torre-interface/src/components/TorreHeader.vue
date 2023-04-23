
<script setup> 
import { RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <nav class="container">
      
      <div class="burguer">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 -1 24 24"><path fill="#a9a9ab" d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"/></svg>
      </div>
     <RouterLink to="/">
        <div class="branding">
            <img src="../assets/images/torre icon.png" alt="#">
        </div>
      </RouterLink>
    
        <ul class="nav-routes">
            <RouterLink to="/" class="searchIcon"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512"><path fill="#a8a9aa" d="M414 354q-18-18-41-11l-32-32q43-53 43-119q0-80-56-136T192 0T56 56T0 192t56 136t136 56q70 0 119-43l32 32q-6 24 11 41l85 85q13 13 30 13q18 0 30-13q13-13 13-30t-13-30zm-222-13q-62 0-105.5-43.5T43 192T86.5 86.5T192 43t105.5 43.5T341 192t-43.5 105.5T192 341z"/></svg>
            </RouterLink>
            <RouterLink to="/">SIGN IN</RouterLink>
        </ul>
    </nav>
  </header>
</template>


<style lang="scss" scoped>
@import url("https://use.typekit.net/jmq5unc.css");

.container{
  margin: 0;
  padding: 0px;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: 0px 8px 13px -9px #000; 
  align-items: center;
}

header {

  align-items: center;
  
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;
    .branding {
      margin-left: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 95px;
      }
    }
    .nav-routes {
      align-items: center;
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;
      a {
        font-weight: 50;
        font-size: 18px;
        text-decoration: none;
        color: #cddc39;
      }

      .searchIcon{
        margin-right: 25px;
      }

      .burguer{
        
        margin-right: 20px;
        
      }
    }
  }
}
</style>