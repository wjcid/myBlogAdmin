<template>
  <div class="main">
      <div class="container a-container" id="a-container">
        <form class="form" id="a-form" method="" action="">
          <h2 class="form_title title">用户注册</h2>
          <input class="form__input" type="text" placeholder="Name">
          <input class="form__input" type="text" placeholder="Phone">
          <input class="form__input" type="password" placeholder="Password" autocomplete>
          <button class="form__button button submit">注册</button>
        </form>
      </div>
      <div class="container b-container" id="b-container">
        <form class="form" id="b-form" method="" action="">
          <h2 class="form_title title">用户登录</h2>
          <input class="form__input" type="text" placeholder="account">
          <input class="form__input" type="password" placeholder="Password" autocomplete><a class="form__link">忘记密码?</a>
          <button class="form__button button submit">登录</button>
        </form>
      </div>
      <div class="switch" id="switch-cnt">
        <div class="switch__circle"></div>
        <div class="switch__circle switch__circle--t"></div>
        <div class="switch__container" id="switch-c1">
          <h2 class="switch__title title">Welcome Admin !</h2>
          <p class="switch__description description">已有账号？请登录</p>
          <button class="switch__button button switch-btn" @click="switch_box">登录</button>
        </div>
        <div class="switch__container is-hidden" id="switch-c2">
          <h2 class="switch__title title">Hello Friend !</h2>
          <p class="switch__description description">没有账号？请注册</p>
          <button class="switch__button button switch-btn" @click="switch_box">注册</button>
        </div>
      </div>
    </div>
</template>
<script  src="./js/script.js"></script>
<script>
export default {
  methods: {
    switch_box() {
      
      let switchCtn = document.querySelector("#switch-cnt");
      let switchC1 = document.querySelector("#switch-c1");
      let switchC2 = document.querySelector("#switch-c2");
      let switchCircle = document.querySelectorAll(".switch__circle");
      let switchBtn = document.querySelectorAll(".switch-btn");
      let aContainer = document.querySelector("#a-container");
      let bContainer = document.querySelector("#b-container");
      let allButtons = document.querySelectorAll(".submit");

      switchCtn.classList.add("is-gx");
      setTimeout(function(){
          switchCtn.classList.remove("is-gx");
      }, 1500)

      switchCtn.classList.toggle("is-txr");
      switchCircle[0].classList.toggle("is-txr");
      switchCircle[1].classList.toggle("is-txr");

      switchC1.classList.toggle("is-hidden");
      switchC2.classList.toggle("is-hidden");
      aContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-txl");
      bContainer.classList.toggle("is-z200");
      
    }
  }
  
}
</script>

<style src="./css/style.css"></style>
