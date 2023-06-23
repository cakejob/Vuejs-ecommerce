<template>
    This is a dashboard page
</template>
<script>
import { useMenu } from '../../../stores/use-menu.js'
export default {
    setup() {
        const store = useMenu();
        store.onSelectedKeys('admin-dashboard')
    }
}
</script>