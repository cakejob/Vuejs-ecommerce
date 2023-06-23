<template>
    <form class="form" @submit.prevent="handleSubmit()">
        <div class="control">
            <label>User Name:</label><input class="input" v-model="userName" style="min-width: 350px;" />
        </div>
        <div class="control">
            <label>Email:</label><input class="input" v-model="email" :id="id" type="text" style="min-width: 350px;" />
        </div>
        <div class="control">
            <button type="submit">Save</button>
        </div>
    </form>
</template>

<script>
import { defineComponent, toRefs, reactive } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    setup() {
        const user = reactive({
            id: 0,
            userName: '',
            email: ''
        });

        const route = useRoute();


        const getUserById = () => {
            axios.get(`https://gorest.co.in/public/v2/users/${route.params.id}`)
                .then(function (response) {
                    user.id = response.data.id;
                    user.userName = response.data.name;
                    user.email = response.data.email;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        getUserById();


        const handleSubmit = () => {
            console.log("handlUserUpdate", user);
        }

        return {
            ...toRefs(user),
            handleSubmit
        }
    },


})
</script>

<style scoped>
.form {
    background: white;
    padding: 30px;
    margin-top: 50px;
}

label {
    width: 150px;
}
</style>