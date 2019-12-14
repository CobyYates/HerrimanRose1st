import MainPage from './components/MainPage.vue'
import Resources from './components/Resources.vue'
import SignUp from './components/SignUp.vue'
// import  from './components/.vue'

export const routes = [
    { path: '', component: MainPage},
    { path: '/SignUp', component: SignUp},
    { path: '/Resources', component: Resources},
]