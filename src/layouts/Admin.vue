<template>
    this is Admin Layout
    <Header />
    <div class="conatainer-fluid">
        <div class="row">
            <div class="col-sm-3 d-none d-sm-flex">
                <a-list bordered>
                    <MenuBar />
                    <template #header>
                        <div>APLICATIONS</div>
                    </template>
                </a-list>
            </div>
            <div class="col-sm-9">
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