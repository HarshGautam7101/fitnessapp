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

        <h2><router-link class="links" to="/1xperweek">Train Muscle Groups Once per Week</router-link></h2>
           <p class="collapse" id="viewdetails1">Working a single muscle group per session gives you the opportunity to really focus on that muscle group and give it the volume and intensity it needs to grow. One caveat: When you work your entire body each time you train, you may not have the time or energy to maximally stimulate each muscle group. Some muscles may get short-changed. Make sure you have the mentality to focus intensely on one muscle group each session. </p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails1">View details &raquo;</a></p>
        
</div>


<div class="form-check goals">
   <h2><router-link class="links" to="/2xperweek">Train Muscle Groups Twice per Week</router-link></h2>
           <p class="collapse" id="viewdetails2">When training twice per week, it only leaves you with half the amount of exercises per body part. By alternating between two different workouts weekly, you're training with the same variety as you did when training one day per week, and getting the added benefit of stimulating muscle-fibers more frequently.</p>
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