<template>
  <div class="page container">
    <div class="row content-icons">
      <div class="icons-contact col-12 col-sm-12 col-md-12 col-lg col-xl">
        <div class="div-icons-contact">
          <img src="../img/icon-map.svg" alt="">
        </div>
        <p class="mt-2">Estacio polo prado</p>
      </div>
      <div class="icons-contact col-12 col-sm-12 col-md-12 col-lg col-xl">
        <div class="div-icons-contact">
          <img src="../img/icon-adressEmail.svg" alt="">
        </div>
        <p class="mt-2">foundgroup@comercial.com.br</p>
      </div>
      <div class="icons-contact col-12 col-sm-12 col-md-12 col-lg col-xl">
        <div class="div-icons-contact">
          <img src="../img/icon-phone.svg" alt="">
        </div>
        <p class="mt-2">+55 (31) 9 9999-9999</p>
      </div>
    </div>
    <div class="content-form">
      <form action="" class="mt-5">
        <div class="form-group">
          <div class="row input-two">
            <div class="col-12 col-sm-12 col-md col-lg col-xl mt-4">
              <label for="name" >Nome*</label><br>
              <input class="form-control" type="text" required v-model="name">
            </div>
            <div class="col-12 col-sm-12 col-md col-lg col-xl mt-4">
              <label for="lastName">Sobrenome*</label><br>
              <input class="form-control" type="text" required v-model="lastName">
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-12 col-md col-lg col-xl mt-4">
            <label for="email">Email*</label><br>
            <input class="form-control" type="text" name="email" id="" required v-model="email">
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-sm-12 col-md col-lg col-xl mt-4">
              <label for="message">Mensagem*</label><br>
              <textarea class="form-control"  name="" id="" cols="30" rows="10" required v-model="message"></textarea>
            </div>
          </div>
          <p class="text-danger">{{error}}</p>
        </div>
        <h5 class="text-success">{{ sucess }}</h5>
        <div class="div-btn-send">
          <button type="button" class="btn-send mt-4" @click="handleToContact()">Enviar mensagem</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: '',
      lastName: '',
      email: '',
      message: '',
      error: '',
      sucess: ''
    }
  },

  methods: {
    async handleToContact(){
      // var email = (/\S+@\S+\.\S+/).test(this.email) 

      await this.$axios.$post('sendcontact', {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        message: this.message,
      }).then((data) => {
        this.error = ""
        this.sucess = data.message
        setTimeout(() => {
          this.sucess = ""
          this.name = ""
          this.email = ""
          this.lastName = ""
          this.message = ""
        },2000)
        console.log(data)
      }).catch((err) => {
        this.error = err.response.data.message
        console.log(err.response.data.message)
      })
    }
  }
}
</script>


<style scoped>
.page{
  margin-top: 100px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.content-icons .icons-contact .div-icons-contact{
  box-shadow: 0px 1px 2px  #031a01;
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
.content-icons .icons-contact{
  align-items: center;
}

.content-icons .icons-contact img{
  align-items: center;
  background-color: transparent;
  background-size: 300px;
  width: 25px;
  
}

.icons-contact{
  

  display: flex;
  gap: 10px;
}

.icons-contact p{
  align-items: center;
  font-weight: 500;
  color: #555555bd;
}


.page .content-form{
  align-items: center;
}

.content-form input{
  height: 50px;
  border-radius: 10px;
  background: rgba(117, 117, 117, 0.075);
}

.content-form textarea{
  border-radius: 10px;
  background: rgba(117, 117, 117, 0.075);
}

.content-form input:focus, textarea:focus{
  border: 1px solid rgb(1, 17, 1);
  box-shadow: 0 0 0 0;
  outline: 0;
}
.content-form .btn-send{
  width: 250px;
  height: 50px;
  border-radius: 30px;
  border: 0 none;
  background-color: rgb(12, 94, 66);
  color: #fff;

}

@media screen and (max-width: 821px) {

  .icons-contact{
    padding-top: 20px;
  }

  .content-form form .div-btn-send {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>