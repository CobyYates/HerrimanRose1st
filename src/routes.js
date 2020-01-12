import MainPage from './components/MainPage.vue'
import Resources from './components/Resources.vue'
import SignUp from './components/SignUp.vue'
import Applications from './components/Resources/Applications.vue'
import Finding from './components/Resources/Finding.vue'
import Indexing from './components/Resources/Indexing.vue'
import Memories from './components/Resources/Memories.vue'
import TakeAName from './components/Resources/TakeAName.vue'
// import  from './components/.vue'

export const routes = [
    { path: '', component: MainPage},
    { path: '/schedule', component: SignUp},
    { path: '/Resources', component: Resources},
    { path: '/apps', component: Applications},
    { path: '/indexing', component: Indexing},
    { path: '/finding-names', component: Finding},
    { path: '/memories', component: Memories},
    { path: '/take-a-name', component: TakeAName},
]