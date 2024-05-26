<template>
  <div>
    <NavAuthenticated/>
    <div class="container">
      <SuccessOrder v-if="successOrder" />
      <div class="container" v-if="form1">
        <BagEmpty v-if="bagOn" />
        <div v-if="cartOn" class="page mt-5">
          <div class="page-item">
            <div class="row item">
              <div class="content-principal col col-md">
                <img src="../img/glove/luva3.png" alt="" />
              </div>
              <div class="content-principal col col-md">
                <div class="content">
                  <p>{{ product.description }}</p>
                  <h6>R${{ product.unit_price }},00</h6>
                </div>
              </div>
            </div>
            <div class="func-product">
              <div class="quantity">
                <div class="img-add">
                  <button type="button" @click="subQuantity()">-</button>
                </div>
                <div class="count-quantity">
                  <button>{{ product.quantity }}</button>
                </div>
                <div class="img-sub">
                  <button type="button" @click="sumQuantity()">+</button>
                </div>
              </div>
              <div class="remove" @click="remoteProduct()">
                <h6>REMOVER ITEM</h6>
              </div>
            </div>
          </div>

          <div class="cupom">
            <div></div>
            <input
              class="text-center"
              type=""
              name=""
              id=""
              placeholder="Aplique seu cupom aqui"
              v-model="insertCupom"
              @keyup.enter="addCupom()"
            />
            <button type="button" @click="addCupom()">Aplicar</button>
          </div>
          <p class="text-danger text-center">{{ errorCupom }}</p>

          <div class="total">
            <p>Subtotal</p>
            <p>R$ {{ product.subtotal }},00</p>
          </div>

          <div class="info">
            <p>Frete</p>
            <div class="frete mb-2">
              <img src="../img/icon-caminhao.svg" alt="" />
              <h6>Frete gratis só aqui</h6>
            </div>
            <div class="descount">
              <h6>Descontos</h6>
              <h6>R$ {{ product.descount }}</h6>
            </div>
            <div class="total_price">
              <h6>Total</h6>
              <h6>R${{ product.total_price }}</h6>
            </div>
          </div>
          <!-- <button type="button" class="btn_orther" @click="createOrder()">
          Finalizar pedido de compra
        </button> -->
        </div>
      </div>

      <div class="container" v-if="form2">
        <div class="page">
          <div class="search">
            <input
              type="text"
              class="form-control search_cep"
              placeholder="PESQUISAR ENDEREÇO POR CEP"
              v-model="searchCep"
              @keyup.enter="findCep()"
            />
            <button type="button" @click="findCep()">
              <img src="../img/icon-search.svg" alt="" />Buscar
            </button>
          </div>
          <div class="content-form">
            <form action="" class="mt-5">
              <div class="form-group">
                <div class="row input-two">
                  <div class="col-12 col-sm-12 col-md col-lg col-xl mt-4">
                    <label for="cep">Cep*</label><br />
                    <input
                      class="form-control"
                      :class="{ errorFormInput: cepError }"
                      name="cep"
                      type="text"
                      required
                      v-model="cep"
                    />
                  </div>
                  <div class="col-12 col-sm-12 col-md col-lg col-xl mt-4">
                    <label for="logradouro">Logradouro*</label><br />
                    <input
                      class="form-control"
                      :class="{ errorFormInput: logradouroError }"
                      type="text"
                      name="logradouro"
                      required
                      v-model="logradouro"
                    />
                  </div>
                </div>
                <div class="row">
                  <div
                    class="col-12 col-sm-12 col-md-12 col-lg-2 col-xl-2 mt-4"
                  >
                    <label for="numero">Numero*</label><br />
                    <input
                      class="form-control"
                      :class="{ errorFormInput: numeroError }"
                      type="text"
                      name="numero"
                      id=""
                      required
                      v-model="numero"
                    />
                  </div>
                  <div class="col-12 col-sm-12 col-md col-lg col-xl mt-4">
                    <label for="bairro">Bairro*</label><br />
                    <input
                      class="form-control"
                      :class="{ errorFormInput: bairroError }"
                      type="text"
                      name="bairro"
                      id=""
                      required
                      v-model="bairro"
                    />
                  </div>
                </div>
                <div class="row input-two">
                  <div class="col-12 col-sm-12 col-md col-lg col-xl mt-4">
                    <label for="name">Estado*</label><br />
                    <input
                      class="form-control"
                      :class="{ errorFormInput: estadoError }"
                      type="text"
                      required
                      v-model="estado"
                    />
                  </div>
                  <div class="col-12 col-sm-12 col-md col-lg col-xl mt-4">
                    <label for="lastName">Municipio*</label><br />
                    <input
                      class="form-control"
                      :class="{ errorFormInput: municipioError }"
                      type="text"
                      required
                      v-model="municipio"
                    />
                  </div>
                </div>
                <p class="text-danger">{{ error }}</p>
              </div>
              <h5 class="text-success">{{ sucess }}</h5>
            </form>
          </div>
        </div>
      </div>
      <div class="container" v-if="form3">
        <section>
          <div v-if="cartOn" class="page mt-5">
            <div class="page-item">
              <div class="row item">
                <div class="content-principal col col-md">
                  <img src="../img/glove/luva3.png" alt="" />
                </div>
                <div class="content-principal col col-md">
                  <div class="content">
                    <p>{{ product.description }}</p>
                    <h6>R${{ product.unit_price }},00</h6>
                  </div>
                </div>
              </div>
            </div>
            <div class="info">
              <div class="descount">
                <h6>Descontos</h6>
                <h6>R$ {{ product.descount }}</h6>
              </div>
              <div class="total_price">
                <h6>Total</h6>
                <h6>R${{ product.total_price }}</h6>
              </div>
            </div>

            <div class="info_adress">
              <div class="adress">
                <h6>Cep</h6>
                <p>{{ cep }}</p>
                <h6>Logradouro</h6>
                <p>{{ logradouro }}</p>
                <h6>Numero</h6>
                <p>{{ numero }}</p>
                <h6>Bairro</h6>
                <p>{{ bairro }}</p>
                <h6>Estado</h6>
                <p>{{ estado }}</p>
                <h6>Cidade</h6>
                <p>{{ municipio }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="onLoading">
        <Loading v-if="onLoading" class="mb-4" />
      </div>
      <div class="after_prev">
        <button class="btn_before" v-if="before" type="button" @click="voltar">
          Voltar
        </button>
        <button class="btn_after" v-if="after" type="button" @click="proximo">
          Proximo
        </button>
        <button
          class="btn_confirm"
          v-if="confirmBag"
          type="button"
          @click="createOrder"
        >
          Confirmar pedido
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      cepError: false,
      logradouroError: false,
      numeroError: false,
      bairroError: false,
      estadoError: false,
      municipioError: false,
      searchCep: "",
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      estado: "",
      municipio: "",
      error: "",
      sucess: "",
      input1: "",
      input2: "",
      input3: "",
      onLoading: false,
      successOrder: false,
      confirmBag: false,
      form1: true,
      form2: false,
      form3: false,
      after: true,
      before: false,
      cartOn: null,
      bagOn: null,
      watchNavBar: true,
      watchNavBarAuthenticated: false,
      nameCupom: "ABRIL30",
      insertCupom: "",
      errorCupom: "",
      discount_type: "",
      discount_Value: null,
      coupon_id: "",
      product: {
        id: "",
        name: "",
        description: "",
        unit_price: null,
        quantity: null,
        total_price: null,
        subtotal: null,
        cupom: 0,
        descount: null,
      },
    };
  },
  mounted() {
    console.log(this.product);
    this.valor = this.quantity * 150;

    let productString = localStorage.getItem("cartOn");
    let productObj = JSON.parse(productString);

    if (productObj != null) {
      this.cartOn = true;
      this.bagOn = false;
      this.product.id = productObj.id;
      this.product.name = productObj.name;
      this.product.description = productObj.description;
      this.product.quantity = productObj.quantity;
      this.product.unit_price = productObj.unit_price;
      const price_total = productObj.quantity * productObj.unit_price;
      this.product.descount =
        (this.product.quantity * this.product.unit_price * this.product.cupom) /
        100;
      this.product.total_price = price_total;
      this.product.subtotal = productObj.quantity * productObj.unit_price;
    } else {
      this.bagOn = true;
      this.after = false;
      this.cartOn = false;
    }

    const verify = localStorage.getItem("authenticated");
    if (verify == "true") {
      this.watchNavBar = false;
      this.watchNavBarAuthenticated = true;
    }
  },
  methods: {
    sumQuantity() {
      this.product.quantity = this.product.quantity + 1;
      console.log(this.product.quantity);
      this.sumSubTotal();
      console.log(this.discount_type);
      this.sumTotal(this.discount_type);
    },

    subQuantity() {
      if (this.product.quantity > 1) {
        this.product.quantity = this.product.quantity - 1;
        this.sumSubTotal();
        this.sumTotal(this.discount_type);
      }
    },

    sumSubTotal() {
      this.product.subtotal = this.product.quantity * this.product.unit_price;
    },

    sumTotal(discount_type) {
      const priceTotal = this.product.quantity * this.product.unit_price;
      this.product.descount =
        (this.product.quantity * this.product.unit_price * this.product.cupom) /
        100;
      this.product.total_price =
        priceTotal -
        (this.product.quantity * this.product.unit_price * this.product.cupom) /
          100;

      if (discount_type == "fixed") {
        const priceTotal = this.product.quantity * this.product.unit_price;
        this.product.descount = this.product.cupom;
        this.product.total_price =
          this.product.quantity * this.product.unit_price - this.product.cupom;
      }
      if (discount_type == "percent") {
        const priceTotal = this.product.quantity * this.product.unit_price;
        this.product.descount =
          (this.product.quantity *
            this.product.unit_price *
            this.product.cupom) /
          100;
        this.product.total_price =
          priceTotal -
          (this.product.quantity *
            this.product.unit_price *
            this.product.cupom) /
            100;
      }
    },

    addCupom() {
      this.$axios
        .$get(`coupon/${this.insertCupom}`)
        .then((data) => {
          console.log(data);
          this.product.cupom = data.coupon.coupon.discount_value;
          const discount_type = data.coupon.coupon.discount_type;
          this.discount_type = discount_type;
          this.discount_Value = data.coupon.coupon.discount_value;
          this.coupon_id = data.coupon.coupon.id;
          this.sumTotal(discount_type);
          this.errorCupom = "";
          this.insertCupom = "";
        })
        .catch((err) => {
          this.errorCupom = "Este cupom não existe!";
        });

      // if(this.insertCupom == 'ABRIL30'){
      //   this.product.cupom = 30
      //   this.sumTotal()
      //   this.insertCupom = ''
      //   this.errorCupom = ''
      // }else{
      //   this.errorCupom = 'Este cupom não existe!'
      // }
      // console.log(this.insertCupom)
    },

    async createOrder() {
      this.onLoading = true;
      const user = await this.$axios
        .$get(
          "me",
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          },
          () => {}
        )
        .then(async (data) => {
          if (this.discount_Value == null || this.discount_Value <= 0) {
            this.discount_Value = 0;
          }
          console.log(`
            Esse é o ID do produto ${this.product.id}
          `)
          await this.$axios
            .$post(`order/${this.product.id}/${data.user.id}`, {
              quantity_product: this.product.quantity,
              total_price: this.product.total_price,
              subtotal: this.product.subtotal,
              discount_value_total: this.product.descount,
              coupon_id: this.coupon_id,
            })
            .then((data) => {
              this.successOrder = true;
              this.form3 = false;
              this.after = false;
              this.before = false;
              this.confirmBag = false;
              this.onLoading = false;
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
          this.$router.push("/login");
        });
    },
    remoteProduct() {
      localStorage.removeItem("cartOn");
      this.cartOn = false;
      this.after = false;
      this.bagOn = true;
    },

    findCep() {
      console.log(this.cep);
      this.$axios
        .$get(`https://viacep.com.br/ws/${this.searchCep}/json/`)
        .then((data) => {
          console.log(data);
          this.searchCep = "";

          (this.cep = data.cep),
            (this.logradouro = data.logradouro),
            (this.bairro = data.bairro),
            (this.estado = data.uf),
            (this.municipio = data.localidade);
        })
        .catch((err) => {
          console.log(err);
          if (err.erro) {
            console.log("Algo está errado com a solicitação");
          }
        });
    },

    proximo() {
      this.cepError = false;
      this.logradouroError = false;
      this.numeroError = false;
      this.bairroError = false;
      this.estadoError = false;
      this.municipioError = false;
      if (this.form1 == true) {
        this.form2 = true;
        this.form1 = false;
        console.log(this.form1 + "" + this.form2);
      } else if (this.form2 == true && this.form1 == false) {
        if (this.cep == undefined || this.cep == null || this.cep == "") {
          this.cepError = true;
        } else if (
          this.logradouro == undefined ||
          this.logradouro == null ||
          this.logradouro == ""
        ) {
          this.logradouroError = true;
        } else if (
          this.numero == undefined ||
          this.numero == null ||
          this.numero == ""
        ) {
          this.numeroError = true;
        } else if (
          this.bairro == undefined ||
          this.bairro == null ||
          this.bairro == ""
        ) {
          this.bairroError = true;
        } else if (
          this.estado == undefined ||
          this.estado == null ||
          this.estado == ""
        ) {
          this.estadoError = true;
        } else if (
          this.municipio == undefined ||
          this.municipio == null ||
          this.municipio == ""
        ) {
          this.municipioError = true;
        } else {
          this.form3 = true;
          this.confirmBag = true;
          this.form2 = false;
        }
      }

      if (this.form1 == false && this.form2 == true) {
        this.before = true;
      }

      if (this.form1 == false && this.form2 == false && this.form3 == true) {
        this.after = false;
      }
    },

    voltar() {
      if (this.form3 == true) {
        this.form3 = false;
        this.form1 = false;
        this.form2 = true;
        this.after = true;
        this.confirmBag = false;
      } else if (this.form2 == true) {
        this.form2 = false;
        this.form1 = true;
        this.before = false;
      }
    },
  },
};
</script>

<style scoped>
.errorFormInput {
  border: 1px solid red;
}

.onLoading {
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
}

.btn_before {
  width: 100px;
  border: none;
  height: 40px;
  border-radius: 8px;
  background-color: rgb(14, 79, 57);
  color: #fff;
}

.btn_after {
  width: 100px;
  border: none;
  height: 40px;
  border-radius: 8px;
  background-color: rgb(14, 79, 57);
  color: #fff;
}

.btn_confirm {
  width: 150px;
  border: none;
  height: 40px;
  border-radius: 8px;
  background-color: rgb(14, 79, 57);
  color: #fff;
}

.container .after_prev {
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.page .cupom {
  margin: 5px 0;
  display: flex;
}

.page .cupom input {
  border-radius: 8px 0 0 8px;
  width: 250px;
  text-decoration: none;
  border: none;
  background-color: #f1f1f1a1;
  width: 70%;
}

.page .cupom input:focus {
  text-align: center;
  outline: 0;
  text-decoration: none;
  border: none;
}

.page .cupom button {
  height: 40px;
  border: none;
  width: 30%;
  border-radius: 0 8px 8px 0;
  background-color: rgb(14, 79, 57);
  color: #fff;
}

.page {
  margin: 20px 20px;
}

.page .btn_orther {
  width: 100%;
  height: 50px;
  border: none;
  background-color: rgb(14, 79, 57);
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
}

.page .btn_orther:hover {
  background-color: rgb(6, 70, 48);
}

.page .descount {
  display: flex;
  margin-top: 5px;
  justify-content: space-between;
  align-items: center;
}

.page .descount h6 {
  font-size: 15px;
  font-weight: 500;
  color: green;
}

.page .info_adress {
  display: flex;
  margin: 5px 0;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 8px;
  gap: 10px;
  background-color: #f1f1f1a1;
}

.page .info .total_price {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page .total_price h6 {
  font-size: 15px;
  font-weight: 500;
}

.page .info {
  display: flex;
  margin: 5px 0;
  flex-direction: column;
  padding: 10px 20px;
  border-radius: 8px;
  gap: 10px;
  background-color: #f1f1f1a1;
}

.page .info .frete {
  display: flex;
  align-items: center;
  gap: 15px;
}

.page .info .frete img {
  width: 25px;
}

.page .info .frete h6 {
  font-size: 15px;
  font-weight: 500;
}

.page .total {
  margin-top: 5px;
  padding: 10px 20px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1a1;
}

.page .total p {
  font-size: 15px;
  font-weight: 500;
}

.page-item {
  background-color: #f1f1f1a1;
  padding: 20px 20px;
  border-radius: 8px;
}

.quantity {
  gap: 1px;
}

.quantity div {
  border-radius: 5px;
}

.quantity button {
  background-color: #fff;
  border: none;
  text-decoration: none;
  width: 40px;
  height: 30px;
  font-size: 15px;
  font-weight: 500;
}

.quantity button:hover {
  background-color: #24252a;
  color: #fff;
  transition: 0.3s;
}

.remove h6 {
  font-size: 12px;
}

.func-product .quantity {
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.func-product {
  margin: 0 30px 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.func-product img {
  width: 20px;
}

.item .content-principal img {
  margin: 10px 0 0 15px;
  width: 100px;
}

.item {
  margin: 20px 20px;
}

.item .content-principal .content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/*












*/

.page .search {
  margin-top: 30px;
  display: flex;
  width: 100%;
}

.page .search button img {
  width: 30px;
}

.page .search button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid;
  border-radius: 0 8px 8px 0;
  width: 200px;
  height: 50px;
}

.page .search input {
  text-align: center;
  border: 1px solid;
  box-shadow: black;
  width: 100%;
  height: 50px;
  border-radius: 8px 0 0 8px;
  background: rgba(117, 117, 117, 0.075);
}

.page .search input:focus {
  border: 1px solid rgb(1, 17, 1);
  box-shadow: 0 0 0 0;
  outline: 0;
}

.page {
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content-icons .icons-contact .div-icons-contact {
  box-shadow: 0px 1px 2px #031a01;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 40px;
  background-color: rgb(12, 94, 66);
  border-radius: 6px;
}

.content-icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-icons .icons-contact {
  align-items: center;
}

.content-icons .icons-contact img {
  align-items: center;
  background-color: transparent;
  background-size: 300px;
  width: 25px;
}

.icons-contact {
  display: flex;
  gap: 10px;
}

.icons-contact p {
  align-items: center;
  font-weight: 500;
  color: #555555bd;
}

.page .content-form {
  align-items: center;
}

.content-form input {
  height: 50px;
  border-radius: 10px;
  background: rgba(117, 117, 117, 0.075);
}

.content-form textarea {
  border-radius: 10px;
  background: rgba(117, 117, 117, 0.075);
}

.content-form input:focus,
textarea:focus {
  border: 1px solid rgb(1, 17, 1);
  box-shadow: 0 0 0 0;
  outline: 0;
}
.content-form .btn-send {
  width: 250px;
  height: 50px;
  border-radius: 30px;
  border: 0 none;
  background-color: rgb(12, 94, 66);
  color: #fff;
}

@media screen and (max-width: 821px) {
  .icons-contact {
    padding-top: 20px;
  }

  .content-form form .div-btn-send {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
