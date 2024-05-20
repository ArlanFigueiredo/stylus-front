<template>
  <section>
    <div class="page-product container">
      <div class="content-img">
        <img src="../img/glove/luva3.png" alt="" />
      </div>
      <div class="content-info">
        <div class="title">
          <h5 class="">Luva anti-touch</h5>
          SKU: 234234234423
        </div>
        <div class="price">
          Preço unitario
          <h5>R$150,00</h5>
        </div>
        <button type="button" @click="addCart()">Adicionar ao carrinho</button>
        <details>
          <summary>
            <h5>Detalhes do produto</h5>
            <img src="../img/icon-added.svg" alt="" />
          </summary>
          <div class="details">
            <p>
              - As mãos esquerda e direita são intercambiáveis <br>, universais para
              ambas as mãos
            </p>
            <p>
              - Anti-toque, anti-manchas e antiaderente <br> tornam seu processo de
              desenho mais suave.
            </p>
            <p>
              - Ajuda a proteger o seu tablet de desenho <br> da gordura das mãos e
              do suor durante o desenho.
            </p>
            <p>- Reduz o atrito entre suas mãos e as <br> superfícies do tablet.</p>

            <h4><strong>Observações:</strong></h4>
            <p>
              1. Devido a diferenças de monitor e efeitos de luz, a cor real do
              item pode ser ligeiramente diferente da cor mostrada nas imagens.
              Obrigado! <br />
              2. Considere uma diferença de 1 a 3 cm devido à medição manual.
            </p>
          </div>
        </details>
        <hr />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cssCart: "cartOn",
      boxOne: "",
      boxTwo: "",
      product: {
        id: null,
        name: "",
        description: "",
        unit_price: null,
      },
      cart: {
        id: null,
        name: "",
        description: "",
        unit_price: null,
        quantity: null,
      },
    };
  },

  mounted() {
    this.$axios
      .$get("products")
      .then((product) => {
        const products = product.products.products;
        products.forEach((product) => {
          this.product.id = product.id;
          this.product.name = product.name;
          this.product.description = product.description;
          this.product.unit_price = product.unit_price;
        });
        console.log(this.product);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  methods: {
    async addCart(id) {
      const cart = JSON.parse(localStorage.getItem("cartOn"));
      console.log(cart);
      if (!cart) {
        this.cart.id = id;
        this.cart.name = this.product.name;
        this.cart.description = this.product.description;
        this.cart.unit_price = this.product.unit_price;
        this.cart.quantity = 1;
        localStorage.setItem("cartOn", JSON.stringify(this.cart));

        console.log(this.cart);

        this.boxTwo = "";
        this.$bvModal
          .msgBoxOk("Produto adicionado ao carrinho com sucesso!", {
            title: "Comfirmação",
            size: "sm",
            buttonSize: "sm",
            okVariant: "success",
            headerClass: "p-2 border-bottom-0",
            footerClass: "p-2 border-top-0",
            centered: true,
          })
          .then((value) => {
            this.boxTwo = value;
            this.$router.push(`/cart`);
          })
          .catch((err) => {
            // An error occurred
          });
      } else {
        this.boxTwo = "";
        this.$bvModal
          .msgBoxOk("Produto já se encontra em seu carrinho!", {
            title: "Vá para o carrinho!",
            size: "sm",
            buttonSize: "sm",
            okVariant: "success",
            headerClass: "p-2 border-bottom-0",
            footerClass: "p-2 border-top-0",
            centered: true,
          })
          .then((value) => {
            this.boxTwo = value;
            this.$router.push(`/cart`);
          })
          .catch((err) => {
            // An error occurred
          });
      }
    },
  },
};
</script>






<style scoped>
* {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
section {
  margin-top: 100px;
}

.page-product {
  display: flex;
  flex-direction: row;
  gap: 50px;
  padding: 60px 0 0 0;
}

.content-img {
  width: 50%;
  background-color: rgba(238, 238, 238, 0.5);
  border-radius: 3px;
}

.content-img img {
  margin-top: 20px;
  width: 100%;
}

.content-info {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
}

.content-info h5 {
  color: #24252a;
  font-size: 30px;
}

details summary {
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 10px;
}

details summary img {
  width: 25px;
}

button {
  width: 60%;
  border: 0;
  height: 45px;
  background-color: #24252a;
  color: #fff;
  border-radius: 2px;
}

.details h4 {
  margin-top: 15px;
  font-weight: 100;
}

hr {
  background: #24252a;
  width: 100%;
}

@media screen and (max-width: 1100px) {
  .page-product {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }

  .content-img {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
  }

  .content-img img {
    width: 100%;
  }
  .content-info {
    width: 100%;
  }
}
</style>