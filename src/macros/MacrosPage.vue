<template>
  <div class="main-wrapper footer-wrap">
     <div class="container">
      <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="work-section1">
            <div class="logo">
              <img class="img-fluid" src="src/assets/images/logo.png"/>
            </div>
      </div></div>
        <div class="custom-form">
      <div class="row ">
          <div class="macros_calculator">
              <h1> Your maintenance macros</h1>
       
               <p class="collapse" id="viewdetails1"> Whether your goal is to gain muscle or lose fat, knowing how to figure out your macronutrients is crucial. First, it is necessary to determine your maintenance amount of calories. This is the amount of calories that if you consumed every day, your body weight would remain the same.</p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails1">Know more &raquo;</a></p>
        <div class="row cust1">
              <div class="col-sm-6">
                  <label for="input-small">Weight in kg</label>
                  </div>  
                  <div class="col-sm-6 cust">
                      <input type="text" v-model="weight" name="weight" class="form-control" :class="{ 'is-invalid': submitted && $v.user.weight.$error }" aria-describedby="emailHelp" placeholder="78">
                     <div v-if="submitted && !$v.user.weight.required" class="invalid-feedback">Weight is required</div>
                  </div>
            </div>
            <div class="row cust1">
              <div class="col-sm-6">
                  <label for="input-small">Height in cm</label>
                  </div>  
                  <div class="col-sm-6 cust">
                      <input type="text" v-model="height" name="height" class="form-control" :class="{ 'is-invalid': submitted && $v.user.height.$error }" aria-describedby="emailHelp" placeholder="178">
                     <div v-if="submitted && !$v.user.height.required" class="invalid-feedback">Height is required</div>
                  </div>
            </div>
            <div class="row cust1">
              <div class="col-sm-6">
                  <label for="input-small">Age</label>
                  </div>  
                  <div class="col-sm-6 cust">
              <input type="text" v-model="age" name="age" class="form-control" :class="{ 'is-invalid': submitted && $v.user.age.$error }" aria-describedby="emailHelp" placeholder="22">
                     <div v-if="submitted && !$v.user.age.required" class="invalid-feedback">Age is required</div>
                  </div>
            </div>
              <div class="row cust1">
              <div class="col-sm-6">
                  <label for="input-small">Gender</label>
                  </div>  
                  <div class="col-sm-6 cust">
                     <select name="gender"  v-model="user.gender"  class="form-control" :class="{ 'is-invalid': submitted && $v.user.gender.$error }"><option value="">Click to select</option><option value="1">Male</option> <option value="2">
                    Female
                      </option></select> 
                       <div v-if="submitted && !$v.user.gender.required" class="invalid-feedback">Please select gender</div>
                  </div>
            </div>
            <div class="row cust1">
                <div class="calculate_macros">
                    <button class="vue-btn btn btn-primary ctm-btm-sin calculate">Calculate</button>
                </div>
                </div>
      <div class="row">
         <div class="macro-results">
            <p> Calories <span> 3500</span></p>
            <p> Protein in gm <span> 3500</span></p>
            <p> Fat in gm <span> 3500</span></p>
         </div>
      </div>
 
   <h1 class="unique">Required macros based on your goal</h1>
               <p class="collapse" id="viewdetails0">These are your final macros based on your goal on which we will plan your diet accordingly.</p>
          <p class="viewmore"><a class="btn" data-toggle="collapse" data-target="#viewdetails0">Know more &raquo;</a></p>
      
      <div class="row">
         <div class="macro-results ctm-mrg">
            <p> Calories <span> 3500</span></p>
            <p> Protein in gm <span> 3500</span></p>
            <p> Fat in gm <span> 3500</span></p>
         </div>
      </div>
  
    <div class="row buttons1">
     
          <div class="buttons ctm-mrg buttons1">
          <router-link to="/goals"> <font-awesome-icon icon="arrow-left"/> Back</router-link></div>
           <div class="buttons ctm-mrg buttons1">
          <router-link to="/diet">  Next <font-awesome-icon icon="arrow-right"/></router-link></div>
          </div> 

          </div>
          </div>
          </div>
          </form>
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";

export default {
    data () {
        return {
              user: {
                    weight: "",
                    height: "",
                    age: "",
                    gender:""
                  
            },
            submitted: false
            
        }
    },
    validations: {
            user: {
               weight:{required},
               height:{required},
               age:{required},
               gender:{required}
                

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
        ...mapActions('account', ['register']),
        handleSubmit(e) {
            this.submitted = true;
             this.$v.$touch();
                if (this.$v.$invalid) {
                    return;
                }

            // this.$validator.validate().then(valid => {
            //     if (valid) {
            //         this.register(this.user);
            //     }
            // });
        }
    }
};
</script>