<template>
  <div>
    <NavBar />
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
            type="text"
            name=""
            id=""
            placeholder="Seu endereço de e-mail aqui"
            v-model="email"
            
            @keyup.enter="handleCreateToken()"
          />
          <button type="button" @click="handleCreateToken()">
            Se inscrever
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import authenticated from "../middleware/authenticated";
export default {
  middleware: authenticated,
  data() {
    return {
      title: "RECUPERAR SENHA",
      description: "Lembre-se de colocar uma senha forte, o token chegará",
      subdescription: "em sua caixa de entrada",
      email: ''
    };
  },

  methods: {
    async handleCreateToken() {
      console.log(this.email)
      if(this.email != null || this.email != undefined){
        
      }

      await this.$axios
          .$post("password", { email: this.email })
          .then((data) => {
            console.log(data);
            this.title = "TOKEN ENVIADO!";
            this.description = "Token gerado com sucesso, por favor, verifique";
            this.email = ''
            
            setTimeout(() => {
              this.title = "RECUPERAR SENHA"
              this.description = "Lembre-se de colocar uma senha forte, o token chegará "
            },3000)
          })
          .catch((err) => {
            this.title = "Forneça um email válido";
            this.description = "";
            this.subdescription = ""
            this.email = ''
            setTimeout(() => {
              this.title = "RECUPERAR SENHA",
              this.description = "Lembre-se de colocar uma senha forte, o token chegará"
            },3000)
            console.log(err);
          });
    },
  },
};
</script>

<style scoped>
.div-principal {
  margin-top: 15%;
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
  outline: 0;
  box-sizing: border-box;
  border: 0 none;

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
