<template>
    <div class="cardcontainer">
      <b-card
        v-for="(user, index) in users"
        :key="index"
        :title="user.name"
        :img-src="user.image"
       
        img-alt="User Image"
        img-top
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
      
        <b-card-text>
          {{ user.name }}
        </b-card-text>
        <b-card-text>
          {{ user.email }}
        </b-card-text>
        <b-card-text>
          {{ user.places.length }} places
        </b-card-text>
        <b-button href="https://www.fcbarcelona.com/en/" variant="primary">View Details</b-button>
      </b-card>
    </div>
  </template>
<script>
import axios from 'axios';
export default {
  name: "MyHome",
  data() {
    return {
      users: [
        {
        id:"1",
          name:"London",
          email:"ad@gmail.com",
          places:['p1','p2','p3'],
          image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        
        },
        {
      id:"2",
      name:"Barcelona",
          image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'",
          places:['p3','p4'],
        },
      ]
    };
  },
  methods:{
    getUserData(){
        axios.get('http://localhost:90/api/users').then((res)=>{
            this.users=res.data.users
            this.users.forEach((item)=>{
              if(!item.image){
                item.image='https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              }

            })


        }).catch((err)=>{
            console.log(err)

        })


    }

  },
  created(){
    this.getUserData()
    console.log("My Store",this.$store)
  }

};
</script>
  
<style>
.cardcontainer{
    /* border: 2px solid red!important; */
    display: flex;
    flex-direction: row;
    justify-content:center ;
    gap: 100px;
    flex-wrap: wrap;
    margin-top: 50px;
}
</style>