<template>
  <div class="main-wrapper">
      <div class="container">
        <form @submit.prevent="handleSubmit">
        <div class="row">
          <div class="work-section1">
            <div class="logo img">
              <img class="img-fluid" src="/src/assets/images/logo.png"/>
            </div>
            <div class="custom-form">
                    <input type="text" placeholder="Firstname" v-model="user.firstName" id="firstName" name="firstName" class="form-control" :class="{ 'is-invalid': submitted && $v.user.firstName.$error }" />
                        <div v-if="submitted && !$v.user.firstName.required" class="invalid-feedback">First Name is required</div>

                        <input type="text" v-model="user.lastName" id="lastName" name="lastName" placeholder="Lastname" class="form-control" :class="{ 'is-invalid': submitted && $v.user.lastName.$error }" />
                        <div v-if="submitted && !$v.user.lastName.required" class="invalid-feedback">Last Name is required</div>
        
                    <input type="email" placeholder="Email" v-model="user.email" id="email" name="email" class="form-control" :class="{ 'is-invalid': submitted && $v.user.email.$error }" />
                        <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                            <span v-if="!$v.user.email.required">Email is required</span>
                            <span v-if="!$v.user.email.email">Email is invalid</span>
                        </div>
              <input type="password" placeholder="Password" v-model="user.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                    <span v-if="!$v.user.password.required">Password is required</span>
                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span></div>
                <input type="password" placeholder="Confirm Password" v-model="user.confirmPassword" id="confirmPassword" name="confirmPassword" class="form-control" :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }" />
                <div v-if="submitted && $v.user.confirmPassword.$error" class="invalid-feedback">
                    <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                    <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                </div>

                  <input type="text" placeholder="Weight" v-model="user.weight" id="weight" name="weight" class="form-control" :class="{ 'is-invalid': submitted && $v.user.weight.$error }" />
                        <div v-if="submitted && !$v.user.weight.required" class="invalid-feedback">weight is required</div>
                  
                    <div class="form-row">
                    <select name="heightt"  v-model="user.heightt" id="__BVID__30" class="form-control" :class="{ 'is-invalid': submitted && $v.user.heightt.$error }">
                      
                  <option value="" disabled>Select your height</option>
                  <option value="4.0">
                    4'0"
                  </option><option value="4.1">
                    4'1"
                  </option><option value="4.2">
                    4'2"
                  </option><option value="4.3">
                    4'3"
                  </option><option value="4.4">
                    4'4"
                  </option><option value="4.5">
                    4'5"
                  </option><option value="4.6">
                    4'6"
                  </option><option value="4.7">
                    4'7"
                  </option><option value="4.8">
                    4'8"
                  </option><option value="4.9">
                    4'9"
                  </option><option value="4.10">
                    4'10"
                  </option><option value="4.11">
                    4'11"
                  </option><option value="5.0">
                    5'0"
                  </option><option value="5.1">
                    5'1"
                  </option><option value="5.2">
                    5'2"
                  </option><option value="5.3">
                    5'3"
                  </option><option value="5.4">
                    5'4"
                  </option><option value="5.5">
                    5'5"
                  </option><option value="5.6">
                    5'6"
                  </option><option value="5.7">
                    5'7"
                  </option><option value="5.8">
                    5'8"
                  </option><option value="5.9">
                    5'9"
                  </option><option value="5.10">
                    5'10"
                  </option><option value="5.11">
                    5'11"
                  </option><option value="6.0">
                    6'0"
                  </option><option value="6.1">
                    6'1"
                  </option><option value="6.2">
                    6'2"
                  </option><option value="6.3">
                    6'3"
                  </option><option value="6.4">
                    6'4"
                  </option><option value="6.5">
                    6'5"
                  </option><option value="6.6">
                    6'6"
                  </option><option value="6.7">
                    6'7"
                  </option><option value="6.8">
                    6'8"
                  </option><option value="6.9">
                    6'9"
                  </option><option value="6.10">
                    6'10"
                  </option><option value="6.11">
                    6'11"
                  </option><option value="7.0">
                    7'0"
                  </option><option value="7.1">
                    7'1"
                  </option><option value="7.2">
                    7'2"
                  </option><option value="7.3">
                    7'3"
                  </option><option value="7.4">
                    7'4"
                  </option><option value="7.5">
                    7'5"
                  </option></select>  <div v-if="submitted && !$v.user.heightt.required" class="invalid-feedback">Please select height</div><!----></div>
                  
                  <div class="form-row"><div class="text-left col custm-dob"><b-label id="dob">DOB</b-label></div> <div class="col"><select name="month"  v-model="user.month" id="__BVID__34" class="form-control" :class="{ 'is-invalid': submitted && $v.user.month.$error }"><option value="">Month</option> <option value="1">
                    1
                  </option><option value="2">
                    2
                  </option><option value="3">
                    3
                  </option><option value="4">
                    4
                  </option><option value="5">
                    5
                  </option><option value="6">
                    6
                  </option><option value="7">
                    7
                  </option><option value="8">
                    8
                  </option><option value="9">
                    9
                  </option><option value="10">
                    10
                  </option><option value="11">
                    11
                  </option><option value="12">
                    12
                  </option></select> <div v-if="submitted && !$v.user.month.required" class="invalid-feedback">Please select month</div><!----></div> <div class="col"><select name="date"  v-model="user.date" id="__BVID__35" class="form-control" :class="{ 'is-invalid': submitted && $v.user.date.$error }"><option value="">Date</option> <option value="1">
                    1
                  </option><option value="2">
                    2
                  </option><option value="3">
                    3
                  </option><option value="4">
                    4
                  </option><option value="5">
                    5
                  </option><option value="6">
                    6
                  </option><option value="7">
                    7
                  </option><option value="8">
                    8
                  </option><option value="9">
                    9
                  </option><option value="10">
                    10
                  </option><option value="11">
                    11
                  </option><option value="12">
                    12
                  </option><option value="13">
                    13
                  </option><option value="14">
                    14
                  </option><option value="15">
                    15
                  </option><option value="16">
                    16
                  </option><option value="17">
                    17
                  </option><option value="18">
                    18
                  </option><option value="19">
                    19
                  </option><option value="20">
                    20
                  </option><option value="21">
                    21
                  </option><option value="22">
                    22
                  </option><option value="23">
                    23
                  </option><option value="24">
                    24
                  </option><option value="25">
                    25
                  </option><option value="26">
                    26
                  </option><option value="27">
                    27
                  </option><option value="28">
                    28
                  </option><option value="29">
                    29
                  </option><option value="30">
                    30
                  </option><option value="31">
                    31
                  </option></select> <div v-if="submitted && !$v.user.date.required" class="invalid-feedback">Please select date</div><!----></div> <div class="col"><select name="year"  v-model="user.year" id="__BVID__36" class="form-control" :class="{ 'is-invalid': submitted && $v.user.year.$error }"><option value="">Year</option> <option value="1980">
                    1980
                  </option><option value="1981">
                    1981
                  </option><option value="1982">
                    1982
                  </option><option value="1983">
                    1983
                  </option><option value="1984">
                    1984
                  </option><option value="1985">
                    1985
                  </option><option value="1986">
                    1986
                  </option><option value="1987">
                    1987
                  </option><option value="1988">
                    1988
                  </option><option value="1989">
                    1989
                  </option><option value="1990">
                    1990
                  </option><option value="1991">
                    1991
                  </option><option value="1992">
                    1992
                  </option><option value="1993">
                    1993
                  </option><option value="1994">
                    1994
                  </option><option value="1995">
                    1995
                  </option><option value="1996">
                    1996
                  </option><option value="1997">
                    1997
                  </option><option value="1998">
                    1998
                  </option><option value="1999">
                    1999
                  </option><option value="2000">
                    2000
                  </option><option value="2001">
                    2001
                  </option><option value="2002">
                    2002
                  </option><option value="2003">
                    2003
                  </option><option value="2004">
                    2004
                  </option><option value="2005">
                    2005
                  </option><option value="2006">
                    2006
                  </option><option value="2007">
                    2007
                  </option><option value="2008">
                    2008
                  </option><option value="2009">
                    2009
                  </option><option value="2010">
                    2010
                  </option><option value="2011">
                    2011
                  </option><option value="2012">
                    2012
                  </option><option value="2013">
                    2013
                  </option><option value="2014">
                    2014
                  </option><option value="2015">
                    2015
                  </option><option value="2016">
                    2016
                  </option><option value="2017">
                    2017
                  </option><option value="2018">
                    2018
                  </option><option value="2019">
                    2019
                  </option><option value="2020">
                    2020
                  </option><option value="2021">
                    2021
                  </option></select> <div v-if="submitted && !$v.user.year.required" class="invalid-feedback">Please select year</div><!----></div></div>
                  <div class="form-row "><div class="text-left col custm-dob"><b-label id="exp">Experience in training</b-label>
                    <select name="eit"  v-model="user.eit" id="__BVID__71" class="form-control" :class="{ 'is-invalid': submitted && $v.user.eit.$error }"><option value="">Click to select</option><option value="1">Less than 1 year</option> <option value="2">
                        Less than 2 years
                      </option><option value="3">
                        Less than 3 years
                      </option><option value="4">
                        3 years +
                      </option></select>  <div v-if="submitted && !$v.user.eit.required" class="invalid-feedback">Please select Training experience</div><!----></div></div>
                     
               <button data-v-bb7979c4="" class="vue-btn btn btn-primary ctm-btm-sin" type="submit"><div data-v-bb7979c4="" class=""></div> <span data-v-bb7979c4="">Sign up</span></button>
             
                  
            </div>
          </div>
        </div>
        </form>
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
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    weight:"",
                    heightt:"",
                    month:"",
                    year:"",
                    date:"",
                    eit:""
            },
            submitted: false
        };
    },
      validations: {
            user: {
                firstName: { required },
                lastName: { required },
                weight: {required},
                email: { required, email },
                height:{required},
                eit:{required},
                year:{required},
                date:{required},
                heightt:{required},
                month:{required},
                password: { required, minLength: minLength(6) },
                confirmPassword: { required, sameAsPassword: sameAs('password') }
                

            }
        },
    computed: {
        ...mapState('account', ['status'])
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