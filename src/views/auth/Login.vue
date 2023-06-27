<template>
    <div class="flex min-h-screen items-center justify-center">
        <div class="w-full  max-w-xs">
            <div class=" p-5 bg-gray-300 shadow rounded mb-6">
                <h1 class="mb-6 text-lg text-gray-80 font-thin">Let's get rocking!</h1>
                <div class=" w-full">
                    <TextInput v-model:inputValue="email" inputType="text" placeHolder="Email" label="Email"
                        :error="errors.email ? errors.email[0] : ''" />
                </div>
                <div class="w-full">
                    <TextInput v-model:inputValue="password" @keyup.enter="handleLogin" label="Password"
                        inputType="password" placeHolder="Password" :error="errors.password ? errors.password[0] : ''" />
                </div>

                <div>
                    <button class="w-full block bg-zinc-600" type="button" @click="handleLogin">Login</button>
                </div>
                <p class="text-center text-md text-gray-900">
                    Don't have an account yet?
                    <router-link to="register" class="text-blue-500 no-underline hover:underline">
                        Register
                    </router-link>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TextInput from '../../components/global/TextInput.vue';
import { useUserStore } from '@/stores/user-store';
import { useRouter } from 'vue-router';

let email = ref(null);
let password = ref(null);
let errors = ref([]);

let userStore = useUserStore();
let router = useRouter();

const handleLogin = async () => {
    errors.value = [];
    const params = { email: email.value, password: password.value };

    try {
        const response = await axios.post('login', params);
        axios.defaults.headers.common['Authorization'] = response.data.token;
        userStore.setUserDetails(response);

        router.push({ name: "admin-dashboard" });
    } catch (error) {
        console.log("errors", error);
        errors.value = error.response ? error.response.data.errors : [];
    }
}
</script>