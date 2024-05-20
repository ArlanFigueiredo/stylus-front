<template>
  <section class="container">
    <div class="page-header">
      <div class="description">
        <h1>Conheça a nossa Luva Anti-Touch</h1>
        <p>Só aqui você encontra novidades</p>
        <button><h5>Ver mais detalhes</h5></button>
      </div>
      <div class="content">
        <img src="../img/glove/glove-3.webp" alt="" />
      </div>
    </div>
  </section>
</template>



<style scoped>
* {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

section {
  margin-top: 60px;
}

.page-header {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}
.page-header .description {
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.page-header .content {
  width: 60%;
}

.page-header .content img {
  width: 100%;
}

button {
  width: 100%;
  border: none;
  height: 50px;
  background-color: #24252a;
  color: #fff;
  text-align: center;
  border-radius: 3px;
}
button h5 {
  margin-top: 5px;
  font-size: 18px;
}

h1 {
  text-align: center;
  font-size: 70px;
}

p{
  text-align: center;
}


@media screen and (max-width: 1200px) {

  .page-header{
    display: flex;
    flex-direction: column;
    background-image: url('../img/glove/glove-3.webp');
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.438);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 100px;
    color: #fff;
  }

  .page-header .content{
    display: none;
  }

  .page-header .description{
    text-align: center;
    margin: 0 60px;
    width: 70%;
    
  }

  h1{
    text-align: center;
    font-size: 50px;
  }

}

@media screen and (max-width: 990px) {

.page-header{width: 100%;}

.page-header .description{
  width: 100%;


}

h1{
  font-size: 40px;
}

}


</style>