<template>
  <div class="right-tool">
    <ul class="right-tool-ul">
      <li @click="uploadFile">
        <span>文件</span>
        <input accept=".xlsx,.xls" id="file" type="file"/>
      </li>
      <li>哈哈</li>
      <li v-show="showTop" @click="toTop">top</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RightTool',
  data () {
    return {
      scrollTop: 0,
      time: 0,
      decrement: 20,
      scrollState: 0
    }
  },
  methods: {
    toTop (e) {
      if (this.scrollState) {
        return
      }
      this.scrollState = 1
      e.preventDefault()
      let _this = this
      this.time = setInterval(function () {
        _this.gotoTop(_this.scrollTop - _this.decrement)
      }, 10)
    },
    gotoTop (distance) {
      this.decrement += 20
      distance = distance > 0 ? distance : 0
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance
      if (this.scrollTop < 10) {
        clearInterval(this.time)
        this.decrement = 20
        this.scrollState = 0
      }
    },
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    },
    onWindowResize () {
      let docWidth = document.body.clientWidth
      let ulElement = document.getElementsByClassName('right-tool')[0]
      if (docWidth < 1366) {
        ulElement.style.right = 0
      } else {
        ulElement.style.right = 'auto'
      }
    },
    uploadFile () {
      document.getElementById('file').click()
    }
  },
  created () {

  },
  mounted () {
    window.addEventListener('scroll', this.getScrollTop)
    window.addEventListener('resize', this.onWindowResize)
    this.onWindowResize()

    // 监听文件上传
    document.getElementById('file').addEventListener('change', this.$database.init)

    // let _this = this;
    // window.onscroll = function () {
    //   let t = document.documentElement.scrollTop || document.body.scrollTop;  //获取距离页面顶部的距离
    //   if (t > 200) {
    //     if (!_this.showTop) {
    //       _this.$set(_this, 'showTop', true);
    //     }
    //   } else {
    //     if (_this.showTop) {
    //       _this.$set(_this, 'showTop', false);
    //     }
    //   }
    // }
  },
  computed: {
    showTop: function () {
      return this.scrollTop > 200
    }
  }
}
</script>

<style lang="less" scoped>
  .right-tool {
    li {
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-weight: bold;
      color: #409eff;
      background-color: #e8e8e8;
      border-radius: 25px;
      margin-bottom: 20px;
      cursor: pointer;
      &:hover {
        color: #fff;
        background-color: #409eff;
      }
      &:last-child {
        margin-top: 200px;
      }
      #file {
        display: none;
      }
    }
    position: fixed;
    top: 50%;
    right: auto;
    margin-top: -150px;
    z-index: 999;
  }
</style>
