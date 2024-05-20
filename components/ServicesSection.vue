<template>
  <section id="services">
    <div class="container">
      <div class="row row-services">
        <div class="content col-12 col-md-12 col-sm-6 col-lg col-xl bg-light">
          <img src="../img/icon_cart.svg" alt="" />
          <div class="title_content">
            <h5>ENTRÉGA GRÁTIS</h5>
            <p>
              Compre qualquer quantidade de produtos e tenha entrega grátis,
              facilitando sua experiência de compra
            </p>
          </div>
        </div>
        <div class="content col-12 col-md-12 col-sm-6 col-lg col-xl bg-light">
          <img class="mb-2" src="../img/icon-medal.svg" alt="" />
          <div class="title_content">
            <h5>QUALIDADE GARANTIDA</h5>
            <p>
              Na interseção entre qualidade e garantia reside a confiança do
              cliente, fundamentada na excelência do produto e sua durabilidade
              assegurada.
            </p>
          </div>
        </div>
        <div class="content col-12 col-md-12 col-sm-6 col-lg col-xl bg-light">
          <img src="../img/icon-coupon.svg" alt="" />
          <div class="title_content">
            <h5>OFERTAS DIARIAS</h5>
            <p>
              Não perca nossas ofertas diárias! Todos os dias, novas oportunidades
              para você economizar e encontrar o que deseja na nossa loja.
            </p>
          </div>
        </div>
        <div class="content col-12 col-md-12 col-sm-6 col-lg col-xl bg-light">
          <img src="../img/icon-security.svg" alt="" />
          <div class="title_content">
            <h5>PAGAMENTO 100% SEGURO</h5>
            <p>
              Com nosso sistema de pagamento 100% seguro, você pode realizar suas
              compras com tranquilidade, garantindo proteção total dos seus dados.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
export default {};
</script>


<style scoped>
* {
  box-sizing: border-box;
}

section{
  padding: 100px 0;
}
.row-services {
  margin: 40px 0;
  gap: 10px;
}

.row-services .content {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  height: 220px;
}
.row-services .content .title_content {
  gap: 10px;
}

.content .title_content h5 {
  margin-top: 5px;
  font-size: 18px;
}

.row-services .content .title_content p {
  text-align: left;
}

.row-services .content img {
  color: aliceblue;
  width: 30px;
}
</style>

