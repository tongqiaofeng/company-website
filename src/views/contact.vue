<template>
  <div>
    <div class="contact-container">
      <div style=" width: 100%;height: 170px;background-color: #1b1f2d;"></div>
      <div class="contact-container-top">
        <Header id="header"></Header>
      </div>
      <div class="contact-container-main">
        <div class="contact-main-left">
          <p class="contact-we">联系我们</p>
          <p style="width: 50px;height: 5px;">
            <img src="../assets/product/in-line.png" style="width: 100%;height: 100%;" />
          </p>
          <div style="margin-top: 100px;display: flex;">
            <div>
              <img src="../assets/contact/phone.png" />
            </div>
            <div>
              <p style="margin-left: 15px;font-size: 16px;text-align:left;">电话/TEL</p>
              <p style="margin-left: 15px;color: #2281e2;font-size: 20px;font-weight: bold;">+86 135 5130 7503</p>
            </div>
          </div>
          <div style="margin-top: 40px;display: flex;">
            <div>
              <img src="../assets/contact/email.png" />
            </div>
            <div>
              <p style="margin-left: 15px;font-size: 16px;text-align:left;">邮箱/MAIL</p>
              <p style="margin-left: 15px;color: #2281e2;font-size: 20px;font-weight: bold;">zeus@wistechx.com</p>
            </div>
          </div>
          <div style="margin-top: 40px;display: flex;">
            <div>
              <img src="../assets/contact/addr.png" />
            </div>
            <div>
              <p style="margin-left: 15px;font-size: 16px;text-align:left;">地址/ADDRESS</p>
              <p style="margin-left: 15px;font-size: 20px;text-align:left;">成都市锦江区明宇金融广场2901A</p>
            </div>
          </div>
        </div>
        <div class="contact-main-right">
          <p style="font-size: 24px;text-align: center;">留言板</p>
          <div style="margin-top: 40px;">
            <span style="font-size: 16px;">姓名</span>
            <input type="text" style="width: 80%;margin-left: 20px;">
          </div>
          <div style="margin-top: 40px;">
            <span style="font-size: 16px;">电话</span>
            <input type="text" style="width: 80%;margin-left: 20px;">
          </div>
          <div style="margin-top: 60px;display: flex;justify-content: space-evenly;">
            <div>
              <span style="font-size: 16px;">留言</span>
            </div>
            <textarea cols="30" rows="10"
              style="width: 80%;height: 100px;border: 1px solid #ddd;outline: none;"></textarea>
          </div>
          <div style="margin-top: 50px;text-align: right;">
            <button style="width: 120px;height: 40px;background-color: #123475;color: #fff;border: none;">提交</button>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>

</template>
<script>
  import Header from "../components/header";
  import Footer from "../components/footer";
  export default {
    components: {
      Header,
      Footer
    },
  }
</script>
<style lang="scss" scoped>
  .contact-container {
    width: 100%;
    position: relative;
  }

  .contact-container-top {
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }

  .contact-container-main {
    width: 100%;
    background-color: #fff;
    background: url('../assets/contact/contact.png') 18% 35% no-repeat;
  }

  input {
    border: none;
    border-bottom: 1px solid #ddd;
    outline: none;
  }

  .contact-we {
    text-align: left;
  }

  @media screen and (min-width: 1781px) {
    .contact-container-main {
      padding: 5% 10%;
      display: flex;
      justify-content: space-between;
    }

    .contact-we {
      font-size: 24px;
    }

    .contact-main-right {
      width: 40%;
      height: 500px;
      padding: 30px 40px;
      background-color: #fff;
      box-shadow: #ddd 0 0 15px 5px;
    }
  }

  @media screen and (min-width: 1200px) and (max-width: 1780px) {
    .contact-container-main {
      padding: 5% 10%;
      display: flex;
      justify-content: space-between;
    }

    .contact-we {
      font-size: 24px;
    }

    .contact-main-right {
      width: 40%;
      height: 500px;
      padding: 30px 40px;
      background-color: #fff;
      box-shadow: #ddd 0 0 15px 5px;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    .contact-container-main {
      padding: 5%;
      display: flex;
      justify-content: space-between;
    }

    .contact-we {
      font-size: 24px;
    }

    .contact-main-right {
      width: 50%;
      height: 500px;
      padding: 30px 40px;
      background-color: #fff;
      box-shadow: #ddd 0 0 15px 5px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .contact-container-main {
      padding: 5%;
    }

    .contact-we {
      font-size: 24px;
    }

    .contact-main-left {
      width: 80%;
      margin: 0 auto;
    }

    .contact-main-right {
      width: 80%;
      height: 500px;
      margin: 0 auto;
      margin-top: 30px;
      padding: 30px 19px;
      background-color: #fff;
      box-shadow: #ddd 0 0 15px 5px;
    }
  }

  @media screen and (max-width: 767px) {
    .contact-container-main {
      padding: 5%;
    }

    .contact-we {
      font-size: 24px;
    }

    .contact-main-left {
      width: 90%;
      margin: 0 auto;
    }

    .contact-main-right {
      width: 95%;
      height: 500px;
      margin: 0 auto;
      margin-top: 30px;
      padding: 30px 19px;
      background-color: #fff;
      /* box-shadow: #ddd 0 0 15px 5px; */
    }
  }
</style>