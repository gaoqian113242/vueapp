<template>
    <div>
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="item in lunbotuLIst" :key="item.src">
                <img :src="item.src" alt="">
            </mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../image/menu1.png" alt="">
		        <div class="mui-media-body">新闻资讯</div></a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../image/menu2.png" alt="">
		        <div class="mui-media-body">图片分享</div></a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../image/menu3.png" alt="">
		        <div class="mui-media-body">商品信息</div></a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../image/menu4.png" alt="">
		        <div class="mui-media-body">留言反馈</div></a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../image/menu5.png" alt="">
		        <div class="mui-media-body">联系我们</div></a>
            </li>
		    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		        <img src="../../image/menu6.png" alt="">
	            <div class="mui-media-body">Phone</div></a>
            </li>
	    </ul> 
    </div>
</template>

<script>
import {Toast} from 'mint-ui'

export default{
    data(){
        return{
            lunbotuLIst:[{
                src: 'https://img10.360buyimg.com/n7/jfs/t1/31203/23/9994/197564/5cab210dE64e20358/d94e70571c1fd455.jpg'
            },
            {
                src: 'https://img11.360buyimg.com/n7/jfs/t1/31510/5/8986/283616/5ca22287E39f7d685/fef97a4ccc084e40.jpg'
            },
            {
                src: 'https://img13.360buyimg.com/n7/jfs/t1/31598/39/12616/177061/5cb82a40E861cfc3f/6a20b040fad51d1d.jpg'
            },
            {
                src: 'https://img11.360buyimg.com/n7/jfs/t1/17923/10/7179/341741/5c67f16aE6785d392/b9a9fd45b5c0e227.jpg'
            }
            ]
        }
    },
    

    

}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        img{
            margin-left: 75px;
        }
    }
}
.mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;
        img{
            width: 60px;
            height: 60px;
        }
    }
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0;
}
</style>
