<script>
import { RouterView } from 'vue-router';
import { RouterLink } from 'vue-router';
</script>

<template>
  <!--Header of the section-->
   <header>
    <nav class="container">
      <RouterLink to="/">
      <div class="collapse">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256"><path fill="white" d="M208.49 191.51a12 12 0 0 1-17 17L128 145l-63.51 63.49a12 12 0 0 1-17-17L111 128L47.51 64.49a12 12 0 0 1 17-17L128 111l63.51-63.52a12 12 0 0 1 17 17L145 128Z"/></svg>
      </div>
    </RouterLink>
        <div class="branding">
            <h1>Commitment</h1>
        </div>
    </nav>
  </header>

  <!-- Describing the skill and related job-->
  <div class="skills-description">
  <div class="subtittle">
    <h2 class="sub">Proficiency:</h2>
    <div class="master-influencer">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1.2c-1 0-1.8.8-1.8 1.8S15 4.8 16 4.8S17.8 4 17.8 3S17 1.2 16 1.2m-3.6 2.9c-.47 0-.9.19-1.2.5L7.5 8.29C7.19 8.6 7 9 7 9.5c0 .63.33 1.16.85 1.47L11.2 13v5H13v-6.5l-2.25-1.65l2.32-2.35L14.8 10H19V8.2h-3.2l-1.94-3.27c-.29-.5-.86-.83-1.46-.83M10 3H3c-.55 0-1-.45-1-1s.45-1 1-1h9.79c-.21.34-.38.71-.47 1.11c-.86.02-1.67.34-2.32.89m-5 9c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 8.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5M19 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 8.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5M5.32 11H1c-.552 0-1-.45-1-1s.448-1 1-1h4.05c-.02.16-.05.33-.05.5c0 .53.12 1.04.32 1.5M6 7H2c-.55 0-1-.45-1-1s.45-1 1-1h5.97L6.09 6.87C6.05 6.91 6 6.96 6 7Z"/></svg>
    <h2>Master / Influencer</h2>
  </div>
  </div>
  <div class="subtittle">
    <h2 class="sub">Recomendations:</h2>
    <div class="master-influencer">
    <h2>7</h2>
  </div>
  </div>

  <div style="border-bottom: 1px solid #a9a9ab; margin: 10px 0;"></div>

  <div class="subtittle">
    <h2 class="sub">Kayro's related experiences:</h2>
    <br><br>
  </div>

  <div class="sub">
    <h2 class="job"> Web Designer/Developer</h2>
    <h3 class="job-company"> Zona Sur AutoPartes</h3>
    <h3 class="job-company"> Dic 2022</h3> <br>
  </div>

  <div style="border-bottom: 1px solid #a9a9ab; margin: 10px 0;"></div>

  <div class="other-profiles">
    <h2 class="sub-profiles"> Other people with this skill:</h2>
   
    <!--Profile #1-->
    <div class="otherProfiles-descriptions">
 <div class="profile-picture">
    <div class="hexagonal-bg">
    <div class="hexagonal-profile">
      <img src="../assets/images/profile torrenegra.jpg" alt="#" class="hexagonal-img">
     </div>
     </div>
  </div>

  <div class="name-description">
    <h2 class="otherProfile-name"> 
      Alexander Torrenegra  
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#a9a9ab" d="m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12m-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8Z"/></svg>
      </div>
    </h2>
    <h3 class="otherProfile-description"> CEO of Torre, where AI does the recruitment and job hunting for you. Founder of Tribe, RisePal, Bunny Studio, and Voice123.</h3>
  </div>
  <div class="view">
    <button class="btn-view">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="-5 -4 30 27"><path fill="#cddc39" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/></svg>
    </button>
  </div>
   

</div>
  <!--Profile #2-->
  <div class="otherProfiles-descriptions">
 <div class="profile-picture">
    <div class="hexagonal-bg">
    <div class="hexagonal-profile">
      <img src="../assets/images/renan profile.jpg" alt="#" class="hexagonal-img">
     </div>
     </div>
  </div>

  <div class="name-description">
    <h2 class="otherProfile-name"> 
      Renan Peixoto da Silva 
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#a9a9ab" d="m23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12m-13 5l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8Z"/></svg>
      </div>
    </h2>
    <h3 class="otherProfile-description"> Head of Engineering at Torre</h3>
  </div>
  <div class="view">
    <button class="btn-view">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="-5 -4 30 27"><path fill="#cddc39" d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3z"/></svg>
    </button>
  </div>

</div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@import url("https://use.typekit.net/jmq5unc.css");

//Header styles section
.container{
  margin: 0;
  padding: 0px;
  padding-left: 15px;
  padding-right: 15px;
  box-shadow: 0px 0px 20px -8px #000; 
}

header {
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;
    .branding {
      margin-left: 15px;
      display: flex;
      align-items: center;
      gap: 8px;
      h1{
        color: #e6e7e7;
      font-weight: 400;
      font-size: 25px;
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


//Body
*{
  background-color: #27292d;
}
    @import url("https://use.typekit.net/jmq5unc.css");

//Muli Regular
*{
  font-family: "muli", sans-serif;
font-weight: 400;
font-style: normal;
}


 //User Name features
    .skills-description{
      margin-left: 10px;
    }
    .subtittle{
      font-weight: 100;
      font-size: 13px;
      display: flex;
      margin: 20px;
    }
    .sub{
      color: #a9a9ab;
    }h3{
      margin-left: 4.5px;
    }
    .master-influencer{
      margin-left: 20px;
      color: #a9a9ab;
      font-weight: 800;
        font-size: 12px;
        display: flex;
        align-items: center;
        letter-spacing: 0.4px;
    }h2{
      margin-left: 0px;
      color: #e6e7e7;
    }

    .job{
      margin: 20px;
      margin-bottom: 10px;
      color: #cddc39;
      font-size: 18px;
    }
    .job-company{
      margin: 5px 22px 5px;
      margin-top: 5px;
    }

  
    //Other profiles styles

    .other-profiles{
      font-weight: 100;
      font-size: 13px;
      margin: 20px;
    }
    .sub-profiles{
      color: #a9a9ab;
    }h3{
      margin-left: 4.5px;
    }

    .profile-picture{
  margin-top: 40px;
  display: auto;
}
.hexagonal-bg{
  background-color: #5e626b;
  border-radius: 20px solid #fff; /* Establece el borde del hexágono */
  position: relative;
  width: 80px;
  height: 89px;
  margin: 20px 0px 20px 20px !important;
  clip-path: polygon(50% 2%, 99% 25%, 99% 73%, 50% 95%, 2% 74%, 2% 25% );
}

.hexagonal-profile {
  margin-top: 20px;
  border-radius: 20px solid #fff; /* Establece el borde del hexágono */
  position: relative;
  width: 70px;
  height: 80px;
  margin: 20px auto;
  clip-path: polygon(50% 7%, 99% 29.5%, 99% 78%, 50% 100%, 2% 79%, 2% 29.5%);
}

.hexagonal-img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Ajusta el ancho de la imagen al 100% del ancho del contenedor hexagonal */
  height: 100%; /* Ajusta la altura de la imagen al 100% de la altura del contenedor hexagonal */
  object-fit: cover; /* Ajusta el tamaño de la imagen para cubrir todo el contenedor hexagonal */
}

.otherProfiles-descriptions{
  display: flex;
  align-items: center;
}
.name-description{
  color: #a9a9ab;
  margin-top: 40px;
  margin-left: 3px;
  justify-content: space-between;
}
.otherProfile-name{
  margin: 20px;
      margin-bottom: 10px;
      color: #cddc39;
      font-size: 18px;
      display: flex;
      align-items: center;
}div{
  margin-left: 18px;
}
.otherProfile-description{
  margin: 20px;
      margin-top: 13px;
}
.view{
margin-left: auto;
}
.btn-view{
  margin-top: 50px;
  margin-left: -10px;
 max-height: 50px;
 max-width: 50px;
 text-align: center;
 align-items: center;
 border-radius: 45%;
 border:#fff;
 box-shadow: 0px 0px 14px -7px #fff; 
}

</style>

<script>

</script>

