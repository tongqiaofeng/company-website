<template>
  <div>
    <div class="product-container">
      <div class="product-container-img">
        <img src="../assets/product/product-background.png" style="width: 100%;" />
      </div>
      <div class="product-container-body">
        <Header id="header"></Header>
        <div class="product-container-body-top">
          <p class="product-container-body-top-font-chinese" style="color: #fff;">专业的团队<span
              style="margin: 0 20px;"></span>铸造更专业的事业
          </p>
          <p class="product-container-body-top-font-english" style="color: #fff;">PROFESSIONAL TEAM FOUNDS
            MORE PROFESSIONAL CAREER</p>
        </div>
        <div class="product-container-body-top-main">
          <div class="product-main-every">
            <p class="product-main-every-top">产品研发中心</p>
            <p class="product-main-every-center"></p>
            <p class="product-main-every-bottom">我们拥有独立的产品研发团队，根据不同的需求，研发生产出高品质，受市场欢迎的产品</p>
            <!-- <button class="product-main-every-button">
            <a href="javascript:;">查看更多 >></a>
          </button> -->
          </div>
          <div class="product-main-every">
            <p class="product-main-every-top">媒体运营中心</p>
            <p class="product-main-every-center"></p>
            <p class="product-main-every-bottom">我们拥有强大的媒体运营团队，高度精准的宣传，让更多的人了解我们的产品</p>
            <!-- <button class="product-main-every-button">
            <a href="javascript:;">查看更多 >></a>
          </button> -->
          </div>
          <div class="product-main-every">
            <p class="product-main-every-top">视觉中心</p>
            <p class="product-main-every-center"></p>
            <p class="product-main-every-bottom">我们拥有专业的视觉设计团队，完美的设计，绚烂的色彩，每一项都是视觉的盛宴</p>
            <!-- <button class="product-main-every-button">
            <a href="javascript:;">查看更多 >></a>
          </button> -->
          </div>

        </div>
      </div>
      <div class="product-container-two">
        <div class="product-container-two-main">
          <p class="product-container-two-main-font">我们的服务</p>
          <div class="product-container-two-main-list">
            <div class="product-layout">
              <div class="product-container-two-main-list-one">
                <div class="one-img"></div>
                <div class="one-main">
                  <p class="one-main-top">产品研发</p>
                  <p class="one-main-bottom">专业的产品研发团队，具有强大的产品开发能力，为市场带来源源不断的优质产品</p>
                </div>
              </div>
              <div class="product-container-two-main-list-two">
                <div class="two-img"></div>
                <div class="one-main">
                  <p class="one-main-top">媒体运营</p>
                  <p class="one-main-bottom">狼一般的媒体团队，以各种不同的平台，更有针对性的对产品进行推广营销，创造更大的利润</p>
                </div>
              </div>
            </div>
            <div class="product-layout">
              <div class="product-container-two-main-list-three">
                <div class="three-img"></div>
                <div class="one-main">
                  <p class="one-main-top">智慧物联</p>
                  <p class="one-main-bottom">智能停车、智能门禁园区一卡通</p>
                </div>
              </div>
              <div class="product-container-two-main-list-four">
                <div class="four-img"></div>
                <div class="one-main">
                  <p class="one-main-top">持续供应</p>
                  <p class="one-main-bottom">拥有数十家合作供应商，成立一个牢固的供应链，能源源不断的为我们提供动力</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="product-container-three back1">
        <p class="my-service" style="color: #fff;">我们的服务</p>
        <div class="three-main">
          <ul class="nav nav-tabs" id="myTab">
            <li class="three-main-every">
              <a class="first-tabs tabs_back" href="#home" data-toggle="tab">
                <div class="tabs-img">
                  <img class="first-img" :src="img1" style="width: 70px;height: 60px;" />
                </div>
                <div class="tabs-font">
                  <p class="font-title">产品研发</p>
                  <p class="font-main">为各要素建立相应的业务平台，统一容纳各要素信息资源，统一为各业务提供应用工具平台，统一用户接触面</p>
                </div>
              </a>
            </li>
            <li class="three-main-every">
              <a class="second-tabs" href="#profile" data-toggle="tab">
                <div class="tabs-img">
                  <img class="second-img" :src="img2" style="width: 70px;height: 60px;" />
                </div>
                <div class="tabs-font">
                  <p class="font-title">物业监测系统</p>
                  <p class="font-main">大数据+互联网技术植入园区各生态场景，全面助力园区产业升级</p>
                </div>
              </a>
            </li>
            <li class="three-main-every every-three">
              <a class="last-tabs" href="#messages" data-toggle="tab">
                <div class="tabs-img">
                  <img class="last-img" :src="img3" style="width: 70px;height: 60px;" />
                </div>
                <div class="tabs-font">
                  <p class="font-title">数据园区</p>
                  <p class="font-main">通过可视化大数据全面了解园企动向、园区发展状况</p>
                </div>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="home">
              <div class="product-tab">
                <div class="product-tab-main-left">
                  <div class="tab-left-first">
                    <div class="tab-left-img">
                      <img src="../assets/product/APPicon.png" />
                    </div>
                    <div class="tab-left-font">
                      <p class="tab-left-font-title">移动端APP</p>
                      <p class="tab-left-font-main">一套优秀的app设计流程既要从产品的实际需要出发，又要紧紧围绕用户体验，以保证做出的设计方案富有弹性且效果良好</p>
                    </div>
                  </div>
                  <div class="tab-left-second">
                    <div class="tab-left-img">
                      <img src="../assets/product/web-icon.png" />
                    </div>
                    <div class="tab-left-font">
                      <p class="tab-left-font-title">WEB网站</p>
                      <p class="tab-left-font-main">为各要素建立相应的业务平台，统一容纳各要素的信息资源，统一为各业务提供应用工具平台，统一用户接触面</p>
                    </div>
                  </div>
                  <div class="tab-left-last">
                    <div class="tab-left-img">
                      <img src="../assets/product/wechat.png" />
                    </div>
                    <div class="tab-left-font">
                      <p class="tab-left-font-title">微信小程序</p>
                      <p class="tab-left-font-main">小程序是一种新的开放能力，开发者可以快速地开发一个小程序</p>
                    </div>
                  </div>
                </div>
                <div class="product-tab-main-right">
                  <img src="../assets/product/show01.png" style="width: 100%;height: 100%;" />
                </div>
              </div>
            </div>
            <div class="tab-pane" id="profile">
              <div class="product-tab-show02">
                <img src="../assets/product/show02.png" style="width: 100%;height: 100%;" />
              </div>
            </div>
            <div class="tab-pane" id="messages">
              <div class="product-tab-show03">
                <div class="show03-img1">
                  <img src="../assets/product/small02.png" style="width: 100%;height: 100%;" />
                </div>
                <div class="show03-img2">
                  <img src="../assets/product/big01.png" style="width: 100%;height: 100%;" />
                </div>
                <div class="show03-img3">
                  <img src="../assets/product/small03.png" style="width: 100%;height: 100%;" />
                </div>
              </div>
              <div>
                <div class="about-two-container-font-two" style="display: flex;text-align: center;">
                  <p class="two-p-line-style-one"></p>
                  <p style="color: #fff;">地铁互联互通系统</p>
                  <p class="two-p-line-style-two"></p>
                </div>
                <div style="text-align: center;">
                  <p style="font-size: 16px;color: #ddd;">大数据分析平台，提升铁路运营安全</p>
                </div>
              </div>
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
  export default {
    data() {
      return {
        img1: require("../assets/product/icon01.png"),
        img2: require("../assets/product/icon02.png"),
        img3: require("../assets/product/icon03.png"),
      }
    },
    components: {
      Header,
      Footer
    },
    mounted() {
      $('.first-tabs').click(function () {
        $(".product-container-three").removeClass('back2');
        $(".product-container-three").addClass('back1');
        console.log($(this));
        console.log($('.first-img'));
        $(this).addClass('tabs_back');
        $('.second-tabs').removeClass('tabs_back');
        $('.last-tabs').removeClass('tabs_back');
      });

      $('.second-tabs').click(function () {
        $(".product-container-three").removeClass('back2');
        $(".product-container-three").addClass('back1');
        $(this).addClass('tabs_back');
        $('.first-tabs').removeClass('tabs_back');
        $('.last-tabs').removeClass('tabs_back');
      });

      $('.last-tabs').click(function () {
        $(".product-container-three").removeClass('back1');
        $(".product-container-three").addClass('back2');
        $(this).addClass('tabs_back');
        $('.first-tabs').removeClass('tabs_back');
        $('.second-tabs').removeClass('tabs_back');
      });
    },
  }
</script>
<style lang="scss" scoped>
  .back1 {
    background: url('../assets/product/product-background-03-2.png');
  }

  .back2 {
    background: url('../assets/product/product-background-03-1.png');
  }

  a {
    color: #fff !important;
  }

  a:hover {
    color: #fff !important;
    text-decoration: none !important;
    background-color: transparent;
  }

  a:link {
    color: #fff !important;
    text-decoration: none !important;
  }

  .product-container {
    width: 100%;
    position: relative;
  }

  .product-container-body {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .product-main-every {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 15px 0 rgb(189, 188, 188);
  }

  .product-main-every-center {
    height: 1px;
    background-color: #ddd;
  }

  .product-main-every-button {
    width: 170px;
    height: 60px;
    border: 1px solid #123475;
    border-radius: 5px;
    background-color: #123475;
    font-size: 14px;
  }

  .product-container-two {
    width: 100%;
    background-color: #fff;
  }

  .product-container-two-main-font {
    margin-bottom: 120px;
    font-size: 24px;
    text-align: left;
  }

  .product-container-two-main {
    background: url('../assets/product/Service.png') center top no-repeat;
  }

  .product-container-two-main-list-one:hover {
    background: transparent url('../assets/product/pro-back04.png');
  }

  .product-container-two-main-list-two:hover {
    background: transparent url('../assets/product/pro-back04.png');
  }

  .product-container-two-main-list-three:hover {
    background: transparent url('../assets/product/pro-back04.png');
  }

  .product-container-two-main-list-four:hover {
    background: transparent url('../assets/product/pro-back04.png');
  }

  .product-container-two-main-list-one:hover .one-main {
    color: #fff;
  }

  .product-container-two-main-list-two:hover .one-main {
    color: #fff;
  }

  .product-container-two-main-list-three:hover .one-main {
    color: #fff;
  }

  .product-container-two-main-list-four:hover .one-main {
    color: #fff;
  }

  .one-main-top {
    width: 100px;
    height: 75px;
    margin-top: 60px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 2px solid #000;
  }

  .one-main-bottom {
    margin-top: 40px;
    font-size: 17px;
    text-align: left;
  }

  .product-container-two-main-list-one:hover .one-main-top {
    border-bottom: 2px solid #fff;
  }

  .product-container-two-main-list-two:hover .one-main-top {
    border-bottom: 2px solid #fff;
  }

  .product-container-two-main-list-three:hover .one-main-top {
    border-bottom: 2px solid #fff;
  }

  .product-container-two-main-list-four:hover .one-main-top {
    border-bottom: 2px solid #fff;
  }

  .one-img {
    width: 53px;
    height: 58px;
    background: url('../assets/product/black01.png') center center;
  }

  .product-container-two-main-list-one:hover .one-img {
    width: 53px;
    height: 58px;
    background: url('../assets/product/white01.png') center center;
  }

  .two-img {
    width: 58px;
    height: 58px;
    background: url('../assets/product/black02.png') center center;
  }

  .product-container-two-main-list-two:hover .two-img {
    width: 58px;
    height: 58px;
    background: url('../assets/product/white02.png') center center;
  }

  .three-img {
    width: 58px;
    height: 58px;
    background: url('../assets/product/black03.png') center center;
  }

  .product-container-two-main-list-three:hover .three-img {
    width: 58px;
    height: 58px;
    background: url('../assets/product/white03.png') center center;
  }

  .four-img {
    width: 60px;
    height: 48px;
    background: url('../assets/product/black04.png') center center;
  }

  .product-container-two-main-list-four:hover .four-img {
    width: 60px;
    height: 48px;
    background: url('../assets/product/white04.png') center center;
  }

  .product-container-three {
    width: 100%;
    height: 100%;
    // background: url('../assets/product/product-background-03-2.png');
  }

  .nav-tabs {
    border: 0 !important;
  }

  .nav-tabs>li>a {
    margin-right: 2px;
    line-height: 1.42857143;
    border: 1px solid transparent;
    border-radius: 0 0 0 0 !important;
  }

  .nav-tabs>li>a:hover {
    border-color: transparent !important;
  }

  .nav>li>a:focus,
  .nav>li>a:hover {
    text-decoration: none;
    background-color: transparent !important;
  }

  a.show {
    display: flex !important;
  }

  .three-main-every {
    border-right: 1px solid #666;
  }

  .every-three {
    border: 0;
  }

  .font-main {
    color: #999;
    text-align: left;
  }

  .tabs_back {
    background: -moz-linear-gradient(left, #3225e4 0%, #2691e9 100%);
    background: -webkit-gradient(linear, left, right, color-stop(0%, #3225e4), color-stop(100%, #2691e9));
    background: -webkit-linear-gradient(left, #3225e4 0%, #2691e9 100%);
    background: -o-linear-gradient(left, #3225e4 0%, #2691e9 100%);
    background: -ms-linear-gradient(left, #3225e4 0%, #2691e9 100%);
    background: linear-gradient(to right, #3225e4 0%, #2691e9 100%);
  }


  .tab-left-font-title {
    color: #fff;
  }

  .tab-left-font-main {
    color: #b7f2f0;
    text-align: left;
  }

  .two-p-line-style-one {
    width: 150px;
    height: 2px;
    margin-top: 15px;
    margin-right: 15px;
    background: -moz-linear-gradient(left, transparent 0%, #fff 100%);
    background: -webkit-gradient(linear, left, right, color-stop(0%, transparent), color-stop(100%, #fff));
    background: -webkit-linear-gradient(left, transparent 0%, #fff 100%);
    background: -o-linear-gradient(left, transparent 0%, #fff 100%);
    background: -ms-linear-gradient(left, transparent 0%, #fff 100%);
    background: linear-gradient(to right, transparent 0%, #fff 100%);
  }

  .two-p-line-style-two {
    width: 150px;
    height: 2px;
    margin-top: 15px;
    margin-left: 15px;
    background: -moz-linear-gradient(right, transparent 0%, #fff 100%);
    background: -webkit-gradient(linear, right, left, color-stop(0%, transparent), color-stop(100%, #fff));
    background: -webkit-linear-gradient(right, transparent 0%, #fff 100%);
    background: -o-linear-gradient(right, transparent 0%, #fff 100%);
    background: -ms-linear-gradient(right, transparent 0%, #fff 100%);
    background: linear-gradient(to left, transparent 0%, #fff 100%);
  }

  .product-main-every-bottom {
    text-align: left;
  }

  @media screen and (min-width: 1781px) {
    .product-container-img img {
      height: 100%;
    }

    .product-container-body-top {
      margin-top: 130px;
      text-align: center;
    }

    .product-container-body-top-font-chinese {
      font-size: 80px;
    }

    .product-container-body-top-font-english {
      font-size: 28px;
    }

    .product-container-body-top-main {
      display: flex;
      justify-content: space-around;
      margin-top: 10%;
    }

    .product-container-two-main-font {
      margin-top: 80px;
    }

    .product-main-every {
      width: 20%;
      height: 500px;
      padding: 80px;
    }

    .product-main-every-top {
      font-size: 30px;
      font-weight: bold;
    }

    .product-main-every-center {
      margin: 40px 0;
    }

    .product-main-every-bottom {
      font-size: 17px;
    }

    .product-main-every-button {
      margin-top: 100px;
    }

    .product-container-two {
      padding: 10% 5% 5% 5%;
    }

    .product-container-two-main {
      margin-top: 0;
    }

    .product-container-two-main-list {
      display: flex;
      justify-content: space-between;
    }

    .product-layout {
      width: 49%;
      display: flex;
      justify-content: space-between;
    }

    .product-container-two-main-list-one,
    .product-container-two-main-list-two,
    .product-container-two-main-list-three,
    .product-container-two-main-list-four {
      width: 49%;
      height: 598px;
      padding: 210px 60px 75px 60px;
      background: #f1f2f6;
    }

    .product-container-three {
      padding: 5% 5% 2% 5%;
    }

    .my-service {
      font-size: 22px;
    }

    .three-main {
      width: 80%;
      margin: 0 auto;
      margin-top: 70px;
    }

    .three-main-every {
      width: 30%;
      height: 135px;
      line-height: 135px;
      background-color: #000;
    }

    a.show {
      display: flex !important;
    }

    .first-tabs,
    .second-tabs,
    .last-tabs {
      width: 100%;
      height: 100%;
      color: #000;
      display: flex !important;
      justify-content: space-around;
    }

    .tabs-img {
      padding-top: 7%;
    }

    .tabs-font {
      padding-top: 3%;
    }

    .tabs-font {
      width: 70%;
    }

    .font-title {
      font-size: 24px;
    }

    .font-main {
      font-size: 14px;
    }

    .tab-content {
      margin-top: 100px;
    }

    .product-tab {
      display: flex !important;
      justify-content: space-between;
    }

    .tab-left-first,
    .tab-left-second,
    .tab-left-last {
      width: 70%;
      height: 160px;
      padding: 3%;
      display: flex;
      justify-content: space-between;
      background: url('../assets/product/pro-back02.png') no-repeat;
    }

    .tab-left-second,
    .tab-left-last {
      margin-top: 30px;
    }

    .tab-left-img {
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      border-radius: 50%;
      background-color: #000;
      opacity: 0.2;
    }

    .tab-left-font {
      width: 73%;
    }

    .tab-left-font-title {
      font-size: 22px;
    }

    .tab-left-font-main {
      font-size: 14px;
    }

    .product-tab-main-right {
      width: 50%;
      height: 420px;
      margin-top: 10%;
    }

    .product-tab-show02 {
      width: 100%;
      height: 600px;
    }

    .product-tab-show03 {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .show03-img1 {
      width: 26%;
      height: 300px;
      margin-top: 5%;
    }

    .show03-img2 {
      width: 34%;
      height: 400px;
    }

    .show03-img3 {
      width: 26%;
      height: 300px;
      margin-top: 5%;
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
  }

  @media screen and (min-width: 1200px) and (max-width: 1780px) {
    .product-container-img img {
      min-height: 900px;
    }

    .product-container-body-top {
      margin-top: 120px;
      text-align: center;
    }

    .product-container-body-top-font-chinese {
      font-size: 60px;
    }

    .product-container-body-top-font-english {
      font-size: 26px;
    }

    .product-container-body-top-main {
      display: flex;
      justify-content: space-around;
      margin-top: 110px;
    }

    .product-main-every {
      width: 29%;
      height: 500px;
      padding: 80px;
    }

    .product-main-every-top {
      font-size: 30px;
      font-weight: bold;
    }

    .product-main-every-center {
      margin: 40px 0;
    }

    .product-main-every-bottom {
      font-size: 17px;
    }

    .product-main-every-button {
      margin-top: 100px;
    }

    .product-container-two {
      padding: 50px 2% 30px 2%;
    }

    .product-container-two-main {
      margin-top: 20%;
    }

    .product-container-two-main-font {
      padding-left: 10%;
    }

    .product-container-two-main-list {
      /* display: flex;
    justify-content: space-between; */
    }

    .product-layout {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
    }

    .product-container-two-main-list-one,
    .product-container-two-main-list-two,
    .product-container-two-main-list-three,
    .product-container-two-main-list-four {
      width: 35%;
      height: 570px;
      margin-top: 20px;
      padding: 160px 40px 75px 40px;
      background: #f1f2f6;
    }


    .product-container-three {
      padding: 5%;
    }

    .my-service {
      font-size: 22px;
    }

    .three-main {
      width: 90%;
      margin: 0 auto;
      margin-top: 70px;
    }

    .three-main-every {
      width: 30%;
      height: 145px;
      line-height: 145px;
      background-color: #000;
    }

    a.show {
      display: flex !important;
    }

    .first-tabs,
    .second-tabs,
    .last-tabs {
      width: 100%;
      height: 100%;
      color: #000;
      display: flex !important;
      justify-content: space-around;
    }

    .tabs-img {
      padding-top: 7%;
    }

    .tabs-font {
      padding-top: 3%;
    }

    .tabs-font {
      width: 70%;
    }

    .font-title {
      font-size: 22px;
    }

    .font-main {
      font-size: 13px;
    }

    .tab-content {
      margin-top: 100px;
    }

    .product-tab {
      display: flex !important;
      justify-content: space-between;
    }

    .tab-left-first,
    .tab-left-second,
    .tab-left-last {
      width: 90%;
      height: 160px;
      padding: 5%;
      display: flex;
      justify-content: space-between;
      background: url('../assets/product/pro-back02.png') no-repeat;
    }

    .tab-left-second,
    .tab-left-last {
      margin-top: 30px;
    }

    .tab-left-img {
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      border-radius: 50%;
      background-color: #000;
      opacity: 0.2;
    }

    .tab-left-font {
      width: 73%;
    }

    .tab-left-font-title {
      font-size: 22px;
    }

    .tab-left-font-main {
      font-size: 14px;
    }

    .product-tab-main-right {
      width: 60%;
      height: 420px;
      margin-top: 10%;
    }

    .product-tab-show02 {
      width: 100%;
      height: 450px;
    }

    .product-tab-show03 {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .show03-img1 {
      width: 26%;
      height: 200px;
      margin-top: 5%;
    }

    .show03-img2 {
      width: 34%;
      height: 300px;
    }

    .show03-img3 {
      width: 26%;
      height: 200px;
      margin-top: 5%;
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
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    .product-container-img img {
      min-height: 800px;
    }

    .product-container-body-top {
      margin-top: 110px;
      text-align: center;
    }

    .product-container-body-top-font-chinese {
      font-size: 45px;
    }

    .product-container-body-top-font-english {
      font-size: 24px;
    }

    .product-container-body-top-main {
      display: flex;
      justify-content: space-around;
      margin-top: 110px;
    }

    .product-main-every {
      width: 31%;
      height: 400px;
      padding: 40px;
    }

    .product-main-every-top {
      font-size: 30px;
      font-weight: bold;
    }

    .product-main-every-center {
      margin: 30px 0;
    }

    .product-main-every-bottom {
      font-size: 17px;
    }

    .product-main-every-button {
      margin-top: 60px;
    }

    .product-container-two {
      padding-bottom: 30px;
    }

    .product-container-two-main {
      margin-top: 18%;
    }

    .product-container-two-main-font {
      padding-left: 10%;
    }

    .product-container-two-main-list {
      /* display: flex;
    justify-content: space-between; */
    }

    .product-layout {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }

    .product-container-two-main-list-one,
    .product-container-two-main-list-two,
    .product-container-two-main-list-three,
    .product-container-two-main-list-four {
      width: 45%;
      height: 570px;
      margin-top: 20px;
      padding: 150px 40px 75px 40px;
      background: #f1f2f6;
    }


    .product-container-three {
      padding: 5%;
    }

    .my-service {
      font-size: 22px;
    }

    .three-main {
      width: 95%;
      margin: 0 auto;
      margin-top: 70px;
    }

    .three-main-every {
      width: 30%;
      height: 135px;
      line-height: 135px;
      background-color: #000;
    }

    a.show {
      display: flex !important;
    }

    .first-tabs,
    .second-tabs,
    .last-tabs {
      width: 100%;
      height: 100%;
      color: #000;
      display: flex !important;
      justify-content: space-around;
    }

    .tabs-img {
      padding-top: 7%;
    }

    .tabs-font {
      padding-top: 3%;
    }

    .tabs-font {
      width: 70%;
    }

    .font-title {
      font-size: 20px;
    }

    .font-main {
      font-size: 12px;
    }

    .tab-content {
      margin-top: 100px;
    }

    .product-tab {
      display: flex !important;
      justify-content: space-between;
    }

    .tab-left-first,
    .tab-left-second,
    .tab-left-last {
      width: 90%;
      height: 160px;
      padding: 5%;
      display: flex;
      justify-content: space-between;
      background: url('../assets/product/pro-back02.png') no-repeat;
    }

    .tab-left-second,
    .tab-left-last {
      margin-top: 30px;
    }

    .tab-left-img {
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      border-radius: 50%;
      background-color: #000;
      opacity: 0.2;
    }

    .tab-left-font {
      width: 73%;
    }

    .tab-left-font-title {
      font-size: 22px;
    }

    .tab-left-font-main {
      font-size: 14px;
    }

    .product-tab-main-right {
      width: 60%;
      height: 400px;
      margin-top: 10%;
    }

    .product-tab-show02 {
      width: 100%;
      height: 400px;
    }

    .product-tab-show03 {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .show03-img1 {
      width: 26%;
      height: 200px;
      margin-top: 5%;
    }

    .show03-img2 {
      width: 34%;
      height: 300px;
    }

    .show03-img3 {
      width: 26%;
      height: 200px;
      margin-top: 5%;
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
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .product-container-img img {
      min-height: 600px;
    }

    .product-container-body-top {
      margin-top: 100px;
      text-align: center;
    }

    .product-container-body-top-font-chinese {
      font-size: 30px;
    }

    .product-container-body-top-font-english {
      font-size: 22px;
    }

    .product-container-body-top-main {
      display: flex;
      justify-content: space-around;
      margin-top: 110px;
    }

    .product-main-every {
      width: 31%;
      height: 360px;
      padding: 20px;
    }

    .product-main-every-top {
      font-size: 30px;
      font-weight: bold;
    }

    .product-main-every-center {
      margin: 30px 0;
    }

    .product-main-every-bottom {
      font-size: 17px;
    }

    .product-main-every-button {
      margin-top: 40px;
    }

    .product-container-two {
      padding-bottom: 30px;
    }

    .product-container-two-main {
      margin-top: 30%;
    }

    .product-container-two-main-font {
      padding-left: 10%;
      margin-bottom: 50px;
    }

    .product-container-two-main-list {
      /* display: flex;
    justify-content: space-around; */
    }

    .product-container-two-main-list-one,
    .product-container-two-main-list-two,
    .product-container-two-main-list-three,
    .product-container-two-main-list-four {
      width: 80%;
      height: 598px;
      margin: 0 auto;
      margin-top: 20px;
      padding: 150px 60px 40px 60px;
      background: #f1f2f6;
    }


    .product-container-three {
      padding: 5%;
    }

    .my-service {
      font-size: 22px;
    }

    .three-main {
      width: 100%;
      margin: 0 auto;
      margin-top: 70px;
    }

    .three-main-every {
      width: 33%;
      height: 135px;
      line-height: 135px;
      background-color: #000;
    }

    a.show {
      display: flex !important;
    }

    .first-tabs,
    .second-tabs,
    .last-tabs {
      width: 100%;
      height: 100%;
      color: #000;
      display: flex !important;
      justify-content: space-around;
    }

    .tabs-img {
      padding-top: 9%;
    }

    .tabs-font {
      padding-top: 6%;
    }

    .tabs-font {
      width: 70%;
    }

    .font-title {
      font-size: 20px;
    }

    .font-main {
      font-size: 12px;
    }

    .tab-content {
      margin-top: 100px;
    }

    .product-tab {
      display: flex !important;
      justify-content: space-between;
    }

    .tab-left-first,
    .tab-left-second,
    .tab-left-last {
      width: 90%;
      height: 160px;
      padding: 5%;
      display: flex;
      justify-content: space-between;
      background: url('../assets/product/pro-back02.png') no-repeat;
    }

    .tab-left-second,
    .tab-left-last {
      margin-top: 30px;
    }

    .tab-left-img {
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      border-radius: 50%;
      background-color: #000;
      opacity: 0.2;
    }

    .tab-left-font {
      width: 73%;
    }

    .tab-left-font-title {
      font-size: 22px;
    }

    .tab-left-font-main {
      font-size: 14px;
    }

    .product-tab-main-right {
      width: 50%;
      height: 420px;
      margin-top: 10%;
    }

    .product-tab-show03 {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .show03-img1 {
      width: 26%;
      height: 150px;
      margin-top: 5%;
    }

    .show03-img2 {
      width: 34%;
      height: 250px;
    }

    .show03-img3 {
      width: 26%;
      height: 150px;
      margin-top: 5%;
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
  }

  @media screen and (max-width: 767px) {
    .product-container-img img {
      min-height: 1300px;
    }

    .product-container-body-top {
      margin-top: 70px;
      text-align: center;
    }

    .product-container-body-top-font-chinese {
      font-size: 24px;
    }

    .product-container-body-top-font-english {
      font-size: 16px;
    }

    .product-container-body-top-main {
      margin-top: 110px;
    }

    .product-main-every {
      width: 80%;
      height: 360px;
      padding: 30px;
      margin: 0 auto;
      margin-top: 20px;
    }

    .product-main-every-top {
      font-size: 30px;
      font-weight: bold;
    }

    .product-main-every-center {
      margin: 30px 0;
    }

    .product-main-every-bottom {
      font-size: 17px;
    }

    .product-main-every-button {
      margin-top: 40px;
    }

    .product-container-two {
      padding-bottom: 30px;
    }

    .product-container-two-main {
      margin-top: 75%;
    }

    .product-container-two-main-font {
      margin-bottom: 30px;
      padding-left: 10%;
    }

    .product-container-two-main-list {
      /* display: flex;
    justify-content: space-around; */
    }

    .product-container-two-main-list-one,
    .product-container-two-main-list-two,
    .product-container-two-main-list-three,
    .product-container-two-main-list-four {
      width: 80%;
      height: 460px;
      margin: 0 auto;
      margin-top: 20px;
      padding: 80px 30px 20px 30px;
      background: #f1f2f6;
    }

    .product-container-three {
      padding: 5% 0;
    }

    a.show {
      display: block !important;
    }

    .my-service {
      margin-left: 20px;
      font-size: 22px;
    }

    .three-main {
      width: 100%;
      margin: 0 auto;
      margin-top: 70px;
    }

    .three-main-every {
      width: 33%;
      height: 155px;
      line-height: 135px;
      background-color: #000;
    }

    .first-tabs,
    .second-tabs,
    .last-tabs {
      width: 100%;
      height: 100%;
      color: #000;
      display: block
    }

    .tabs-img {
      padding-top: 0;
      text-align: center;
    }

    .tabs-font {
      padding-top: 0;
    }

    .first-img,
    .second-img,
    .last-img {
      width: 50px !important;
      height: 40px !important;
    }

    .tabs-font {
      width: 100%;
    }

    .font-title {
      margin: 0;
      font-size: 16px;
      text-align: center;
    }

    .font-main {
      margin: 0;
      font-size: 10px;
      text-align: center;
    }

    .tab-content {
      margin-top: 50px;
    }

    .product-tab {
      display: block !important;
      /* justify-content: space-between; */
    }

    .tab-left-first,
    .tab-left-second,
    .tab-left-last {
      width: 100%;
      height: 135px;
      padding: 5%;
      display: flex;
      justify-content: space-between;
      background: url('../assets/product/pro-back02.png') no-repeat;
    }

    .tab-left-second,
    .tab-left-last {
      margin-top: 30px;
    }

    .tab-left-img {
      width: 80px;
      height: 80px;
      margin-top: 10px;
      line-height: 80px;
      text-align: center;
      border-radius: 50%;
      background-color: #000;
      opacity: 0.2;
    }

    .tab-left-font {
      width: 73%;
    }

    .tab-left-font-title {
      font-size: 18px;
    }

    .tab-left-font-main {
      font-size: 12px;
    }

    .product-tab-main-right {
      width: 100%;
      height: 420px;
      margin-top: 10%;
    }

    .product-tab-show02 {
      width: 100%;
      height: 240px;
    }

    .product-tab-show03 {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .show03-img1 {
      width: 26%;
      height: 80px;
      margin-top: 5%;
    }

    .show03-img2 {
      width: 34%;
      height: 120px;
    }

    .show03-img3 {
      width: 26%;
      height: 80px;
      margin-top: 5%;
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
  }
</style>