<template>
    <div>
        <!-- <input type="text" v-model='text' -->
        <input type="text" v-model='inputText'
        >
        <hr>
    </div>
</template>
<script>
export default {
    // name:alex-input,
    // props:['text'],
    props:{
        text:{
            type:String,
            // required:true,
            default:'預設空白'
        }
    },
    computed:{
    //   inputText(){
    //       get(){
    //           return this.text
    //       },
    //       set(val){

    //       }   
    //   }
        inputText:{
            get(){
                return this.text;
            },
            set(val){
                console.log(val);//定義了val不用還不行
                // this.$emit('textChange',val);
                this.$emit('update:text',val);
            }
        }
    }
}
</script>
<style scoped>

</style>