<template>
    <Header />
    <div class="">
        <div class="grid grid-cols-12">
            <div class="col-span-2">
                <a-list bordered>
                    <MenuBar />
                    <template #header>
                        <div>APLICATIONS</div>
                    </template>
                </a-list>
            </div>
            <div class="col-span-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
    <slot />
</template>
<script>
import Header from '../components/Header.vue';
import MenuBar from '../components/MenuBar.vue';

export default {
    components: {
        Header,
        MenuBar
    }
}
</script>