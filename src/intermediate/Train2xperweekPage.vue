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
            <h1>Train Muscle twice per Week</h1> 
      <div class="custom">
         
          
    
        <div class="goals-description">
           <div class="row buttons1">
     
          <div class="buttons ctm-mrg buttons2">
          <router-link to="/intermediate"> <font-awesome-icon icon="arrow-left"/> Back</router-link></div>
       
          </div> 
     
<div class="form-check goals">

        <h2>Monday (Chest and Triceps workout)</h2>
           <p class="collapse" id="viewdetailsi7">
Chest Press (Dumbbell)<br>
2 sets of 15 reps<br>

Chest Press (Dumbbell)<br>
4 sets of 8 reps HEAVY<br>

Chest Fly<br>
3 sets of 12 reps<br>

Incline Barbell Press<br>
2 sets of 15 reps<br>

Incline Barbell Press<br>
4 sets of 8 reps (HEAVY)<br>

Incline Press/Fly Pyramid<br>
5 sets of 5 reps<br>

Tricep Dips (Parallel Dip Station)<br>
4 sets of 12-15 reps<br>

Tricep Push Downs<br>
4 sets of 12-15 reps<br>

Tricep Extension (Low Pully)<br>
4 sets of 12-15 reps</p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetailsi7">View details &raquo;</a></p>
          <div class="workout-video">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/cLIjVG5fqKw"  allowfullscreen></iframe>
            </div>
          </div>
        
</div>
<div class="form-check goals">

        <h2>Tuesday (Legs and Abs workout)</h2>
           <p class="collapse" id="viewdetailsi8">  
Body Weight Squats<br>
1 Sets of 25 Reps<br>

Stationary Lunges<br>
5 Sets of 20 Reps each leg<br>

Barbell Squats<br>
5 Sets of 12 Reps<br>

Leg Extension (1 Sec Pause)<br>
5 Sets of 15 Reps<br>

Leg Press<br>
5 Sets of 12 Reps<br>

Leg Curls<br>
3 Sets of 33 Reps<br>

Plank<br>
3 Sets of 2 minutes <br>

Curl Ups<br>
3 Sets of 33 Reps
</p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetailsi8">View details &raquo;</a></p>
          <div class="workout-video">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/vavZ5w7Aut8"   allowfullscreen></iframe>
            </div>
            
          </div>
        
</div>
<div class="form-check goals">

        <h2>Wednesday (Back and Shoulders Workout)</h2>
           <p class="collapse" id="viewdetailsi9">
SUPERSET: PULL-UP/DUMBBELL PULL-OVER<br>
SINGLE-ARM BENT-OVER DUMBBELL ROW<br>
SEATED UNDERHAND PULL-DOWN<br>
SEATED CLOSE-GRIP CABLE ROW<br>
SUPERSET: STANDING LATERAL RAISE/SINGLE-ARM UPRIGHT ROW

          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetailsi9">View details &raquo;</a></p>
          <div class="workout-video">
            <div class="embed-responsive embed-responsive-16by9">
            <iframe class="embed-responsive-item" width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/kdvZ7q7M_UM"   allowfullscreen></iframe>
            </div>
          
          </div>
        
</div>
<div class="form-check goals">

        <h2>  Thrusday (Chest and Triceps)</h2>
           <p class="collapse" id="viewdetailsi10">
Repeat same workout routine as Monday </p>      <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetailsi10">View details &raquo;</a></p>
        
        
</div>
<div class="form-check goals">

        <h2>Friday(Legs and Abs)</h2>
           <p class="collapse" id="viewdetailsi11">
Repeat same workout routine as Tuesday
       <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetailsi11">View details &raquo;</a></p>
    
        
</div>
<div class="form-check goals">

        <h2>Saturday(Back and Shoulders)</h2>
           <p class="collapse" id="viewdetailsi12">
             Repeat same workout routine as Wednesday  
</p>
       <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetailsi12">View details &raquo;</a></p>
        
        
</div>
<div class="form-check goals">

        <h2>Sunday(Off day)</h2>
           <p class="collapse" id="viewdetailsw7">
Enjoy your rest day, eat well and give your body proper rest to recover
       <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetailsw7">View details &raquo;</a></p>
         
        
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