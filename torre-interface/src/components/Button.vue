<template>
    <button :to="route" @click="scrollToTop" class="button" >{{ label }}</button>
  </template>
  
  <script>

  export default {
    methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  },
    name: "Button",
    props: {
    label: {
        type: String,
        required: true,
    },
    route: {
        type: String,
        required: true,
    },

    },
  };
  </script>
  
  <style>
  @import url("https://use.typekit.net/jmq5unc.css");
  .button {
    margin: 5px;
    letter-spacing: 0.5px;
    font-size: 15px;
    border: none;
    padding: 9px 16px;
    background-color: #373b41;
    color: #e6e7e7;
    border-radius: 20px;
    cursor: pointer;
  }
  </style>
  