<template>
    <div class="newsinfo-container" >
        <a v-for="item in newsinfo" :key="item.id" >
        <h3 class="title" >{{ item.title }}</h3>
        <p class="subtitle">
            <span>发表时间: {{ item.add_time | dateFormat }}</span>
            <span>点击：{{ item.click  }}次</span>
        </p>

        <hr>

        <div class="content">
            <img :src="item.content">
        </div>
</a>
        <comment-box></comment-box>
    </div>
</template>

<script>
import comment from "../subcomponents/comment.vue" 
import { Toast } from "mint-ui";
export default {
    data(){
        return{
            id: 13,
            newsinfo: []
        };
    },
    created() {
        this.getNewsInfo();
        this.next();
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
        next(){
            id++;
            getNewsInfo();
        }
        
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
