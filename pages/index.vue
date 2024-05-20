<template>
  <div>
    <NavAuthenticated v-if="watchNavBarAuthenticated" />
    <NavBar v-if="watchNavBar" />
    <!-- <HeaderSection /> -->
    <HeaderSection1/>
    <ProductSection/>
    <CarrouselSection/>
    <ServicesSection />
    <SubsEmailSection />
    <FormContact/>
    <FooterSection />
    <ModalCreate />
  </div>
</template>

<script>
import auth from "~/middleware/auth";

export default {
  middleware: [auth],

  data() {
    return {
      email: "",
      password: "",
      watchNavBar: true,
      watchNavBarAuthenticated: false,
    };
  },

  mounted() {
    const verify = localStorage.getItem("authenticated");
    if (verify == "true") {
      this.watchNavBar = false;
      this.watchNavBarAuthenticated = true;
    }
  },

  methods: {
    login: function () {
      this.$axios
        .$post(
          "http://localhost:3333/authenticate",
          {
            email: this.email,
            password: this.password,
            Headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          },
          () => {}
        )
        .then((data) => {
          localStorage.setItem("token", data.token);
          console.log(data.token);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.page img {
  position: absolute;
  overflow: hidden;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 360px;
  z-index: -1;
}

.page nav {
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 30px;
  margin-top: 40x;
  gap: 350px;
}

.page nav .brand-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.page nav .brand-logo img {
  width: 45px;
  height: 45px;
}

.page nav .brand-logo h5 {
  font-family: monospace;
  font-weight: 900;
}

.page nav ul {
  display: flex;
  gap: 40px;
}

.page nav ul li {
  text-decoration: none;
  list-style: none;
}

.page nav ul li a {
  text-decoration: none;
  color: black;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
}

.page nav ul li a:hover {
  color: #505050;
}

.page nav ul li .bag {
  width: 30px;
  display: flex;
  border: none;
  background: transparent;
}
.page nav ul li .bag p {
  width: 11px;
  position: absolute;
  margin-left: 15px;
  border-radius: 10px;
  background: rgb(0, 0, 0);
  color: #fff;
  font-size: 8px;
}

.page nav ul li .bag:hover {
  color: #505050;
}

.page nav ul li .search {
  width: 30px;
  display: flex;
  border: none;
  background: transparent;
  color: #818181;
}
.page nav ul li .search p {
  width: 12px;
  position: absolute;
  margin-left: 20px;
  border-radius: 10px;
  background: rgb(133, 133, 133);
  color: #fff;
  font-size: 10px;
}

.page nav ul li .search:hover {
  color: #505050;
}

.icons {
  display: flex;
  justify-content: center;
  gap: 12px;
}

.login {
  display: flex;
  justify-content: center;
  margin-top: 350px;
}

.login .content-login img {
  position: static;
  max-width: 500px;
  z-index: -1;
}

.login .form-login input {
  border: none;
}

.login .form-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login .form-login input:focus,
input:hover {
  box-shadow: 0 0 0 0;
  border: 0 none;
  outline: 0;
}

.btn-login {
  width: 250px;
  height: 50px;
  border: none;
  background: #ffa53e;
}

footer {
  margin-top: 70px;
  height: 300px;
}

.content-login {
  align-items: center;
  z-index: 1;
}
</style>
