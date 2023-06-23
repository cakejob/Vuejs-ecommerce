<template>
    <a-menu v-model:openKeys="openKeys" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="admin-dashboard">
            <router-link :to="{ name: 'admin-dashboard' }">
                <star-outlined /> Tài khoản
            </router-link>
        </a-menu-item>

        <a-menu-item key="admin-users">
            <router-link :to="{ name: 'admin-users' }">
                <star-filled /> Quản lý users
            </router-link>
        </a-menu-item>

        <a-menu-item key="admin-roles">
            <router-link :to="{ name: 'admin-roles' }">
                <star-two-tone two-tone-color="#eb2f96" /> Cài đặt Roles
            </router-link>
        </a-menu-item>
    </a-menu>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue';
import { useMenu } from "../stores/use-menu.js";

import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons-vue';

export default defineComponent({
    components: {
        StarOutlined,
        StarFilled,
        StarTwoTone
    },
    setup() {
        const menuStore = useMenu();
        const { selectedKeys, openKeys } = useMenu;

        return {
            selectedKeys, openKeys
        };
    }
});
</script>