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
            <h1>Choose your fitness goals</h1> 
      <div class="custom">
         
          
    
        <div class="goals-description">
     
<div class="form-check goals">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
  
          <h2>Lose weight / fat</h2>
           <p class="collapse" id="viewdetails1"> The single most common goal of the people who decide to start exercising is their desire to lose fat. In addition to working out, you should also seek advice about modifying your eating habits, reducing caloric intake, and reducing carbs.</p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails1">View details &raquo;</a></p>
        
</div>


<div class="form-check goals">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
   <h2>Building muscles</h2>
           <p class="collapse" id="viewdetails2">Some people don’t have a weight problem. Instead, they want to build muscle in order to look and feel better. This involves plenty of hard lifts, long sessions, and an increased intake of proteins.</p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails2">View details &raquo;</a></p>
        
</div>
  
        
                 <div class="form-check goals">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
          <h2>Improving endurance</h2>
           <p class="collapse" id="viewdetails3">People get winded as they take a couple of flights of stairs. This motivates them to start working out and improve their endurance. 20-30 minute high-intensity intervals are perfect for this, especially if you use steppers or rowers. Increase your heart rate, and keep at it.
 </p>
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