<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <alexTitle :title=title></alexTitle>
    <!-- <alexInput :text=title @textChange="titleChange"></alexInput> ??用封閉結果報錯 -->
    <alexInput :text.sync=title></alexInput> <!--??用封閉結果報錯-->
    <HelloWorld msg="alex的15天 科學單檔模組化"/> <!--預設做好的元件-->
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import alexInput from '@/components/alex15/Input.vue'
import alexTitle from '@/components/alex15/Title.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    alexInput,
    alexTitle

  },
  data(){
      return{
          title:'我是api送來的標題資料5454'
      }
  },
  methods:{
      titleChange(val){
          this.title = val;
      }
  }
}
</script>