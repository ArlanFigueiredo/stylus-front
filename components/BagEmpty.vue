<template>
  <div class="page">
    <div class="content">
      <img src="../img/icon-bag-empty.svg" alt="" />
      <h6>SACOLA VAZIA</h6>
      <p>Você não possui produtos adicionados à sacola</p>
    </div>
    <div class="div-btn mb-2 container" @click="toDestiny()">
      <button>ADICIONAR PRODUTOS À SACOLA</button>
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
  height: 60vh;
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
.page .div-btn{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.page .div-btn button {
  width: 100%;
  border: none;
  border-radius: 8px;
  height: 40px;
  background-color: rgb(14, 79, 57);
  color: #fff;
  font-size: 14px;
  font-weight: 200;
}

</style>
