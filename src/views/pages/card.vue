<template>
    <div>
        <router-link class="nav-link" :to="{name:'卡片1'}">卡片1</router-link>
        <router-link class="nav-link" :to="{name:'卡片2'}">卡片2</router-link>
        <router-link class="nav-link" :to="{name:'卡片3'}">卡片3</router-link>
        <div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/200/100" class="card-img-top" alt="...">
            <div class="card-body">
                <router-view/>
            </div>
        </div>
    </div>
    
</template>