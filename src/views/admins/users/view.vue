<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-3">
                Avatar
            </div>
            <div class="col-9">
                <ul class="item-view">
                    <li>
                        <label>Name:</label>
                        <span> {{ user.name }}</span>
                    </li>
                    <li>
                        <label>Email:</label>
                        <span> {{ user.email }}</span>
                    </li>
                    <li>
                        <label>Gender:</label>
                        <span> {{ user.gender }}</span>
                    </li>
                    <li>
                        <label>Status:</label>
                        <span> {{ user.status }}</span>
                    </li>
                </ul>
                <div container-fluid v-if="listComments.length">
                    <div class="row">
                        <div class="col-12">
                            <h2>Danh sach comments by user: {{ user.name }}</h2>
                            <ul>
                                <li v-for="(comment, index) in listComments">
                                    <h5> {{ comment.title }}</h5>
                                    <p style="border: 1px solid #999; background-color: #eee;padding: 20px;">
                                        {{ comment.body }}
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, ref } from 'vue';
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
    setup() {
        const router = useRouter();
        const route = useRoute();
        const user = ref({});

        const listComments = ref([]);



        const getUserById = () => {
            axios.get(`https://gorest.co.in/public/v2/users/${route.params.id}`)
                .then(function (response) {
                    user.value = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        const getComments = () => {
            axios.get(`https://gorest.co.in/public/v2/users/${route.params.id}/posts`)
                .then(function (response) {
                    listComments.value = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        getUserById();
        getComments();

        return {
            user,
            listComments
        }
    }

});
</script>