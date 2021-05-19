<template>
  <div class="main-wrapper footer-wrap">
    
      <div class="container">
     
        <div class="row">
          <div class="work-section1">
            <div class="logo">
              <img class="img-fluid" src="src/assets/images/logo.png"/>
            </div>
      </div></div>
      <div class="row">
      <div class="goal-section">
            <h1>Choose your training program</h1> 
      <div class="custom">
         
          
    
        <div class="goals-description">
     
<div class="form-check goals">

        <h2><router-link class="links" to="/bodyweight">Body weight exercise</router-link></h2>
           <p class="collapse" id="viewdetails1">People who believe that you have to wield heavy weights in order to build big muscles have simply never used their body in the right way. Get creative with your bodyweight workouts and you can lose fat, get fitter and bulk up without ever having to touch a weight plate or dumbbell.</p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails1">View details &raquo;</a></p>
        
</div>


<div class="form-check goals">
   <h2><router-link class="links" to="/resistanceband">Resistance band exercise</router-link></h2>
           <p class="collapse" id="viewdetails2">Rock out with the band! Resistance bands are a great addition to any strength training routine or rehabilitation program. They come in a variety of sizes, lengths, and resistance levels.They’re also portable and easy to store, so they’re perfect for home use</p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails2">View details &raquo;</a></p>
        
</div>
         <div class="form-check goals">
   <h2><router-link class="links" to="/stretching">Stretching</router-link></h2>
           <p class="collapse" id="viewdetails4">Whether you’re just learning how to start working out or you’ve been hitting the gym regularly for years, incorporating regular stretching exercises into your routine can help prevent injury and keep you performing at your best.</p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails4">View details &raquo;</a></p>
        
</div>
        </div>
          </div>
      </div>
      </div>
   </div>
     <div class="footer-section">
       <div class="row">
    <div class="footer-content">
      <ul>
          <li>
            <a href="#"><font-awesome-icon icon="home" /><router-link to="/dashboard">Home</router-link></a>
            </li>
            <li>
            <a href="#"><font-awesome-icon icon="align-justify" /><router-link to="/goals">Goal</router-link></a>
            </li>
            <li class="go">
            <a href="#" ><font-awesome-icon icon="dumbbell" />Go</a>
            </li>
            <li>
            <a href="#"><font-awesome-icon icon="edit" /><router-link to="/profile" >Profile</router-link></a>
            </li>
            <li>
            <a href="#"><font-awesome-icon icon="sign-out-alt" /><router-link to="/login">Logout</router-link></a>
            </li>
            </ul>
          </div>
       </div>
       </div>
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            email: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        ...mapState('account', ['status'])
    },
    created () {
        // reset login status
        this.logout();
    },
    methods: {
        ...mapActions('account', ['login', 'logout']),
        handleSubmit (e) {
            this.submitted = true;
            const { email, password } = this;
            if (email && password) {
                this.login({ email, password })
            }
        }
    }
};
</script>