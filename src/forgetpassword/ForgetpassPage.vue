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
         <div class="restpass col"><h2> Forgot Password? </h2> <p> We just need your registered email address to send you password reset  </p> <!----></div>
              <input type="email" v-model="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && !email }" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
               <div v-show="submitted && !email" class="invalid-feedback">Email is required</div>

    <button class="btn btn-primary ctm-btm-sin"><span>Reset Password</span></button><br>
  
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