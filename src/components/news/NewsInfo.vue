<template>
    <div class="newsinfo-container">
        <h3 class="title">新闻标题</h3>
        <p class="subtitle">
            <span>发表时间: </span>
            <span>点击：0次</span>
        </p>

        <hr>

        <div class="content"></div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
    data(){
        return{
            id: this.$route.params.id
        };
    },
    methods: {
        getNewsIfo(){
            this.$http.get('static/newsinfo.json').then(
            result => {
                var data = result.body;
                this.newslist = data.message;
            },
            error => {
                Toast("失败");
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
         justify-content: space-between;
    }
    .content{

    }
}
</style>
