<template>
    <v-card
    width="720"
    height="500"
    class="bg-grey ma-auto mt-10 pa-4"
    >
        <div class="ma-auto"> 
            <h1>this is create page</h1>
            <DropZone @drop.prevent="drop" @change="selectedFile" />
            <img 
            class="file-image ma-auto" 
            :src="imageURL"
            width="700"
            height="200"
            >
            <span class="file-name">File: {{ dropzoneFile.name }}</span>
        </div>
    </v-card>
</template>

<script>
import DropZone from '@/components/DropZone.vue'
import {ref} from "vue"

export default {
    name:'CreateView',
    components:{
        DropZone,
    },
    setup() {
        let dropzoneFile = ref("");
        let imageURL = ref(null)

        const drop = (event) => {
            dropzoneFile.value = event.dataTransfer.files[0]
            imageURL.value = URL.createObjectURL(dropzoneFile.value)
            console.log(imageURL.value)
        }

        const selectedFile = () => {
            dropzoneFile.value = document.querySelector('.dropzoneFile').files
        }

        return {dropzoneFile, drop, selectedFile, imageURL};
    },
}
</script>