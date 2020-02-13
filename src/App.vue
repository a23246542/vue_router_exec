<template>
  <div id="div-app">
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to='/newPage' >分頁1</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{name:'新分頁2'}">分頁2</router-link>
                </li>
                <li class="nav-item">
                    <!-- <router-link class="nav-link" :to="{name:'卡片'}">卡片</router-link> -->
                    <router-link class="nav-link" to="/card" >卡片</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" id="newBtn" :to="{name:'新聞'}">新聞</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" id="newBtn" :to="{name:'alex單檔'}">科學單檔模組化</router-link>
                </li>
            
            </ul>
            
        </div>
    </nav>

    
    <router-view/>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // apiId:'',
            // newsId:'0492055'
        }
    },
    mounted(){
        // document.getElementById('newsBtn').addEventListener('click',function(){
        //     this.apiId = this.newsId;
        // })
    }
}

// <div id="nav">
//       <!-- 看要用path呈現還是name -->
//       <router-link to="/home">Home</router-link> |
//       <!-- <router-link to="/about">About</router-link> -->
//       <router-link :to="{name:'關於'}">About</router-link> |
//       <router-link :to="{name:'新分頁'}">Page</router-link>
//     </div>
</script>

<style lang="scss">
#div-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
