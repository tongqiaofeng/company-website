<template>
  <footer class="footer-container">
    <div class="container">
      <div class="footer-top">
        <div class="top-left">
          <div>
            <h4 class="h4-style">案例展示</h4>
            <p class="footer-font-style">关于我们</p>
          </div>
          <div>
            <h4 class="h4-style">友情链接</h4>
            <p class="footer-font-style">
              <a href="http://goldenascend.com/" target="_blank">金翔国际</a>
            </p>
            <p class="footer-font-style">
              <a href="https://bzbb.com/blog" target="_blank"
                >理工智联旗下-轴时传媒</a
              >
            </p>
          </div>
          <div>
            <h4 class="h4-style">联系我们</h4>
            <p class="footer-font-style">成都理工智联科技有限公司</p>
            <p class="footer-font-style">地址：成都市锦江区明宇金融广场2901A</p>
            <p class="footer-font-style">
              <span>电话：+86 135 5130 7503 </span>
            </p>
            <p class="footer-font-style">
              <span>邮箱：zeus@wistechx.com</span>
            </p>
          </div>
        </div>
        <div class="top-right">
          <div>
            <img
              src="../assets/wechat.jpg"
              style="width: 200px;height: 200px;"
            />
          </div>
          <div
            style="height: 200px;margin-left: 20px;padding-top: 50px;line-height: 200px;"
          >
            <p class="wechat">官方微信</p>
          </div>
        </div>
      </div>
      <div>
        <p class="footer-font-style" style="margin: 0;">
          Copyright © 2019 成都理工智联科技有限公司 版权所有
          <a href="https://beian.miit.gov.cn" target="_blank"
            >蜀ICP备19022988号-1</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer-container {
  width: 100%;
  background-color: #000;
  padding-top: 20px;
}

a {
  color: #888;
}

a:hover {
  color: #888 !important;
  text-decoration: none !important;
  background-color: transparent;
}

a:link {
  color: #888 !important;
  text-decoration: none !important;
}

a:active {
  color: #888 !important;
}

a:visited {
  color: #888 !important;
}

.top-right {
  height: 160px;
  display: flex;
  line-height: 190px;
}

.h4-style {
  color: #fff;
}

.footer-font-style {
  color: #888;
}

.wechat {
  width: 20px;
  margin: 0 auto;
  line-height: 24px;
  font-size: 20px;
  color: #fff;
}

.footer-top {
  text-align: left;
}

@media screen and (min-width: 1300px) {
  .container {
    width: 75%;
    margin: 0 auto;
  }

  .footer-top {
    margin: 60px 0;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
  }

  .top-left {
    width: 60%;
    display: flex;
    justify-content: space-between;
  }

  .h4-style {
    margin-bottom: 60px;
    font-size: 20px;
  }

  .footer-font-style {
    font-size: 16px;
  }
}

@media screen and (min-width: 992px) and (max-width: 1299px) {
  .container {
    width: 85%;
    margin: 0 auto;
  }

  .footer-top {
    margin: 60px 0;
    margin-top: 0;
    display: flex;
    justify-content: space-between;
  }

  .top-left {
    width: 70%;
    display: flex;
    justify-content: space-between;
  }

  .h4-style {
    margin-bottom: 60px;
    font-size: 20px;
  }

  .footer-font-style {
    font-size: 16px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .container {
    width: 85%;
    margin: 0 auto;
  }

  .footer-top {
    margin: 60px 0;
    margin-top: 0;
  }

  .top-left {
    width: 85%;
    display: flex;
    justify-content: space-between;
  }

  .h4-style {
    margin-bottom: 40px;
    font-size: 18px;
  }

  .footer-font-style {
    font-size: 14px;
  }
}

@media screen and (min-width: 545px) and (max-width: 767px) {
  .container {
    width: 85%;
    margin: 0 auto;
  }

  .footer-top {
    margin: 60px 0;
    margin-top: 0;
  }

  .top-left {
    width: 95%;
    display: flex;
    justify-content: space-between;
  }

  .h4-style {
    margin-bottom: 40px;
    font-size: 18px;
  }

  .footer-font-style {
    font-size: 14px;
  }
}

@media screen and (max-width: 544px) {
  .container {
    width: 85%;
    margin: 0 auto;
  }

  .footer-top {
    margin: 60px 0;
    margin-top: 0;
  }

  .top-left {
    width: 85%;
  }

  .h4-style {
    margin-bottom: 20px;
    font-size: 16px;
  }

  .footer-font-style {
    font-size: 14px;
  }
}
</style>
