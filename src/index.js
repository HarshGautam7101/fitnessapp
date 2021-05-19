import Vue from 'vue';
import Vuelidate from 'vuelidate';



import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';
import {library} from'@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
library.add(fas);
Vue.component('font-awesome-icon',FontAwesomeIcon);
Vue.use(Vuelidate);

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
    
    
});  