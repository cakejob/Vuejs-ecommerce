<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Status</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, key) in listUser">
                <th scope="row">{{ value.id }}</th>
                <td>
                    <router-link :to="{ name: 'admin-user-view', params: { id: value.id } }">
                        {{ value.name }}
                    </router-link>
                </td>
                <td>{{ value.email }}</td>
                <td>{{ value.gender }}</td>
                <td>{{ value.status }}</td>
                <td style="display: inline-block;">
                    <router-link :to="{ name: 'admin-user-view', params: { id: value.id } }">
                        <span>View</span>
                    </router-link>
                    <router-link :to="{ name: 'admin-user-edit', params: { id: value.id } }">
                        <span> Edit</span>
                    </router-link>

                    <router-link :to="{ name: '', params: { id: value.id } }">
                        <span>Delete</span>
                    </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const listUser = ref([]);

        const getUser = async () => {
            try {
                const response = await axios.get('https://gorest.co.in/public/v2/users');
                listUser.value = response.data;
            } catch (error) {
                console.error(error);
            }
        }

        getUser();

        return {
            listUser
        }
    }
});
</script>