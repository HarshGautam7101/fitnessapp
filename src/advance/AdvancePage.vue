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
            <h1>6 Day Push /Pull /Legs (PPL)</h1> 
      <div class="custom">
         
          
    
        <div class="goals-description">
     
<div class="form-check goals">

        <h2>Push Day (Monday and Thrusday)</h2>
           <p class="collapse" id="viewdetails1">In the “push” workout you train all the upper body pushing muscles, i.e. the chest, shoulders and triceps.<br>
           THE FULL WORKOUT:<br>
Barbell Overhead Press 3x8<br>
Incline Dumbbell Press 3x10-12<br>
Cable Flyes 3x12-15<br>
Lateral Raises 3x12-15<br>
Dumbbell Overhead Extensions 3x12<br>
Tricep Pushdowns 3x12 </p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails1">View details &raquo;</a></p>
         <div class="workout-video">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/WqzpaRHzi3E"  allowfullscreen></iframe>
            </div>
          </div>
</div>


<div class="form-check goals">
   <h2>Pull Day (Tuesday and Friday)</h2>
           <p class="collapse" id="viewdetails2">In the “pull” workout you train all the upper body pulling muscles, i.e. the back and biceps.<br>
            Pull-Ups: 3-4 sets of 6-10 reps OR Kneeling Lat Pulldowns: 3-4 sets of 10-15 reps<br>
Barbell Row: 3-4 sets of 10-15 reps<br>
Reverse Grip Pulldowns: 3-4 sets of 8-12 reps<br>
Chest Supported Rear Delt Row: 3-4 sets of 10-15 reps<br>
Narrow Grip Barbell Curl: 2-3 sets of 8-12 reps<br>
Kneeling Face Pulls: 2-3 sets of 10-15 reps 
           </p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails2">View details &raquo;</a></p>
             <div class="workout-video">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/tPphF8gepd8"  allowfullscreen></iframe>
            </div>
          </div>
</div>
<div class="form-check goals">
   <h2>Leg Day (Wednesday and Saturday)</h2>
           <p class="collapse" id="viewdetails3">And in the “legs” workout you train the entire lower body, i.e. the quads, hamstrings, calves and abdominals.<br>

Back Squats OR Front Squats: 3-4 sets of 6-10 reps<br>
Hip Thrusts: 3-4 sets of 12-15 reps<br>
Split Squats (2 sets Bulgarian, 2 sets contralateral): 4 sets of 8-12 reps (each side)<br>
Glute Ham Raise (or Bosu Ball alternative): 3-4 sets of 10-15 reps<br>
Standing Single Leg Calf Raise: 2-4 sets of 6-10 reps<br>
Seated Calf Raise: 2-4 sets of 10-15 reps
           </p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails3">View details &raquo;</a></p>
            <div class="workout-video">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/Xg9B6pqHUQE"  allowfullscreen></iframe>
            </div>
          </div>
</div>
         <div class="form-check goals">
   <h2><router-link class="links" to="/stretchinga">Stretching</router-link></h2>
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