<template>
  <div>
    <div class="technology-container">
      <div style="width: 100%;" id="down_height">
        <img src="../assets/technology/background01.png" class="technology-img" style="width: 100%;" />
      </div>
      <div class="technology-container-top">
        <Header id="header"></Header>
        <div class="top-font">
          <p class="top-font-one" style="color: #fff;">“最有腔调”的现代化综合体</p>
        </div>
        <div class="top-font">
          <p class="top-font-two" style="color: #fff;">A MODERN COMPLEX WITH "THE MOST ACCENT"</p>
        </div>
        <div class="animate">
          <div class="animate-bounce-down">
            <div>
              <img src="../assets/technology/down.png" id="down_img" style="cursor: pointer;" />
            </div>
          </div>
        </div>
      </div>
      <div class="technology-container-two">
        <div class="two-main-font">
          <div class="main-font-container">
            <p class="two-main-font-top">成都理工智联科技有限公司</p>
            <p class="two-main-font-center">WISTECHX (Wisdom Technology X)</p>
            <p class="two-main-font-bottom">
              成都理工智联科技有限公司（简称：理工智联）2018年成立于四川成都。我司坚持“以管理求效益，以质量求生存，
              以服务建友谊，以实干出效率”的经营方针，十年如一日，努力做到管理严、技术精、规范熟、质量优；公司以企业管理现代化为目标，
              实施全面质量管理，对施工中的组织、设计、质量、工期等环节进行严格控制，确保了工程质量，和施工工程的一次性验收合格。
              公司以服务用户为宗旨，为用户提供后期维护，代培操作人员等多项服务，保证各项设备的正常运转和规范操作。
              公司实施的各项工程项目质量和服务均受到用户好评。
            </p>
          </div>
        </div>
        <!-- <div class="two-main-img">
        <img src="./imgs/technology/understand.png" style="width: 100%;height: 100%;" />
      </div> -->
      </div>
      <div class="technology-container-four">
        <div style="text-align: center;">
          <p class="news">企业实力</p>
        </div>
        <div class="about-two-container-font-two">
          <p class="p-line-style-one"></p>
          <p class="news-font" style="text-align: center;">拥有软件著作权2项，及若干实用新型及发明证书</p>
          <p class="p-line-style-two"></p>
        </div>
        <div class="four-certificate">
          <div class="four-certificate01">
            <div class="certificate01">
              <img src="../assets/technology/certificate03.jpg" style="width: 100%;height: 100%;" />
              <p class="two-main-font-bottom">城市线网级信号健康中心系统</p>
            </div>
            <div class="certificate01">
              <img src="../assets/technology/certificate02.jpg" style="width: 100%;height: 100%;" />
              <p class="two-main-font-bottom">智联集中监测平台</p>
            </div>
          </div>
          <div class="four-certificate02">
            <div class="certificate01">
              <img src="../assets/technology/certificate01.png" style="width: 100%;height: 100%;" />
              <p class="two-main-font-bottom">小区车辆安全管理系统</p>
            </div>
            <div class="certificate-more">
              <p style="font-size: 24px;">更多服务</p>
              <p style="font-size: 16px;">敬请期待</p>
            </div>
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
  import $ from "jquery"
  $(function () {
    $('#down_img').click(function () {
      console.log(document.body.clientWidth);
      var h = document.documentElement.scrollTop; //获取当前滚动条距离顶部的位置
      var w = document.body.clientWidth;
      if (w > 1400) {
        $("html,body").animate({
          scrollTop: h + 800
        }, 800); //点击按钮向下移动800px，时间为800毫秒
      } else {
        $("html,body").animate({
          scrollTop: h + 400
        }, 800); //点击按钮向下移动800px，时间为800毫秒
      }
    })
  })
  export default {
    components: {
      Header,
      Footer
    },
  }
</script>
<style lang="scss" scoped>
  .technology-container {
    width: 100%;
    position: relative;
  }

  .technology-container-top {
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }

  .top-font {
    text-align: center;
  }

  .animate {
    text-align: center;
  }

  @keyframes bounce-down {
    25% {
      transform: translateY(-3px);
    }

    50% {
      transform: translateY(0);
    }

    75% {
      transform: translateY(3px);
    }

    100% {
      transform: translateY(0);
    }
  }

  .animate-bounce-down {
    -webkit-animation: bounce-down 1s linear infinite;
    animation: bounce-down 1s linear infinite;
  }

  i {
    border: solid #fff;
    border-width: 0 2px 2px 0;
    display: inline-block;
    padding: 3px;
  }

  .down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  .two-main-font-top,
  .two-main-font-center {
    color: #123475;
  }

  .p-line-style-one {
    width: 150px;
    height: 2px;
    margin-top: 15px;
    margin-right: 15px;
    background: -moz-linear-gradient(right, #000000 0%, #ffffff 100%);
    background: -webkit-gradient(linear, right, left, color-stop(0%, #000000), color-stop(100%, #ffffff));
    background: -webkit-linear-gradient(right, #000000 0%, #ffffff 100%);
    background: -o-linear-gradient(right, #000000 0%, #ffffff 100%);
    background: -ms-linear-gradient(right, #000000 0%, #ffffff 100%);
    background: linear-gradient(to left, #000000 0%, #ffffff 100%);
  }

  .p-line-style-two {
    width: 150px;
    height: 2px;
    margin-top: 15px;
    margin-left: 15px;
    background: -moz-linear-gradient(left, #000000 0%, #ffffff 100%);
    background: -webkit-gradient(linear, left, right, color-stop(0%, #000000), color-stop(100%, #ffffff));
    background: -webkit-linear-gradient(left, #000000 0%, #ffffff 100%);
    background: -o-linear-gradient(left, #000000 0%, #ffffff 100%);
    background: -ms-linear-gradient(left, #000000 0%, #ffffff 100%);
    background: linear-gradient(to right, #000000 0%, #ffffff 100%);
  }

  .technology-container-four {
    width: 100%;
    background-color: #fff;
  }

  .certificate01 {
    text-align: center;
  }

  @media screen and (min-width: 1781px) {
    .top-font-one {
      margin-top: 160px;
      font-size: 80px;
    }

    .top-font-two {
      margin-top: 60px;
      font-size: 28px;
    }

    .animate {
      margin-top: 17%;
    }

    .technology-container-two {
      width: 100%;
      background: url('../assets/technology/background02.png') 100% 100% no-repeat;
    }

    .technology-container-two {
      padding: 10% 5% 5%;
    }

    .two-main-font {
      width: 60%;
      height: 350px;
      position: relative;
      background-color: #f2f5f7;
    }

    .main-font-container {
      width: 100%;
      height: 350px;
      margin-left: 20px;
      margin-top: -20px;
      padding: 5% 10% 5% 3%;
      position: absolute;
      background-color: #fff;

    }

    .two-main-font-top {
      font-size: 36px;
    }

    .two-main-font-center {
      font-size: 20px;
    }

    .two-main-font-bottom {
      font-size: 20px;
    }

    .two-main-img {
      width: 300px;
      height: 90px;
      margin-top: 175px;
      cursor: pointer;
    }

    .about-two-container-font-two {
      width: 50%;
      margin: 0 auto;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-around;
      font-size: 20px;
    }

    .news {
      font-size: 36px;
    }

    .news-font {
      font-size: 20px;
    }

    .technology-container-four {
      padding: 5%;
    }

    .four-certificate {
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
    }

    .four-certificate01,
    .four-certificate02 {
      width: 50%;
      display: flex;
      justify-content: space-around;
    }

    .certificate01 {
      width: 250px;
      height: 350px;
    }

    .certificate-more {
      width: 240px;
      height: 350px;
      padding-top: 7%;
      background-color: #fff;
      text-align: center;
      border: 1px solid #ddd;
      box-shadow: #ddd 0 0 10px 5px;
    }
  }

  @media screen and (min-width: 1510px) and (max-width: 1780px) {
    .top-font-one {
      margin-top: 160px;
      font-size: 60px;
    }

    .top-font-two {
      margin-top: 40px;
      font-size: 28px;
    }

    .animate {
      margin-top: 290px;
    }

    .technology-container-two {
      width: 100%;
      background: url('../assets/technology/background02.png') 100% 100% no-repeat;
    }

    .technology-container-two {
      padding: 10% 5% 5%;
    }

    .two-main-font {
      width: 60%;
      height: 380px;
      position: relative;
      background-color: #f2f5f7;
    }

    .main-font-container {
      width: 100%;
      height: 380px;
      margin-left: 20px;
      margin-top: -20px;
      padding: 5% 10% 5% 3%;
      position: absolute;
      background-color: #fff;

    }

    .two-main-font-top {
      font-size: 36px;
    }

    .two-main-font-center {
      font-size: 20px;
    }

    .two-main-font-bottom {
      font-size: 20px;
    }

    .two-main-img {
      width: 300px;
      height: 90px;
      margin-top: 175px;
      cursor: pointer;
    }

    .about-two-container-font-two {
      width: 60%;
      margin: 0 auto;
      margin-top: 80px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-around;
      font-size: 20px;
    }

    .news {
      font-size: 36px;
    }

    .news-font {
      font-size: 20px;
    }

    .technology-container-four {
      padding: 5%;
    }

    .four-certificate {
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
    }

    .four-certificate01,
    .four-certificate02 {
      width: 50%;
      display: flex;
      justify-content: space-around;
    }

    .certificate01 {
      width: 250px;
      height: 350px;
    }

    .certificate-more {
      width: 240px;
      height: 350px;
      padding-top: 7%;
      background-color: #fff;
      text-align: center;
      border: 1px solid #ddd;
      box-shadow: #ddd 0 0 10px 5px;
    }
  }

  @media screen and (min-width: 1200px) and (max-width: 1509px) {
    .top-font-one {
      margin-top: 160px;
      font-size: 60px;
    }

    .top-font-two {
      margin-top: 40px;
      font-size: 28px;
    }

    .animate {
      margin-top: 100px;
    }

    .technology-container-two {
      width: 100%;
      background: url('../assets/technology/background02.png') 100% 100% no-repeat;
    }

    .technology-container-two {
      padding: 10% 5% 5%;
    }

    .two-main-font {
      width: 60%;
      height: 350px;
      position: relative;
      background-color: #f2f5f7;
    }

    .main-font-container {
      width: 100%;
      height: 350px;
      margin-left: 20px;
      margin-top: -20px;
      padding: 5% 10% 5% 3%;
      position: absolute;
      background-color: #fff;

    }

    .two-main-font-top {
      font-size: 36px;
    }

    .two-main-font-center {
      font-size: 18px;
    }

    .two-main-font-bottom {
      font-size: 18px;
    }

    .two-main-img {
      width: 300px;
      height: 90px;
      margin-top: 175px;
      cursor: pointer;
    }

    .about-two-container-font-two {
      width: 60%;
      margin: 0 auto;
      margin-top: 60px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-around;
      font-size: 20px;
    }

    .news {
      font-size: 36px;
    }

    .news-font {
      font-size: 20px;
    }

    .technology-container-four {
      padding: 5%;
    }

    .four-certificate {
      margin-top: 80px;
      display: flex;
      justify-content: space-between;
    }

    .four-certificate01,
    .four-certificate02 {
      width: 50%;
      display: flex;
      justify-content: space-around;
    }

    .certificate01 {
      width: 250px;
      height: 350px;
    }

    .certificate-more {
      width: 240px;
      height: 350px;
      padding-top: 7%;
      background-color: #fff;
      text-align: center;
      border: 1px solid #ddd;
      box-shadow: #ddd 0 0 10px 5px;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    .top-font-one {
      margin-top: 140px;
      font-size: 50px;
    }

    .top-font-two {
      margin-top: 30px;
      font-size: 24px;
    }

    .animate {
      margin-top: 80px;
    }

    .technology-container-two {
      width: 100%;
      background: url('../assets/technology/background02.png') no-repeat;
    }

    .technology-container-two {
      padding: 10% 5% 5%;
    }

    .two-main-font {
      width: 75%;
      height: 350px;
      position: relative;
      background-color: #f2f5f7;
    }

    .main-font-container {
      width: 100%;
      height: 350px;
      margin-left: 20px;
      margin-top: -20px;
      padding: 5% 10% 5% 3%;
      position: absolute;
      background-color: #fff;

    }

    .two-main-font-top {
      font-size: 36px;
    }

    .two-main-font-center {
      font-size: 16px;
    }

    .two-main-font-bottom {
      font-size: 16px;
    }

    .two-main-img {
      width: 300px;
      height: 90px;
      margin-top: 175px;
      cursor: pointer;
    }

    .about-two-container-font-two {
      width: 60%;
      margin: 0 auto;
      margin-top: 60px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-around;
      font-size: 20px;
    }

    .news {
      font-size: 36px;
    }

    .news-font {
      font-size: 20px;
    }

    .technology-container-four {
      padding: 5%;
    }

    .four-certificate {
      margin-top: 50px;
    }

    .four-certificate01,
    .four-certificate02 {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
    }

    .four-certificate02 {
      margin-top: 40px;
    }

    .certificate01 {
      width: 250px;
      height: 350px;
    }

    .certificate-more {
      width: 240px;
      height: 350px;
      padding-top: 7%;
      background-color: #fff;
      text-align: center;
      border: 1px solid #ddd;
      box-shadow: #ddd 0 0 10px 5px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .top-font-one {
      margin-top: 100px;
      font-size: 40px;
    }

    .top-font-two {
      margin-top: 20px;
      font-size: 20px;
    }

    .animate {
      margin-top: 60px;
    }

    .technology-container-two {
      width: 100%;
      background: url('../assets/technology/background02.png') no-repeat;
    }

    .technology-container-two {
      padding: 10% 5% 5%;
    }

    .two-main-font {
      width: 80%;
      height: 350px;
      position: relative;
      background-color: #f2f5f7;
    }

    .main-font-container {
      width: 100%;
      height: 350px;
      margin-left: 20px;
      margin-top: -20px;
      padding: 5% 10% 5% 3%;
      position: absolute;
      background-color: #fff;

    }

    .two-main-font-top {
      font-size: 36px;
    }

    .two-main-font-center {
      font-size: 16px;
    }

    .two-main-font-bottom {
      font-size: 16px;
    }

    .two-main-img {
      width: 300px;
      height: 90px;
      margin-top: 155px;
      cursor: pointer;
    }

    .about-two-container-font-two {
      width: 90%;
      margin: 0 auto;
      margin-top: 50px;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-around;
      font-size: 18px;
    }

    .news {
      font-size: 30px;
    }

    .news-font {
      font-size: 18px;
    }

    .technology-container-four {
      padding: 5%;
    }

    .four-certificate {
      margin-top: 40px;
    }

    .four-certificate01,
    .four-certificate02 {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
    }

    .four-certificate02 {
      margin-top: 40px;
    }

    .certificate01 {
      width: 250px;
      height: 350px;
    }

    .certificate-more {
      width: 240px;
      height: 350px;
      padding-top: 7%;
      background-color: #fff;
      text-align: center;
      border: 1px solid #ddd;
      box-shadow: #ddd 0 0 10px 5px;
    }
  }

  @media screen and (max-width: 767px) {
    .technology-img {
      min-height: 400px;
    }

    .top-font-one {
      margin-top: 60px;
      font-size: 25px;
    }

    .top-font-two {
      margin-top: 10px;
      font-size: 16px;
    }

    .animate {
      margin-top: 60px;
    }

    .technology-container-two {
      width: 100%;
      background: url('../assets/technology/background02.png') center center no-repeat;
    }

    .technology-container-two {
      padding: 10% 1% 5%;
    }

    .two-main-font {
      width: 100%;
      height: 350px;
      position: relative;
      background-color: #f2f5f7;
    }

    .main-font-container {
      /* width: 100%; */
      height: 350px;
      margin-left: 20px;
      margin-top: -20px;
      padding: 5% 10% 5% 3%;
      position: absolute;
      background-color: #fff;

    }

    .two-main-font-top {
      font-size: 22px;
    }

    .two-main-font-center {
      font-size: 14px;
    }

    .two-main-font-bottom {
      font-size: 14px;
    }

    .two-main-img {
      width: 200px;
      height: 70px;
      margin: 0 auto;
      margin-top: 100px;
      background-color: #fff;
      cursor: pointer;
    }

    .about-two-container-font-two {
      width: 100%;
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-around;
      font-size: 18px;
    }

    .news {
      font-size: 22px;
    }

    .news-font {
      font-size: 16px;
    }

    .technology-container-four {
      padding: 5%;
    }

    .four-certificate {
      width: 90%;
      margin: 0 auto;
      margin-top: 30px;
    }

    .four-certificate01,
    .four-certificate02 {
      width: 80%;
      margin: 0 auto;
    }

    .certificate01 {
      width: 250px;
      height: 350px;
      margin-top: 35px;
    }

    .certificate-more {
      width: 240px;
      height: 350px;
      padding-top: 15%;
      margin-top: 35px;
      background-color: #fff;
      text-align: center;
      border: 1px solid #ddd;
      box-shadow: #ddd 0 0 10px 5px;
    }
  }
</style>