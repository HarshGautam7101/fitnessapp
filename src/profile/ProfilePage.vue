<template>
  <div class="main-wrapper footer-wrap">
    
     <div class="container">
        <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="work-section1">
            <div class="logo cust">
              <img class="img-fluid" src="src/assets/images/logo.png"/>
            </div>
            <div class="custom-form">
               <div class="row">
           <div class="personal-info">
            <h1> Personal Information </h1>   
            <div class="row">
              <div class="col-sm-4">
                  <label for="input-small">First Name</label>
                  </div>  
                  <div class="col-sm-8 cust">
                      <input type="text" v-model="email" name="firstname" class="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Harsh">
                  </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                  <label for="input-small">Last Name</label>
                  </div>  
                  <div class="col-sm-8 cust">
                      <input type="text" v-model="lastname" name="lastname" class="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Gautam">
                  </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                  <label for="input-small">Email</label>
                  </div>  
                  <div class="col-sm-8 cust">
                      <input type="email" v-model="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="xyz@gmail.com">
                  </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                  <label for="input-small">Birthday</label>
                  </div>  
                  <div class="col-sm-8 cust">
                    <input type="text" v-model="birthday" name="birthday" class="form-control" id="birthday" aria-describedby="emailHelp" placeholder="6 April 1998">
                  </div>
            </div>
            </div>   
          </div>
          <div class="row"><div class="dotted-line"></div></div>

          
                 <div class="row">
           <div class="body-info">
            <h1> Body Measurments </h1>   
            <div class="row">
              <div class="col-sm-4">
                  <label for="input-small">Weight</label>
                  </div>  
                  <div class="col-sm-8 cust">
                      <input type="text" v-model="weight" name="weight" class="form-control" id="weight" aria-describedby="emailHelp" placeholder="78 Kg">
                  </div>
            </div>
            <div class="row">
              <div class="col-sm-4">
                  <label for="input-small">Height</label>
                  </div>  
                  <div class="col-sm-8 cust">
                      <input type="text" v-model="height" name="height" class="form-control" id="height" aria-describedby="emailHelp" placeholder="6'3">
                  </div>
            </div>
          </div>   
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
            <a href="#"><font-awesome-icon icon="edit" />Profile</a>
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
            firstname:'',
            email: '',
            lastname: '',
            height: '',
            weight: '',
            birthday: '',
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