<template>
  <div class="header-container">
    <div class="header-all-container">
      <div class="header-top">
        <div class="header-top-left">
          <div class="img-responsives">
            <img src="../assets/logo.png" style="width: 100%; height: auto;" />
          </div>
          <div class="header-top-left-img-font">
            <p class="header-top-left-font-style header-top-font-symbol" style="margin: 0 10px;color: #fff;">|</p>
            <p class="header-top-left-font-style" style="margin: 0;color: #fff;">成都理工智联科技有限公司</p>
          </div>
        </div>
        <div class="header-top-right">
          <nav class="navbar navbar-fixed-center navbar-inverse navbar-expand-lg">
            <div class="container-fluid">
              <div class="navbar-header">
                <!-- data-toggle="collapse" -->
                <button class="navbar-toggle " data-target="#menu">
                  <img src="../assets/line.png" style="width: 25px;height:25px" />
                </button>
                <a href="#" class="navbar-brand"></a>
              </div>
              <div id="menu" class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                  <li class="nav-item min-liHome">
                    <router-link to="/" style="height: 80px;display: inline-block;">
                      <span class="span-style active">关于我们</span>
                    </router-link>
                  </li>
                  <li class="nav-item min-liHome">
                    <router-link to="/product" style="height: 80px;display: inline-block;">
                      <span class="span-style">产品与解决方案</span>
                    </router-link>
                  </li>
                  <li class="nav-item min-liHome">
                    <router-link to="/technology" style="height: 80px;display: inline-block;">
                      <span class="span-style">技术支持</span>
                    </router-link>
                  </li>
                  <li class="nav-item min-liHome">
                    <router-link to="/contact" style="height: 80px;display: inline-block;">
                      <span class="span-style">联系我们</span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>
<script>
  import $ from "jquery"

  export default {
    data() {
      return {

      }
    },
    mounted() {
      let url = window.location.href;
      console.log(url);
      //以下为截取url的方法
      function returnUrl(href) {
        // indexOf 是查某个指定的字符串在字符串首次出现的位置（索引值） （也就是从前往后查）
        // lastIndexOf 是从右向左查某个指定的字符串在字符串中最后一次出现的位置（也就是从后往前查）
        // indexOf是从前向后查  而lastIndexOf是从后向前查   但是二者返回索引都是从前开始数数和计算的
        let number = href.lastIndexOf("/");
        return href.substring(number + 1);
      }

      $('.min-liHome a').each(function () {
        console.log($(this));
        if (returnUrl($(this).attr('href')) == returnUrl(url)) {
          $(this).children().addClass('active');
        } else {
          $(this).children().removeClass('active');
        }
      });

      $('.navbar-toggle').click(function () {
        if ($('#menu').css('display') == 'none') {
          $('#menu').css('display', 'block');
        } else if ($('#menu').css('display') == 'block') {
          $('#menu').css('display', 'none');
        }
      })

      $(".min-icon").click(function () {
        if ($(".min-navbar").css('display') == 'none') {
          $(".min-navbar").css('display', 'block')
        } else if ($(".min-navbar").css('display') == 'block') {
          $(".min-navbar").css('display', 'none')
        }
      })
    },
  }
</script>
<style lang="scss" scoped>
  .header-container {
    width: 100%;
  }

  .navbar-toggle {
    display: none;
  }

  #menu {
    display: none;
  }

  .navbar-toggle {
    position: absolute;
    top: 0;
    right: 10px;
    display: none;
  }

  .navbar {
    padding: 0 !important;
    padding-top: 10px !important;
  }

  .header-all-container {
    // height: 100px;
    // line-height: 100px;
    border-bottom: 1px solid #fff;
  }

  .header-top {
    width: 95%;
    height: 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

  }

  .nav>li>a {
    padding: 0 !important;
  }

  .navbar-brand {
    height: 0 !important;
  }

  .navbar-inverse {
    background-color: transparent !important;
    border-color: transparent !important;
  }

  .nav-link {
    padding: 0;
  }

  a:hover {
    text-decoration: none;
  }

  .navbar-inverse .navbar-nav>.active>a,
  .navbar-inverse .navbar-nav>.active>a:focus,
  .navbar-inverse .navbar-nav>.active>a:hover {
    background-color: transparent !important;
  }

  .span-style {
    color: #bbb;
  }

  @media screen and (min-width: 1000px) {
    // .navbar-collapse.collapse {
    //   display: none !important;
    //   height: auto !important;
    //   padding-bottom: 0;
    //   overflow: visible !important;
    // }
  }

  @media screen and (min-width: 1781px) {
    .header-container {
      padding-top: 70px;
    }

    .img-responsives {
      width: auto;
      height: 70px;
    }

    .header-top-left {
      height: 80px;
      line-height: 80px;
      display: flex;
    }

    .header-top-left-img-font {
      padding-top: 10px;
      display: flex;
    }

    .header-top-left-font-style {
      font-size: 30px;
    }

    .nav-item {
      width: 165px;
      height: 80px;
      line-height: 80px;
      text-align: center;
    }

    .min-liHome {
      // padding-top: 30px;
      color: #bbb;
      font-size: 23px;
    }

    .min-liHome:hover {
      border-bottom: 6px transparent solid;
      border-image: linear-gradient(to right, rgb(22, 115, 202), #0aa1ed) 1 10;
      cursor: pointer;
    }

    .navbar-nav {
      float: right !important;
    }
  }

  @media screen and (min-width: 1200px) and (max-width: 1780px) {
    .header-container {
      padding-top: 70px;
    }

    .img-responsives {
      width: 180px;
      height: 60px;
    }

    .header-top-left {
      height: 80px;
      line-height: 80px;
      display: flex;
    }

    .header-top-left-img-font {
      padding-top: 10px;
      display: flex;
    }

    .header-top-left-font-style {
      font-size: 21px;
    }

    .nav-item {
      width: 140px;
      height: 80px;
      line-height: 80px;
      text-align: center;
    }

    .min-liHome {
      // padding-top: 30px;
      font-size: 20px;
      color: #bbb;
    }

    .min-liHome:hover {
      border-bottom: 6px transparent solid;
      border-image: linear-gradient(to right, rgb(22, 115, 202), #0aa1ed) 1 10;
      cursor: pointer;
    }

    .navbar-nav {
      float: right !important;
    }
  }

  @media screen and (min-width: 992px) and (max-width: 1199px) {
    .header-container {
      padding-top: 40px;
    }

    .img-responsives {
      width: 150px;
      height: 60px;
    }

    .header-top-font-symbol {
      display: none;
    }

    .header-top-left {
      height: 80px;
      line-height: 0;
    }

    .header-top-left-img-font {
      padding-top: 5px;
    }

    .header-top-font-symbol {
      display: none;
    }

    .header-top-left-font-style {
      height: 80px;
      font-size: 18px;
    }

    .nav-item {
      width: 130px;
      height: 80px;
      line-height: 80px;
      text-align: center;
    }

    .min-liHome {
      // padding-top: 30px;
      font-size: 18px;
      color: #bbb;
    }

    .min-liHome:hover {
      border-bottom: 6px transparent solid;
      border-image: linear-gradient(to right, rgb(22, 115, 202), #0aa1ed) 1 10;
      cursor: pointer;
    }

    .navbar-nav {
      float: right !important;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 991px) {
    .navbar-toggle {
      display: block !important;
    }

    .header-container {
      padding-top: 30px;
    }

    .img-responsives {
      width: 100px;
      height: 40px;
    }

    .header-top-left {
      height: 80px;
      line-height: 0;
    }

    .header-top-left-img-font {
      padding-top: 5px;
    }

    .header-top-font-symbol {
      display: none;
    }

    .header-top-left-font-style {
      height: 80px;
      font-size: 18px;
    }

    .navbar-nav {
      float: none;
    }

    .nav-item {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: center !important;
    }

    .min-right-first-ul li {
      border-bottom: 1px solid #ddd;
    }

    .min-liHome {
      // padding-top: 20px;
      font-size: 15px;
      color: #bbb;
    }

    .min-liHome:hover {
      color: #fff;
      cursor: pointer;
    }

    .navbar-collapse {
      padding: 0 !important;
      background-color: #666 !important;
      border-radius: 30px !important;
      text-align: center !important;
    }

    .nav-item {
      text-align: center !important;
    }

    .nav-item {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: left;
    }

    .container {
      max-width: 100%;
      padding-right: 10px;
      margin-left: 0;
      margin-right: 0;
    }

    .img-responsives {
      width: 150px;
      height: 60px;
    }

    .header-top-left {
      height: 80px;
      line-height: 0;
    }

    .header-top-left-img-font {
      padding-top: 5px;
    }

    .header-top-font-symbol {
      display: none;
    }

    .header-top-left-font-style {
      height: 80px;
      font-size: 18px;
    }


    .min-right-first-ul li {
      border-bottom: 1px solid #ddd;
    }

    .min-liHome {
      // padding-top: 30px;
      font-size: 15px;
    }

    .min-liHome:hover {
      // border-bottom: 3px solid blue;
      cursor: pointer;
    }

    .navbar-toggle {
      display: block !important;
    }
  }

  /* and (min-width: 576px)  */
  @media screen and (max-width: 767px) {
    .navbar-toggle {
      display: block !important;
    }

    .header-container {
      padding-top: 30px;
    }

    .img-responsives {
      width: 100px;
      height: 40px;
    }

    .header-top-left {
      height: 80px;
      line-height: 0;
    }

    .header-top-left-img-font {
      padding-top: 5px;
    }

    .header-top-font-symbol {
      display: none;
    }

    .header-top-left-font-style {
      height: 80px;
      font-size: 18px;
    }

    .navbar-nav {
      float: none;
    }

    .nav-item {
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align: left;
    }

    .min-right-first-ul li {
      border-bottom: 1px solid #ddd;
    }

    .min-liHome {
      // padding-top: 15px;
      font-size: 15px;
      color: #bbb;
    }

    .navbar-collapse {
      width: 10%;
      padding-bottom: 15px !important;
      background-color: #666 !important;
      border-radius: 5px !important;
      text-align: center !important;
    }

    .nav-item {
      text-align: center !important;
    }
  }

  .active {
    color: #fff;
  }

  .show-containr {
    display: block;
  }

  .hidden-container {
    display: none;
  }
</style>