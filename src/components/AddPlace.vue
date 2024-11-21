<template>
    <div class="add-place-form">
        <div class="form-wrapper">
            <div class="form-container">
                <h2 class="text-center mb-4">Add New Place</h2>
                <div class="all">
                    <form id="submissionForm" @submit.prevent="submitHandler">
                        <div class="form-group mb-3">
                            <label for="title" class="form-label">Title</label>
                        
                            <input v-model="title" type="text" class="form-control" id="title"
                                placeholder="Enter title" />
                            <span class="error-message"></span>
                        </div>
                        <div class="form-group mb-3">
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" v-model="description" id="description" rows="3"
                                placeholder="Enter description"></textarea>
                            <span class="error-message"></span>
                        </div>
                        <div class="form-group mb-5">
                            <label for="address" class="form-label">Address</label>
                            <input v-model="address" type="text" class="form-control" id="address"
                                placeholder="Enter address" />
                            <span class="error-message"></span>
                        </div>

                        <div class="form-group mt-3 mb-3">
                            <label for="image" class="form-label">Upload Image</label>
                            <input type="file" @change='onFileChange' class="form-control" id="image"/>
                        </div>

                        <div style="text-align: center">
                            <button type="submit" class="button button--success">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

// import axios from 'axios';
export default {
    name: "AddPlace",
    data() {

        return {
             
                title: "",
                description: "",
                address: "",
                selectedImage: null


        }

    },
    computed: {
        // token() {
        //     return this.$store.getters.token
        // }

    },
    methods: {
    async submitHandler(){
        // console.log(this.title)
        // console.log(this.description)
        console.log(this.selectedImage)
        
    //   const  url="http://localhost:90/api/add/places";
    
    },
    
    onFileChange(event) {
        this.selectedImage = event.target.files[0]; 

}
   
  
    }


    }


</script>
<style scoped>
/* Context Menu */
.all {
    margin-left: 400px;
}

.context-menu {
    position: absolute;
    background-color: #fff;
    border: 1px solid #ddd;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    padding: 10px;
    border-radius: 4px;
}

.context-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.context-menu li {
    padding: 8px 12px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.context-menu li:hover {
    background-color: #f5f5f5;
}

.button--success {
    background-color: green !important;
    padding: 10px 12px;
    border: none;
    color: #fff;
    border-radius: 5px;
    width: 40%;
}
</style>