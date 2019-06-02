<template>
    <div class="newsinfo-container" >
        <li v-for="item in newsinfo" :key="item.id" >
        <h3 class="title" >{{ item.title }}</h3>
        <p class="subtitle">
            <span>发表时间: {{ item.add_time | dateFormat }}</span>
            <span>点击：{{ item.click  }}次</span>
        </p>

        <hr>

        <div class="content"></div>
</li>
        <comment-box></comment-box>
    </div>
</template>

<script>
import comment from "../subcomponents/comment.vue" 
import { Toast } from "mint-ui";
export default {
    data(){
        return{
            id: this.$route.params.id,
            newsinfo: [
        //         {
        //         id: 13,
        //         title : "买房还是炒股，2015年买房无法拒绝的5大理由",
        //         click : 1,
        //         add_time:  "2019-05-27 10:10:10",
        //         content : "https://img10.360buyimg.com/n7/jfs/t1/31203/23/9994/197564/5cab210dE64e20358/d94e70571c1fd455.jpg"
        // }
            ]
        };
    },
    created() {
        this.getNewsInfo();
    },
    methods: {
        getNewsInfo(){
            this.$http.get("static/newsinfo.json").then(
            result => {
                var data = result.body;
                this.newsinfo = data.message;
                console.log(this.newsinfo)
            },
            error => {
                Toast("失败");
            })
        },
        
    },
    components: {
        "comment-box": comment
    }
}
</script>

<style lang="scss" scoped>
li{
    margin: 0;
}
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
}
</style>
