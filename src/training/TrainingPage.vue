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
            <h1>Choose your training level</h1> 
      <div class="custom">
         
          
    
        <div class="goals-description">
     
<div class="form-check goals">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  
          <h2>Beginner<span id="display">(Recomended)</span></h2>
           <p class="collapse" id="viewdetails1">Begineer's workout consist of some light body weight exercises to get you started with training, once you get a good grip with your body weight you can shift onto resistance bands workouts to level up your training.  </p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails1">View details &raquo;</a></p>
        
</div>


<div class="form-check goals">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
   <h2>Intermediate</h2>
           <p class="collapse" id="viewdetails2">We have 1x/week and 2x/week workout program in this category</p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails2">View details &raquo;</a></p>
        
</div>
  
        
                 <div class="form-check goals">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <h2>Advance</h2>
           <p class="collapse" id="viewdetails3">If you are into training for 2-3 years, we have advance training programs for you which consist of push, pull, legs workout.</p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails3">View details &raquo;</a></p>
</div>
 
     
       
        </div>
          </div>
      </div>
      </div>
      <div class="row">
          <div class="buttons training">
          <router-link to="/macros"> <font-awesome-icon icon="arrow-right"/> Next</router-link></div>
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