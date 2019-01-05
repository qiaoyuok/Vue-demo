<template>
    <div>
        <p>我是自定义独立组件</p>
        <mt-button type="danger" icon="back" @click="toast">primary11</mt-button>
        <button type="button" class="mui-btn mui-btn-royal">
            紫色
        </button>
    </div>
</template>
<script>
  import { Toast } from 'mint-ui';      //按需导入组件
  import { bootstrap } from 'bootstrap/dist/css/bootstrap.css'
    export default {
        methods:{
          toast(){
            Toast({
              message:'这是一个弹窗信息',
              duration:5000,
              iconClass:'glyphicon glyphicon-play-circle',
              className:'mytoast'
            })
          }
        }
    }
</script>
<style>
    .mytoast i{
        color: red !important;
    }
</style>
