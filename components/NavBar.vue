<template>
  <header>
    <nav class="nav-bar">
      <div class="logo">
        <h1>STYLUS</h1>
      </div>
      <div class="nav-list">
        <ul>
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Serviços</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contato</a>
          </li>
        </ul>
      </div>
      <div class="login-button">
        <button @click="toDestiny('login')">
          Entrar
        </button>
      </div>
      <div class="icon-login">
        <img class="img-icon-login" src="../img/icon-bag.svg" alt="" @click="toDestiny('cart')">
      </div>
      <div class="mobile-menu-icon">
        <button @click="menuShow()">
          <img class="icon" v-if="open" src="../img/menu-white.svg"  alt="" />
          <img class="icon" v-if="close" src="../img/close-white.svg" alt="" />
        </button>
      </div>
    </nav>
    <div class="mobile-menu">
      <ul>
        <li class="nav-item">
          <a href="#" class="nav-link">Inicio</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Projetos</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Sobre</a>
        </li>
        <li class="nav-item" >
          <a @click="toDestiny('cart')" class="nav-link">Ver carrinho</a>
        </li>
      </ul>
     
      <div class="login-button">
        <button>
          <a  @click="toDestiny('login')">Entrar</a>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      close: false,
    };
  },

  methods: {
    menuShow() {
      let menuMobile = document.querySelector(".mobile-menu");
      if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        this.open = true,
        this.close = false
      } else {
        menuMobile.classList.add("open");
        this.close = true,
        this.open = false
      }
    },

    toDestiny(destiny){
      this.$router.push(`/${destiny}`);
    },



  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500&display=swap");
* {
  padding: 0;
  margin: 0;
  font-family: "Inter", sans-serif;
}
.icon-login{
  display: flex;
  justify-content: center;
  gap:10px;
}
.icon-login .img-icon-login {
  cursor: pointer;
  background-color: transparent;
  width: 20px;

}

header {
  background-color: #24252a;
  box-shadow: 0px 3px 10px #464646;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 6rem;
}

.logo {
  display: flex;
  align-items: center;
}

.logo h1 {
  color: #fff;
}

.nav-list {
  display: flex;
  align-items: center;
}

.nav-list ul {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 15px;
}

.nav-link {
  text-decoration: none;
  font-size: 1.15rem;
  color: #fff;
  font-weight: 400;
}

.login-button button {
  border: none;
  background-color: rgb(255, 255, 255);
  padding: 10px 25px;
  border-radius: 5px;
}

.login-button button a {
  text-decoration: none;
  color: black;
  font-weight: 500;
}

.mobile-menu-icon {
  display: none;
}

.mobile-menu {
  display: none;
}

@media screen and (max-width: 821px) {

  .img-icon-login{
    display: none;
  }

  .nav-bar {
    display: flex;
    padding: 1.5rem 4rem;
    align-items: center;
  }
  .nav-item {
    display: none;
  }

  .login-button {
    display: none;
  }
  .mobile-menu-icon {
    display: block;
  }

  .mobile-menu-icon button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  .mobile-menu ul {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-bottom: 1rem;
  }

  .mobile-menu .nav-item {
    display: block;
    padding-top: 1rem;
  }

  .mobile-menu .login-button {
    display: block;
    padding: 1rem 2rem;
  }

  .mobile-menu .login-button button {
    width: 100%;
  }

  .open {
    display: block;
  }
}
</style>
