<template>
    <div class="container mx-auto">
        <h2 class="flex pb-5">
            Register
        </h2>

        <form @submit.prevent="register">
            <div>
                <TextInput label="First Name" v-model:inputValue="state.firstName" inputType="text"
                    placeHolder="First name" />
                <span v-for="(err, firstNameKey) in v$.firstName.$errors" :key="firstNameKey">{{ err.$message }}</span>
            </div>
            <div>
                <TextInput label="Last Name" v-model:inputValue="state.lastName" inputType="text" placeHolder="Last name" />
                <span v-for="(err, lastNameKey) in v$.lastName.$errors" :key="lastNameKey">{{ err.$message }}</span>
            </div>
            <div>
                <TextInput label="Email" v-model:inputValue="state.email" inputType="email" placeHolder="Email" />
                <span v-for="(err, emailKey) in v$.email.$errors" :key="emailKey">{{ err.$message }}</span>
            </div>
            <div>
                <TextInput label="Password" v-model:inputValue="state.password" inputType="password"
                    placeHolder="Password" />
                <span v-for="(err, key) in v$.password.$errors">{{ err.$message }}</span>
            </div>
            <div>
                <TextInput label="Confirm Password" v-model:inputValue="state.confirmPassword" inputType="password"
                    placeHolder="confirm Password" />
                <span v-for="(err, key) in v$.confirmPassword.$errors"> {{ err.$message }}</span>
            </div>
            <button class="
                            block
                            w-full
                            bg-green-500
                            text-white
                            rounded-sm
                            py-3
                            text-sm
                            tracking-wide
                            " type="submit">
                Register
            </button>
        </form>
    </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import TextInput from '../../components/global/TextInput.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'
import axios from 'axios';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../stores/user-store';

const router = useRouter();
const userStore = useUserStore()

const state = reactive({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
})
const rules = computed(() => {
    return {
        firstName: { required, minLength: minLength(5) }, // Matches state.firstName
        lastName: { required, minLength: minLength(3) }, // Matches state.lastName
        email: { required, email }, // Matches state.email
        password: { required, minLength: minLength(3) },
        confirmPassword: { required, minLength: minLength(3), sameAs: sameAs(state.password) }
    }
})


const v$ = useVuelidate(rules, state);

const register = async () => {
    const result = await v$.value.$validate();
    if (!result) {
        console.log("False validate");
        return false;
    }

    let params = {
        first_name: state.firstName,
        last_name: state.lastName,
        email: state.email,
        password: state.password
    };

    await axios.post('http://127.0.0.1:8000/api/register', params)
        .then(function (response) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
            userStore.setUserDetails(response);

            console.log("set user into stroe", userStore);

            router.push({ name: "admin-dashboard" });
        })
        .catch(function (error) {
            console.log(error);
        });
}

</script>