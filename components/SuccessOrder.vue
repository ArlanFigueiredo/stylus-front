<template>
  <div class="page">
    <div class="content">
      <img src="../img/icon_cart.svg" alt="" />
      <h6>OBRIGADO POR COMPRAR CONOSCO!</h6>
      <p>Volte sempre!</p>
      <div class="div-btn mb-2" @click="toDestiny()">
        <button>Ver meus pedidos</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toDestiny(){
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.page .content {
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.page .content img {
  width: 150px;
}

.page .content h6{
  font-size: 17px;
  font-weight: 400;
}

.page .content p{
  color: #999999;
}


.page .content .div-btn button {
  width: 150px;
  border: none;
  border-radius: 8px;
  height: 40px;
  background-color: rgb(14, 79, 57);
  color: #fff;
  font-size: 14px;
  font-weight: 200;
}

</style>
