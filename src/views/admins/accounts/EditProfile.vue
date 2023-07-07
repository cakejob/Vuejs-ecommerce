<template>
    <CropperModal v-if="showModalData" @showModelEvent="handleShowModal" @croppedImageEvent="handelCroppedImageEvent" />
    <div class="container px-4 py-4">
        <div class="text-gray-900 text-xl">Edit Profile</div>
        <div class=" max-w-lg ">
            <TextInput label="First name" inputType="text" placeHolder="First name" v-model:inputValue="state.firstName" />
        </div>

        <div class=" max-w-lg ">
            <TextInput label="Last name" inputType="text" placeHolder="Last Name" v-model:inputValue="state.lastName" />
        </div>

        <div class=" max-w-lg ">
            <TextInput label="Location" inputType="text" placeHolder="Location" v-model:inputValue="state.location" />
        </div>

        <div>
            <BaseButon labelButon="Profile Image" btnText="Profile Image" @showModelEvent="handleShowModal" />
        </div>
        <div>
            <CroppedImage label="Image" :image="image" :minAspectRatioProp="{ width: 8, height: 8 }"
                :maxAspectRatioProp="{ width: 8, height: 8 }" @croppedImageEvent="handelCroppedImageEvent" />
        </div>
        <div>
            <textarea cols="30" rows="10" class="border w-full text-black" placeholder="ban roi"
                v-model="state.description"></textarea>
        </div>

        <div>
            <SubmitButton btnText="Update profile" @click="updateUser" />
        </div>
    </div>
</template>

<script setup>

import { onMounted, reactive, ref } from 'vue';
import TextInput from '@/components/global/TextInput.vue';
import BaseButon from '@/components/global/BaseButon.vue';
import SubmitButton from '@/components/global/SubmitButton.vue';
import CroppedImage from '@/components/global/CroppedImage.vue';
import CropperModal from '@/components/global/CropperModal.vue';
import { useUserStore } from '@/stores/user-store';



const state = reactive({
    firstName: '',
    lastName: '',
    location: '',
    description: '',
    image: ''
});

let showModalData = ref(false);
let imageData = null;
let image = ref(null);

const handleShowModal = (data) => {
    showModalData.value = data;
}

const handelCroppedImageEvent = (data) => {
    console.log("click handelCroppedImageEvent", data);
    imageData = data;
    image.value = data.imageUrl;
}

const userStore = useUserStore();

onMounted(() => {
    state.firstName = userStore.firstName;
    state.lastName = userStore.lastName;
    state.location = userStore.location;
    state.description = userStore.description;
    state.image = userStore.image;
});

const updateUser = async () => {
    let params = {
        first_name: state.firstName,
        last_name: state.lastName,
        location: state.location,
        description: state.description
    };

    let data = new FormData();
    data.append('first_name', state.firstName || '');
    data.append('last_name', state.lastName || '');
    data.append('location', state.location || '');
    data.append('description', state.description || '');
    try {
        //let reponse = await axios.post('/user', params);

    } catch (err) {
        console.log("update profile", err);
    }
}


</script>