import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage'
import LoginPage from '../login/LoginPage'
import RegisterPage from '../register/RegisterPage'
import ForgetpassPage from '../forgetpassword/ForgetpassPage'
import DashboardPage from '../dashboard/DashboardPage'
import GoPage from '../dashboard/GoPage'
import ProfilePage from '../profile/ProfilePage'
import GoalPage from '../goals/GoalPage'
import MacrosPage from '../macros/MacrosPage'
import TrainingPage from '../training/TrainingPage'
import BeginnerPage from '../beginner/BeginnerPage'
import BodyweightPage from '../beginner/BodyweightPage'
import ResistancebandPage from '../beginner/ResistancebandPage'
import IntermediatePage from '../intermediate/IntermediatePage'
import Train1xperweekPage from '../intermediate/Train1xperweekPage'
import Train2xperweekPage from '../intermediate/Train2xperweekPage'
import StretchingIPage from '../intermediate/StretchingIPage'
import AdvancePage from '../advance/AdvancePage'
import StretchingAPage from '../advance/StretchingAPage'
import StretchingPage from '../stretching/StretchingPage'
import DietPage from '../diet/DietPage'

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/forgetpassword', component: ForgetpassPage },
    { path: '/dashboard', component: DashboardPage },
    { path: '/go', component: GoPage },
    { path: '/profile', component: ProfilePage },
    { path: '/goals', component: GoalPage },
    { path: '/macros', component: MacrosPage },
    { path: '/training', component: TrainingPage },
    { path: '/beginner', component: BeginnerPage },
    { path: '/bodyweight', component: BodyweightPage },
    { path: '/resistanceband', component: ResistancebandPage },
    { path: '/intermediate', component: IntermediatePage },
    { path: '/1xperweek', component: Train1xperweekPage },
    { path: '/2xperweek', component: Train2xperweekPage },
    { path: '/stretchingi', component: StretchingIPage },
    { path: '/advance', component: AdvancePage },
    { path: '/stretchinga', component:StretchingAPage  },
    { path: '/stretching', component: StretchingPage },
    { path: '/diet', component: DietPage },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register','/forgetpassword','/dashboard','/profile','/goals','/macros','/training','/beginner','/intermediate','/advance','/bodyweight','/resistanceband','/stretching','/1xperweek','/2xperweek','/stretchingi','/stretchinga','/go','/diet'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
})