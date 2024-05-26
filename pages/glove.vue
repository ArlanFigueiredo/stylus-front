<template>
  <div>
    <NavAuthenticated v-if="watchNavBarAuthenticated" />
    <NavBar v-if="watchNavBar" />
    <section class="">
      <div class="page-details">
        <div class="img">
          <img src="../img/glove/luva2.png" alt="" />
        </div>
        <div class="content">
          <div class="title">
            <h2>Luva anti-touch</h2>
            <h2 class="money">R$10,00</h2>
            <div class="category">
              <h6>Categoria:</h6>
              <h6>EPI / Tecnologia</h6>
            </div>
            <h6>Disponibilidade em estoque</h6>
            <hr />
          </div>
          <div class="description">
            <p>
              Essas luvas são especialmente úteis em ambientes industriais ou em
              situações onde o contato acidental com dispositivos eletrônicos
              pode causar problemas, como a ativação acidental de comandos em
              máquinas ou equipamentos sensíveis. Fabricadas com materiais
              condutivos especiais, as luvas bloqueiam a transmissão de sinais
              elétricos dos dedos, impedindo que as telas capacitas detectem o
              toque.
            </p>
          </div>
          <div class="buttons">
            <button type="button" @click="addCart(product.id)">
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>




<script>
import auth from "~/middleware/auth";
export default {
  middleware: [auth],

  data() {
    return {
      watchNavBar: true,
      watchNavBarAuthenticated: false,
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
    const verify = localStorage.getItem("authenticated");
    if (verify == "true") {
      this.watchNavBar = false;
      this.watchNavBarAuthenticated = true;
    }

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
section .page-details {
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 50px 100px;
}

.img {
  width: 50%;
}

.img img {
  border-radius: 10px;
  background: #3333335e;
  max-width: 100%;
}
.content {
  width: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title h2 {
  font-size: 25px;
}

.title h2:nth-of-type(2) {
  color: #064630;
  font-size: 22px;
}

.category {
  display: flex;
  flex-direction: row;
  gap: 15px;
}
.category h6 {
  font-size: 14px;
}
.category h6:nth-of-type(2) {
  color: #064630;
}
.title h6 {
  font-size: 14px;
}

.content .description p {
  font-size: 14px;
}

.buttons {
  width: 100%;
}

button {
  background-color: #064630;
  border: none;
  width: 100%;
  height: 40px;
  color: #fff;
  font-size: 15px;
  border-radius: 10px;
}

@media screen and (max-width: 975px) {
  section .page-details {
    display: flex;
    flex-direction: column;
  }
.img {
  width: 100%;
}

.content {
  width: 100%;
}

}
</style>