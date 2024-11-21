<template>
    <div class="container">
      <b-form @submit.prevent="loginHandler">
        <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
          <b-form-input id="input-1" v-model="email" type="email" placeholder="Enter email" required></b-form-input>
        </b-form-group>
  
        <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
          <b-form-input id="input-2" v-model="password" placeholder="Enter password" required></b-form-input>
        </b-form-group>
  
        <b-button type="submit" variant="primary">Login</b-button>
  
      </b-form>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    name: "LoginUser",
    data() {
      return {
        
          email: '',
        //   name: '',
          password: '',
         
      

  
      }
  
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      loginHandler() {
        axios
          .post("http://localhost:90/api/users/login", {
            
            // name:this.name,
            email:this.email,
            password:this.password
            
          })
          .then((res) => {
            // Process the response data
            alert("Login successfull");
           console.log("Login Response", res.data)
            this.$store.commit('setUserData',res.data)
            this.$router.push('/')
           
          })
          .catch((error) => {
            alert(error.message);
          });
         
  
      },
  
    }
  }
  </script>
  
  <style>
  .container {
    width: 100%;
    height: 100vh;
    /* margin: 0 auto; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  form {
    width: 50%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    /* border: 2px solid red; */
    padding: 10px;
  }
  </style>