<template>
    <div>
        <h1>球員介面</h1>
    </div>
</template>
<script>
export default {
    name:"player",
    data(){
        return{
            detail:{}
        }
    },
    mounted(){
        // 接受url參數id
        this.detail = this.getPlayer(this.$route.params.uid);
    },
    methods:{
        getPlayer(id){
            switch(id){
                case '1':
                    return {id:1,name:'庫里',point:26};
                case '2':
                    return {id:2,name:'哈里',point:30};
                default:
                    return {id:-1}
            }
        }
    }
}
</script>