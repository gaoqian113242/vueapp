<template>
  <div>
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入评论内容" maxlength="120"></textarea>

    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div
          class="cmt-title"
        >第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，什么都没说': item.content}}</div>
      </div>
      <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1,
      comments: []
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http.get("static/commtent.json").then(result => {
        result => {
          var data = result.body;
          this.comments = data.message;
          console.log(this.comments);
        },
          error => {
            Toast("失败");
          };
      });
    },
  },

};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 18px;
}
textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-list {
  margin: 10px 0;
  .cmt-item {
    font-size: 13px;
    .cmt-title {
      line-height: 30px;
      background-color: #ccc;
    }
    .cmt-body {
      line-height: 35px;
      text-indent: 2em;
    }
  }
}
</style>
