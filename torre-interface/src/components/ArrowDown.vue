<template>
<button id="scroll-btn">
  <i class="fas fa-chevron-down"></i>
</button>
</template>

<script>

export default {
  methods: {
    scrollDown() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    }
  }
}

</script>

<style>
#scroll-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

#scroll-btn i {
  font-size: 24px;
  color: #000;
}
</style>
