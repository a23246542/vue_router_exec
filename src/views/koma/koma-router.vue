<template>
    <div>
        <ul>
            <router-link :to="{name:'dynamic'}">動態路由</router-link>
            <router-link to="/dynamic">動態路由</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<style scoped>
ul{
    display: flex;
}
</style>