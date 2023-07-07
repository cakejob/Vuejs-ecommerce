<template>
    <div class="relative z-10">
        <div class="fixed bg-gray-500 bg-opacity-70 inset-0 transition-opacity"></div>
        <div class="flex min-h-full justify-center p-4 items-center py-2">
            <div class="flex relative max-w-4xl min-h-full bg-white  overflow-hidden">
                <div class="w-full p-4 relative">
                    <h3 class="flex w-full text-2xl font-medium leading-6 text-gray-900 clear-both">Crop Image</h3>
                    <div @click="$emit('showModelEvent', false)" class="flex cursor-pointer z-11 absolute  right-2 top-1">
                        Close</div>
                    <div class="flex clear-both w-full py-3">
                        <label class="
                                            block
                                            uppercase
                                            tracking-wide
                                            text-gray-700
                                            text-xs
                                            font-bold
                                            mb-2
                                        ">
                            Select Image
                        </label>
                    </div>
                    <div class="clear my-3">
                        <input type="file" ref="fileInput" class="border border-solid" @change="getUploadedImage" />
                    </div>
                    <div class="flex border w-full p-3">
                        <Cropper class="cropper" ref="cropper" :src="uploadedImage"
                            :stencil-props="{ aspectRatio: 10 / 12 }" @change="change">
                        </Cropper>
                    </div>

                    <div class="clear w-full">
                        <button type="button" @click="crop">
                            Crop Image
                        </button>
                    </div>
                </div>

            </div>

        </div>


    </div>
</template>

<script setup>
import { ref, defineProps, toRefs, defineEmits } from 'vue';
import { Cropper } from 'vue-advanced-cropper'
import 'vue-advanced-cropper/dist/style.css';

const props = defineProps({
    minAspectRatioProp: Object,
    maxAspectRatioProp: Object
})
const { minAspectRatioProp, maxAspectRatioProp } = toRefs(props)

const emit = defineEmits(['croppedImageEvent', 'showModelEvent'])

let cropper = ref(null);
let fileInput = ref(null);
let uploadedImage = ref(null);
let croppedImageData = {
    file: null,
    imageUrl: null,
    height: null,
    width: null,
    left: null,
    top: null,
};

const crop = () => {
    const { coordinates, canvas } = cropper.value.getResult();

    croppedImageData.file = fileInput.value.files[0];
    croppedImageData.imageUrl = canvas.toDataURL();
    croppedImageData.height = coordinates.height;
    croppedImageData.width = coordinates.width;
    croppedImageData.left = coordinates.left
    croppedImageData.top = coordinates.top

    emit('croppedImageEvent', croppedImageData)
    emit('showModelEvent', false);
}

const getUploadedImage = (e) => {
    const file = e.target.files[0]
    uploadedImage.value = URL.createObjectURL(file);
}
</script>