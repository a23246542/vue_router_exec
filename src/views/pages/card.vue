<template>
    <div>
        <router-view name="menuView"/>
        <div class="card" style="width: 18rem;">
            <img src="https://picsum.photos/200/100" class="card-img-top" alt="...">
            <div class="card-body">
                <router-view/>
            </div>
        </div>
    </div>
    
</template>