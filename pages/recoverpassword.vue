<template>
  <div class="page container">
    <div class="content-form">
      <a v-if="btn_before" class="btn-before btn text-light" @click="destiny('login')">Voltar ao login</a>
      <form action="" class="mt-5">
        <div class="form-group">
          <div class="row input-two">
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-4">
              <label for="password">Token</label><br />
              <input class="form-control" name="token" type="text" v-model="token" required />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-4">
              <label for="password">Senha</label><br />
              <input class="form-control" name="password" type="password" v-model="password" required />
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-4">
              <label for="confirmPassword">Confirmar</label><br />
              <input class="form-control" type="password" name="confirmPassword" v-model="confirmPassword" required />
              <p class="text-danger">{{error}}</p>
            </div>
          </div>
        </div>
        <div class="div-btn-send">
          <button type="button" class="btn-send mt-4" @click="handleToRecoverPassword()">Alterar senha</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: "",
      password: "",
      confirmPassword: "",
      error: '',
      btn_before: false
    };
  },

  methods: {
    toDestiny(destiny){
      this.$router.push(`/${destiny}`)
    },
    handleToRecoverPassword(){
      if(
        this.password != this.confirmPassword ||
        this.password == null ||
        this.password == undefined ||
        this.password == "" || 
        this.password == " "
      ){
        this.error = "Verifique os campos"
      }else{
        console.log(this.password)
        const id = this.$route.params
        this.$axios.$put(`recoverpassword`, {password: this.password, token: this.token}).then((data) => {
          console.log(data)
          this.error = ""
          this.btn_before = true
          this.password = ""
          this.confirmPassword = ""
          this.token = ""
          this.toDestiny('login')
        }).catch((err) => {
          console.log(err)
        })
      }
    }
  }
};
</script>




<style scoped>

.btn-before{
  background-color: rgb(12, 94, 66);
}

.page {
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-form form .div-btn-send {
  display: flex;
  align-items: center;
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
