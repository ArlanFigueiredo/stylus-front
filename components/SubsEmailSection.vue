<template>
  <div class="form-group div-principal container">
    <div class="row content d-flex justify-content-center">
      <div class="col-12 col-md-9 col-sm-12 col-lg-7 col-xl-6 content-title">
        <h1 class="text-light" style="font-weight: 100">{{ title }}</h1>
        <p class="text-light">
          {{ description }} <br />
          {{ subdescription }}
        </p>
      </div>
      <form class="col-12 col-md-9 col-sm-12 col-lg-5 col-xl-6 content-btn">
        <input
          v-model="email"
          type="text"
          name=""
          id="email"
          placeholder="Seu endereço de e-mail aqui"
          required
        />
        <button type="button" @click="handleSendEmail()">Se inscrever</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "INSCREVA-SE AGORA",
      description:
        "Receba as últimas notícias, atualizações e ofertas diariamente",
      subdescription: "em sua caixa de entrada",
      email: "",
    };
  },

  methods: {
    handleSendEmail() {
      this.$axios
        .$post("sendpromotation", { email: this.email })
        .then((data) => {
          console.log(data);
          this.title = "BEM VINDO!";
          this.description =
            "Parabens! Você agora irá receber todas as promoções em";
        })
        .catch((err) => {
          this.title = "Forneça um email valido";
          this.description = "";
          this.subdescription = "";

          setTimeout(() => {
            this.title = "BEM VINDO!";
            this.description =
              "Parabens! Você agora irá receber todas as promoções em";
            this.subdescription = "em sua caixa de entrada";
          }, 3000);
        });
    },
  },
};
</script>

<style scoped>
.errorEmail {
  border: 1px solid red;
}

.div-principal {
  background-color: #24252a;
  padding: 100px 70px;
}

.content-title {
  display: flex;
  flex-direction: column;
}

.content.title p {
  font-size: 17px;
  color: #c1c1c1;
}

.content-btn {
  display: flex;
  align-items: center;
}

.content-btn input {
  width: 400px;
  height: 50px;
  border: none;
  text-decoration: none;
  text-align: center;
}

.content-btn button {
  width: 150px;
  height: 50px;
  text-decoration: none;
  border: none;
  color: #fff;
  background-color: rgb(14, 79, 57);
}

.content-btn button:hover {
  background-color: rgb(12, 94, 66);
}
.content-btn input:focus {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

@media screen and (max-width: 884px) {
  .div-principal {
    justify-content: center;
    background-color: #24252a;
    padding: 100px 20px;
  }

  .content-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-btn input {
    width: 450px;
    height: 50px;
    border: none;
    text-decoration: none;
    text-align: center;
  }

  .content-btn button {
    width: 170px;
    height: 50px;
    text-decoration: none;
    border: none;
    color: #fff;
    background-color: rgb(14, 79, 57);
  }
}
</style>
