<template>
    <button :to="route" class="buttonIcon">
        {{ label }}
       
    </button>
   
  </template>
  
  <script>
  export default {
    name: "ButtonIcon",
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
  .buttonIcon {
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

  .weightIcon{
    display: flex;
    background-color: transparent;
  }
  </style>