<template>
  <main class="">
    <div class="page">
      <div class="content">
        <img class="img-content" src="../img/product2.png" alt="" />
        <h1>
          Nosso <br />
          Melhor <br />
          Produto
        </h1>
        <button
          type="button"
          @click="addCart(product.id)"
          v-b-modal.modal-footer-lg
        >
          <img src="../img/icon-add.svg" alt="" /> ADICIONAR Á SACOLA
        </button>
      </div>
      <div class="bg-img">
        <img src="../img/product2.png" alt="" />
      </div>
    </div>

    <div>
      <div class="mb-1"></div>
    </div>
  </main>
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
      console.log(cart)
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
          })
          .catch((err) => {
            // An error occurred
          });
      }else{
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
  padding: 0;
  margin: 0;
}

.content button .cssOn {
  background-color: #fff;
  border: 999px;
}

.content button img {
  width: 30px;
}

.page {
  display: flex;
  justify-content: center;
  background-color: rgba(205, 223, 223, 0.363);
  width: 100%;
  height: 550px;
}

.img-content {
  display: none;
}

.page .content {
  margin: 30px 0 0 200px;
  display: flex;
  flex-direction: column;
  width: 40%;
}

.page .content h1 {
  font-size: 96px;
  font-weight: 100;
}

.page .content button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-top: 30px;
  width: 250px;
  height: 50px;
  border: none;
  background-color: rgb(12, 94, 66);
  color: #fff;
  font-size: 16px;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  box-shadow: 1px 1px 2px 1px rgb(129, 129, 129);
}

.page .content button:hover {
  background-color: rgb(9, 68, 49);
  transition: 0.3s;
}

.page .bg-img {
  margin: 30px 200px 0 0;
  width: 60%;
  display: flex;
  align-items: center;
}

.page .bg-img img {
  width: 120%;
}

@media screen and (max-width: 821px) {
  .page {
    display: flex;
  }

  .img-content {
    display: none;
  }

  .page .content {
    margin: 50px 0 0 65px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 40%;
  }

  .page .content h1 {
    font-size: 60px;
    font-weight: 100;
  }

  .page .content button {
    cursor: pointer;
    margin-top: 30px;
    border-radius: 4px;
    width: 200px;
    height: 50px;
    border: none;
    background-color: rgb(12, 94, 66);
    color: #fff;
    font-size: 12px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    box-shadow: 1px 1px 2px 1px rgb(129, 129, 129);
  }

  .page .bg-img {
    margin: 50px 65px 0 0;
    display: flex;
    justify-content: center;
  }

  .page .bg-img img {
    margin-top: 65px;
    width: 130%;
  }
}

@media screen and (max-width: 733px) {
  .page .content {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
  }

  .img-content {
    margin: 0;
    padding: 0;
    width: 100%;
    display: block;
    justify-content: center;
    align-items: center;
  }

  .page .content h1 {
    display: none;
  }

  .page .content button {
    margin: 0;
    padding: 0;
    cursor: pointer;
    margin-top: 30px;
    border-radius: 4px;
    width: 100%;
    height: 50px;
    border: none;
    background-color: rgb(12, 94, 66);
    color: #fff;
    font-size: 12px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    box-shadow: 1px 1px 2px 1px rgb(129, 129, 129);
  }

  .page .bg-img {
    display: none;
  }

  .page .bg-img img {
    display: none;
  }
}
</style>
