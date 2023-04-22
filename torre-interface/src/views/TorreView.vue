<script setup>

</script>

<template>
  <main>
    <div class="hexagonal-bg">
    <div class="hexagonal-profile">
      <img src="../assets/images/perfil.png" alt="#" class="hexagonal-img">
    </div>
  </div>
  </main>
</template>

<style lang="scss" scoped>

.hexagonal-bg{
  background-color: #5e626b;
  border-radius: 20px solid #fff; /* Establece el borde del hexágono */
  position: relative;
  width: 180px;
  height: 199px;
  margin: 20px auto;
  clip-path: polygon(50% 2%, 99% 25%, 99% 73%, 50% 95%, 2% 74%, 2% 25% );
}
.hexagonal-profile {
  margin-top: 20px;
  border-radius: 20px solid #fff; /* Establece el borde del hexágono */
  position: relative;
  width: 160px;
  height: 180px;
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
    
</style>