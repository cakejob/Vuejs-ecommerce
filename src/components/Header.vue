<template>
    <header class="flex flex-row justify-between" style="background-color: #666; padding: 10px 20px;">
        <div class="flex flex-row justify-between">
            <span @click="showDrawer()" class="show lg:hidden">X</span>
            <div class="flex bg-white">
                <img src="../assets//logo.svg" width="40" height="30" alt="Logo" class="rounded-full block h-12" />
            </div>
            <span class="d-none d-sm-flex">Administrator</span>
        </div>

        <div class="flex flex-row order-last items-center">
            <div class="flex items-center">
                <img src="../../src/assets/images/avatar.jpeg" width="40" height="30" alt="Logo"
                    class="rounded-full block h-8 w-8" />
                <span class="flex px-2 text-white">John Doe</span>
            </div>
            <ul>
                <li>
                    <router-link :to="{ name: 'admin-account-edit', params: { id: userStore.id ? userStore.id : 0 } }">My
                        profile</router-link>
                </li>
                <li>
                    <span @click="handleLogout">Logout </span>
                </li>
            </ul>
            <span @click="showDrawerUser()" class="show lg:hidden">X</span>
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
import { useUserStore } from '@/stores/user-store';
import { useRouter } from 'vue-router';

export default defineComponent({
    components: {
        MenuBar
    },
    setup() {
        const userStore = useUserStore();

        const router = useRouter();

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

        console.log("User_id prepare logut sucess", userStore.id);
        console.log("Toke prepare logut sucess", userStore.token);

        const handleLogout = async () => {
            try {

                const response = await axios.post('logout', { user_id: userStore.id });

                userStore.clearUser();
                router.push({ name: 'login' });
            } catch (error) {
                console.error("logout errors", error);
            }
        };

        return {
            placement,
            visible,
            showDrawer,
            onClose,
            visibleUser,
            showDrawerUser,
            onCloseUser,
            userStore,
            handleLogout
        };
    },
});
</script>