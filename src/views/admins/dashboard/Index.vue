<template>
    This is a dashboard page
    {{ user }}
</template>
<script>
import { computed } from 'vue';
import { useMenu } from '../../../stores/use-menu.js'
import { useUserStore } from "../../../stores/user-store";

export default {
    setup() {
        const store = useMenu();
        const user = useUserStore();

        //user.clearUser();
        store.onSelectedKeys('admin-dashboard')

        return {
            user
        }
    }
}
</script>