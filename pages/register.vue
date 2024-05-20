<template>
  <div class="">
    <div class="d-lg-flex half">
      <div class="bg order-1 order-md-2 content_img"></div>
      <div class="contents order-2 order-md-1">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7">
              <!-- <div class="icon-left">
                <button class="mb-2" @click="ToLogin()">
                  <img class="" src="../img/icon-left.svg" alt="">
                </button>
              </div> -->
              <h3>Faça login no <strong>STYLUS</strong></h3>
              <p class="mb-4">Faça login e faça sua primeira compra</p>
              <form action="#" method="post">
                <div class="form-group first">
                  <label for="email">Nome</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ errorFormInput: nameError }"
                    placeholder="Informe seu nome"
                    id="name"
                    v-model="name"
                  />
                  <p class="text-danger">{{ errorName }}</p>
                </div>

                <div class="form-group first">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    :class="{ errorFormInput: emailError }"
                    placeholder="seu-email@gmail.com"
                    id="email"
                    v-model="email"
                  />
                  <p class="text-danger">{{ errorEmail }}</p>
                </div>
                <div class="form-group last mb-3">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    :class="{ errorFormInput: passwordError }"
                    placeholder="********"
                    id="password"
                    v-model="password"
                  />
                  <p class="text-danger">{{ errorPassword }}</p>
                </div>

                <div class="form-group last mb-3">
                  <label for="password">Confirmar</label>
                  <input
                    type="password"
                    class="form-control"
                    :class="{ errorFormInput: confirmPasswordError }"
                    placeholder="********"
                    id="confirmPassword"
                    v-model="confirmPassword"
                  />
                  <p class="text-danger">{{ errorConfirmPassword }}</p>
                </div>

                <p class="text-danger">{{ error }}</p>
                <div class="d-flex mb-5 align-items-center">
                  <span class="ml-auto"
                    ><a
                      type="button"
                      class="forgot-pass"
                      @click="toDestiny('login')"
                      >Já tem conta? Faça login
                    </a></span
                  >
                </div>
                <div class="div-loading d-flex justify-content-center">
                  <Loading v-if="openLoading" class="loading mb-2" />
                  <input
                    type="button"
                    value="Entrar"
                    class="btn btn-block btn-dark"
                    @click="register()"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
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
      nameError: false,
      emailError: false,
      passwordError: false,
      confirmPasswordError: false,
      formError: true,
      errorForm: "errorFormInput",
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      openLoading: false,
      errorName: "",
      errorEmail: "",
      errorPassword: "",
      errorConfirmPassword: "",
      error: "",
    };
  },

  methods: {
    toDestiny(destiny) {
      this.$router.push(`/${destiny}`);
    },
    register() {
      // Limpa os erros antes de fazer a requisição
      this.clearErrors();

      // Validação dos campos no frontend
      if (!this.validateInputs()) {
        return;
      }

      this.openLoading = true;

      // Faz a requisição para o backend
      this.$axios
        .$post("users", {
          name: this.name,
          email: this.email,
          password: this.password,
        })
        .then((data) => {
          this.openLoading = false;
          setTimeout(() => {
            this.$router.push("/login");
          }, 1500);
        })
        .catch((err) => {
          this.openLoading = false;

          // Se o erro for relacionado a um usuário já existente, exiba a mensagem de erro
          if (err.response.data.message === "Usuario já existe.") {
            this.error = err.response.data.message;
          } else {
            // Se o erro for proveniente do backend, exiba as mensagens de erro específicas
            this.errorRegister(err);
          }
        });
    },

    validateInputs() {
      // Validação dos campos no frontend
      let isValid = true;

      if (!this.name) {
        this.errorName =
          "Oops! Parece que você esqueceu de preencher o seu nome";
        this.nameError = true;
        isValid = false;
      }
      if (!this.email) {
        this.errorEmail =
          "Não se esqueça do seu email! Ele é essencial para continuarmos.";
        this.emailError = true;
        isValid = false;
      }
      if (!this.password || this.password.length < 6) {
        this.errorPassword =
          "Sua senha deve ter pelo menos 6 caracteres. Não se esqueça de preenchê-la.";
        this.passwordError = true;
        isValid = false;
      }
      if (this.password !== this.confirmPassword) {
        this.errorConfirmPassword =
          "As senhas fornecidas não coincidem. Por favor, verifique e tente novamente.";
        this.confirmPasswordError = true;
        isValid = false;
      }

      return isValid;
    },

    clearErrors() {
      // Limpa os erros antes de fazer a requisição
      this.errorName = "";
      this.nameError = false;
      this.errorEmail = "";
      this.emailError = false;
      this.errorPassword = "";
      this.passwordError = false;
      this.errorConfirmPassword = "";
      this.confirmPasswordError = false;
    },

    errorRegister(err) {
      // Se ocorrerem erros no backend, exiba as mensagens de erro específicas
      if (err.response.data.issues) {
        if (err.response.data.issues.name._errors) {
          this.errorName = err.response.data.issues.name._errors[0];
          this.nameError = true;
        }
        if (err.response.data.issues.email._errors) {
          this.errorEmail = err.response.data.issues.email._errors[0];
          this.emailError = true;
        }
        if (err.response.data.issues.password._errors) {
          this.errorPassword = err.response.data.issues.password._errors[0];
          this.passwordError = true;
        }
      }
    },
  },
};
</script>

<style scoped>
.errorFormInput {
  border: 1px solid red;
}

.div-loading {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #fff;
  z-index: 1;
  margin-top: 250px;
}

p {
  color: #b3b3b3;
  font-weight: 300;
}

h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: "Roboto", sans-serif;
}

a {
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}
a:hover {
  text-decoration: none !important;
}

.content {
  padding: 7rem 0;
}

h2 {
  font-size: 20px;
}

.half,
.half .container > .row {
  height: 100vh;
  min-height: 700px;
}

@media (max-width: 991.98px) {
  .half .bg {
    height: 200px;
  }
}

.half .contents {
  background: #f6f7fc;
}

.half .contents,
.half .bg {
  width: 50%;
}
@media (max-width: 1199.98px) {
  .half .contents,
  .half .bg {
    width: 100%;
  }
}
.half .contents .form-control,
.half .bg .form-control {
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  height: 54px;
  background: #fff;
}
.half .contents .form-control:active,
.half .contents .form-control:focus,
.half .bg .form-control:active,
.half .bg .form-control:focus {
  outline: none;
  -webkit-box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
}

.half .bg {
  background-size: cover;
  background-position: center;
}

.half a {
  color: #888;
  text-decoration: underline;
}

.half .btn {
  height: 54px;
  padding-left: 30px;
  padding-right: 30px;
}

.half .forgot-pass {
  position: relative;
  top: 2px;
  font-size: 14px;
}

.control {
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 15px;
  cursor: pointer;
  font-size: 14px;
}
.control .caption {
  position: relative;
  top: 0.2rem;
  color: #888;
}

.control input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.control__indicator {
  position: absolute;
  top: 2px;
  left: 0;
  height: 20px;
  width: 20px;
  background: #e6e6e6;
  border-radius: 4px;
}

.control--radio .control__indicator {
  border-radius: 50%;
}

.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
  background: #ccc;
}

.control input:checked ~ .control__indicator {
  background: #fb771a;
}

.control:hover input:not([disabled]):checked ~ .control__indicator,
.control input:checked:focus ~ .control__indicator {
  background: #fb8633;
}

.control input:disabled ~ .control__indicator {
  background: #e6e6e6;
  opacity: 0.9;
  pointer-events: none;
}

.control__indicator:after {
  font-family: "icomoon";
  content: "\e5ca";
  position: absolute;
  display: none;
  font-size: 16px;
  -webkit-transition: 0.3s all ease;
  -o-transition: 0.3s all ease;
  transition: 0.3s all ease;
}

.control input:checked ~ .control__indicator:after {
  display: block;
  color: #fff;
}

.control--checkbox .control__indicator:after {
  top: 50%;
  left: 50%;
  margin-top: -1px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.control--checkbox input:disabled ~ .control__indicator:after {
  border-color: #7b7b7b;
}

.control--checkbox input:disabled:checked ~ .control__indicator {
  background-color: #7e0cf5;
  opacity: 0.2;
}

.content_img {
  background-image: url(../img/3.webp);
}

.icon-left button {
  margin-bottom: 10px;
  border: none;
  width: 60px;
  border-radius: 5px;
  background-color: #24252a;
}

.icon-left img {
  width: 25px;
}
</style>
