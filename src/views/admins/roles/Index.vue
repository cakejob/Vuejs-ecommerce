<template>
    Roles page
</template>
<script>
import { useMenu } from '../../../stores/use-menu.js';

export default {
    setup() {
        const storeMenu = useMenu();
        storeMenu.onSelectedKeys('admin-roles');
    }
}
</script>