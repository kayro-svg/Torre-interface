<script setup>
import { RouterView } from 'vue-router';
import TorreHeader from './components/TorreHeader.vue';
import Button from './components/Button.vue';
import { RouterLink } from 'vue-router';

</script>

<template>
  <TorreHeader/>
  <RouterView />

  <div class="skills-interests">
  <div class="subtittle">
    <h2>Skills and interests:</h2><br>
  </div>

  <div class="buttons">

  <div class="master-influencer">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M16 1.2c-1 0-1.8.8-1.8 1.8S15 4.8 16 4.8S17.8 4 17.8 3S17 1.2 16 1.2m-3.6 2.9c-.47 0-.9.19-1.2.5L7.5 8.29C7.19 8.6 7 9 7 9.5c0 .63.33 1.16.85 1.47L11.2 13v5H13v-6.5l-2.25-1.65l2.32-2.35L14.8 10H19V8.2h-3.2l-1.94-3.27c-.29-.5-.86-.83-1.46-.83M10 3H3c-.55 0-1-.45-1-1s.45-1 1-1h9.79c-.21.34-.38.71-.47 1.11c-.86.02-1.67.34-2.32.89m-5 9c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 8.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5M19 12c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 8.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5M5.32 11H1c-.552 0-1-.45-1-1s.448-1 1-1h4.05c-.02.16-.05.33-.05.5c0 .53.12 1.04.32 1.5M6 7H2c-.55 0-1-.45-1-1s.45-1 1-1h5.97L6.09 6.87C6.05 6.91 6 6.96 6 7Z"/></svg>
    <h2>Master / Influencer</h2><br><br>
  </div>
<RouterLink to="/jobsrelated">
  <Button label="Resourcefulness" route="/JobsRelated.vue"></Button>
</RouterLink>
    <Button label="Attention to detail" route="/JobsRelated.vue"></Button>
    <Button label="Commitment" route="/JobsRelated.vue"></Button>
    <Button label="Consistency" route="/JobsRelated.vue"></Button>

  <div class="sections">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#a9a9ab" d="M13 23v-6l-2.1-2l-1 4.4L3 18l.4-2l4.8 1l1.6-8.1l-1.8.7V13H6V8.3l3.95-1.7q.875-.375 1.288-.487T12 6q.525 0 .975.275T13.7 7l1 1.6q.65 1.05 1.763 1.725T19 11v2q-1.65 0-3.088-.688T13.5 10.5l-.6 3l2.1 2V23h-2Zm.5-17.5q-.825 0-1.413-.588T11.5 3.5q0-.825.588-1.413T13.5 1.5q.825 0 1.413.588T15.5 3.5q0 .825-.588 1.413T13.5 5.5Z"/></svg>
    <h2>Proficient</h2><br><br>
  </div>

  <Button label="Critical thinking" route="/JobsRelated.vue"> </Button>
    <Button label="Programming logic" route="/JobsRelated.vue"></Button>
    <Button label="Web development" route="/JobsRelated.vue"></Button>
    <Button label="Front-end development" route="/JobsRelated.vue"></Button>

    <div class="sections">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#a9a9ab" d="M14.12 10H19V8.2h-3.62l-2-3.33c-.3-.5-.84-.84-1.46-.84c-.18 0-.34.03-.5.08L6 5.8V11h1.8V7.33l2.11-.66L6 22h1.8l2.87-8.11L13 17v5h1.8v-6.41l-2.49-4.54l.73-2.87M14 3.8c1 0 1.8-.8 1.8-1.8S15 .2 14 .2S12.2 1 12.2 2S13 3.8 14 3.8Z"/></svg>
    <h2>Beginner</h2><br><br>
    </div>

    <Button label="Vue.js" route="/JobsRelated.vue"></Button>
    <Button label="Reactive programming" route="/JobsRelated.vue"></Button>

   
    <div class="sections">
    <svg width="24" height="24" viewBox="0 0 24 24"><path fill="#a9a9ab" d="M18.5,4A2.5,2.5 0 0,1 21,6.5A2.5,2.5 0 0,1 18.5,9A2.5,2.5 0 0,1 16,6.5A2.5,2.5 0 0,1 18.5,4M4.5,20A1.5,1.5 0 0,1 3,18.5A1.5,1.5 0 0,1 4.5,17H11.5A1.5,1.5 0 0,1 13,18.5A1.5,1.5 0 0,1 11.5,20H4.5M16.09,19L14.69,15H11L6.75,10.75C6.75,10.75 9,8.25 12.5,8.25C15.5,8.25 15.85,9.25 16.06,9.87L18.92,18C19.2,18.78 18.78,19.64 18,19.92C17.22,20.19 16.36,19.78 16.09,19Z"></path></svg>
    <h2>Not experienced, but interested</h2><br><br>
    </div>
    <Button label="API integration" route="/JobsRelated.vue"></Button>
    <Button label="Artificial Intelligence" route="/JobsRelated.vue"></Button>

    <div class="sections">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#a9a9ab" d="M11 1H3c-1.1 0-2 .9-2 2v12l3-3h5v-1c0-2.2 1.79-4 4-4V3c0-1.1-.9-2-2-2m0 3H9.5c-.34 1.19-.96 2.3-1.82 3.26l-.02.02l1.26 1.25l-.37 1.01L7 8l-2.5 2.5l-.69-.73l2.53-2.49A8.58 8.58 0 0 1 4.86 5h.99c.31.6.69 1.17 1.15 1.68A7.69 7.69 0 0 0 8.57 4H3V3h3.5V2h1v1H11v1m10 5h-8c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h7l3 3V11c0-1.1-.9-2-2-2m-1.37 10l-.85-2.25h-3.56L14.38 19h-1.5l3.37-9h1.5l3.38 9h-1.5M17 12l1.22 3.25h-2.43L17 12Z"/></svg>
    <h2>Languages </h2><br><br>
    </div>
    <Button label="Spanish - Native or Fully fluent" route="/JobsRelated.vue"></Button>
    <Button label="English - Conversational" route="/JobsRelated.vue"></Button>
    
  </div>
</div>

</template>

<style lang="scss">
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

 .userName {
      color: #fff;
      text-align: center;
    }h1{
      font-size: 27px;
    }

    .skills-interests{
      margin-left: 10px;
    }
    .subtittle{
      color: #e6e7e7;
      font-weight: 100;
      font-size: 13px;
    }
    .master-influencer{
      margin-left: 0px;
      color: #a9a9ab;
      font-weight: 800;
        font-size: 12px;
        display: flex;
        align-items: center;
        letter-spacing: 0.4px;
    }svg{
      margin-right: 3px;
    }h2{
      margin-left: 0px;

    }
    .sections{
      margin-top: 20px;
      margin-left: 0px;
      color: #a9a9ab;
      font-weight: 800;
        font-size: 12px;
        display: flex;
        align-items: center;
        letter-spacing: 0.4px;

    }svg{
      margin-right: 3px;
    }h2{
      margin-left: 3px;}

.buttons{
  margin-left: 0px;
}

</style>

<script>

export default {
  components: {
    Button,
  },
};
</script>
