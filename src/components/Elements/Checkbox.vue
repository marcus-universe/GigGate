<template>
    <div class="checkbox_Container">
        <input type="checkbox" name="cloud" id="Cloud" class="customCheckbox" @change="change()" ref="checkbox">

        <div class="checkboxDesign"><div></div></div>
    </div>

</template>

        <script>
            export default {
    emits: ['isChecked'],
    data() {
        return {
            isChecked: false
        }
    },
    methods: {
        change() {
            if (this.$refs.checkbox.checked) {
                this.isChecked = true
            } else {
                this.isChecked = false
            }
                this.$emit('isChecked', this.isChecked) 
        }
    }

}
        </script>

        <style>

        </style>
