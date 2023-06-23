<template>
    <header class="container-fluid" style="background-color: #666; padding: 10px 20px;">
        <div class="row text-white">
            <div class="col-1 d-flex d-sm-none">
                <span @click="showDrawer()">X</span>
            </div>
            <div class="col-10 d-flex col-sm-9 justify-content-center justify-content-sm-start">
                <img src="../assets//logo.svg" width="40" height="30" alt="Logo" />
                <span class="d-none d-sm-flex">Administrator</span>
            </div>
            <div class="col-3 d-none d-sm-flex justify-content-end">
                Admin Nguyen
            </div>
            <div class="col-1 d-flex d-sm-none">
                <span @click="showDrawerUser()">X</span>
            </div>
        </div>

    </header>


    <!-- This is drawer Box left menu-->
    <a-drawer :width="500" title="Navigation menu" :placement="placement" :visible="visible" @close="onClose">
        <MenuBar />
    </a-drawer>

    <!-- This is drawer Box Right menu-->
    <a-drawer :width="500" title="User Logged" :placement="placement" :visible="visibleUser" @close="onCloseUser">
        <p>User login...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </a-drawer>
</template>

<script>
import { defineComponent, ref } from 'vue';
import MenuBar from './MenuBar.vue';

export default defineComponent({
    components: {
        MenuBar
    },
    setup() {
        const placement = ref('left');
        const visible = ref(false);
        const showDrawer = () => {
            visible.value = true;
        };
        const onClose = () => {
            visible.value = false;
        };
        //This is Visibal user
        const visibleUser = ref(false);
        const showDrawerUser = () => {
            visibleUser.value = true;
        };
        const onCloseUser = () => {
            visibleUser.value = false;
        };

        return {
            placement,
            visible,
            showDrawer,
            onClose,
            visibleUser,
            showDrawerUser,
            onCloseUser
        };
    },
});
</script>