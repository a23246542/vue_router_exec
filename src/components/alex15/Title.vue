<template>
    <div>
        <h1>{{title}}</h1>
    </div>
</template>
<script>
export default {
    // name:'alex-title',!!好像沒名字也沒怎麼樣
    // props:['title']
    // data(){
    //     return{

    //     }
    // },
    props:{
        title:{
            type:String,
            require:true
        }
    }
}
</script>
<style scoped>

</style>