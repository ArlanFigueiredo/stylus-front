<template>
  <div class="">
    <div class="d-lg-flex half">
      <div class="bg order-1 order-md-2 content_img"></div>
      <div class="contents order-2 order-md-1">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-7">
              <h3>Faça login no <strong>STYLUS</strong></h3>
              <p class="mb-4">Faça login e faça sua primeira compra</p>
              <form action="#" method="post">
                <div class="form-group first">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="seu-email@gmail.com"
                    id="email"
                    v-model="email"
                    @keyup.enter="login()"
                  />
                  <p class="text-danger">{{ errorEmail }}</p>
                </div>
                <div class="form-group last mb-3">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="********"
                    id="password"
                    v-model="password"
                    @keyup.enter="login()"
                  />
                  <p class="text-danger">{{ errorPassword }}</p>
                </div>
                <p class="text-danger">{{ error }}</p>
                <div class="d-flex mb-5 align-items-center">
                  <span class=""
                    ><a type="button" class="forgot-pass" @click="toDestiny('register')"
                      >Não tem conta? cadastre aqui
                    </a></span
                  >
                  <span class="ml-auto"
                    ><a @click="toDestiny('passwordrecover')" class="forgot-pass"
                      >Esqueceu sua senha
                    </a></span
                  >
                </div>
                <div class="div-loading d-flex justify-content-center">
                  <Loading v-if="openLoading" class="loading mb-2" />
                  <input
                    type="button"
                    value="Entrar"
                    class="btn btn-block btn-dark"
                    @click="login()"
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
      email: "",
      password: "",
      openLoading: false,
      errorEmail: "",
      errorPassword: "",
      error: "",
    };
  },

  methods: {
    toDestiny(destiny) {
      this.$router.push(`/${destiny}`);
    },
    login: function () {
      this.openLoading = true;
      this.$axios
        .$post(
          "authenticate",
          {
            email: this.email,
            password: this.password,
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          },
          () => {}
        )
        .then((data) => {
          this.error = "";
          this.errorEmail = "";
          this.errorPassword = "";
          localStorage.setItem("token", data.token);
          localStorage.setItem("authenticated", true);
          setTimeout(() => {
            this.$router.push("/");
          }, 1500);
        })
        .catch((err) => {
          console.log(err.response);
          if (
            err.response.config.data.email == undefined ||
            err.response.config.data.email == null
          ) {
            this.errorEmail = "Forneça um email autentico.";
          }
          if (
            err.response.config.data.password == undefined ||
            err.response.config.data.password == null
          ) {
            this.errorPassword = "Verifique o campo password.";
          }
          if (err.response.data.message) {
            this.error = err.response.data.message;
          }
          if (
            this.email == null ||
            this.email == undefined ||
            this.email == "" ||
            this.email == " "
          ) {
            this.errorEmail = "Verifique o campo.";
          }
          if (
            this.password == null ||
            this.password == undefined ||
            this.password == "" ||
            this.password == " "
          ) {
            this.errorPassword = "Verifique o campo";
          }
          this.errorEmail = "";
          this.errorPassword = "";
          this.openLoading = false;
        });
    },
  },
};
</script>

<style scoped>
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
  border: none;
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
</style>
