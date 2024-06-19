<template>
    <div 
    @dragenter.prevent="toggleActive" 
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'active-dropzone': active }"
    class="dropzone">
        <span>Drag or drop files</span>
        <span>OR</span>
        <label for="dropzoneFile">select file</label>
        <input type="file" multiple accept="image/*" id="dropzoneFile" class="dropzoneFile" />
    </div>
</template>

<script>
import {ref} from "vue"
export default {
    name: "DropZone",
    setup(){
        const active = ref(false)

        const toggleActive= () => {
            active.value = !active.value
        }

        return {active, toggleActive}
    }
}
</script>

<style scoped lang="scss">
    .dropzone{
        margin: auto;
        width: 400px;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 16px;
        border: 2px dashed green;
        background-color: aliceblue;
        transition: 0.3s ease all;

        label{
            padding: 8px 12px;
            color: green;
            transition: 0.3s ease all;
        }

        input{
            display: none;
        }
    }

    .active-dropzone{
        color: beige;
        border-color: beige;
        background-color: bisque;

        label{
            background-color: antiquewhite;
            color: aqua;
        }
    }
</style>