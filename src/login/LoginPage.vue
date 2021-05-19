<template>
  <div class="main-wrapper">
    
      <div class="container">
        <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="work-section1">
            <div class="logo">
              <img class="img-fluid" src="src/assets/images/logo.png"/>
            </div>
            <div class="custom-form">
         
              <input type="email" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
               <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>
             
    <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" id="exampleInputPassword1" placeholder="Password">
    <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
    <button class="btn btn-primary ctm-btm-sin"><span> Sign In </span></button><br>
    <a href="" class="btn btn-link ctm-fpw"><router-link to="/forgetpassword" class="btn btn-link">Forget Password</router-link></a><br>
    <a href="" class="btn btn-link ctm-btm-sin ctm-reg"><span><router-link to="/register" class="btn btn-link">Sign Up</router-link> </span></a>
            </div>
          </div>
        </div>
         </form>
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