const Home = window.httpVueLoader('./components/Home.vue')
const Login = window.httpVueLoader('./components/Login.vue')
const SignUp = window.httpVueLoader('./components/SignUp.vue')
const Recipies = window.httpVueLoader('./components/Recipies.vue')
const LessonsRegister = window.httpVueLoader('./components/LessonsRegister.vue')
const FAQ = window.httpVueLoader('./components/FAQ.vue')
const Contact = window.httpVueLoader('./components/Contact.vue')
const About = window.httpVueLoader('./components/About.vue')
const Lessons = window.httpVueLoader('./components/Lessons.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp},
  { path: '/recipies', component: Recipies},
  { path: '/lessonsregister', component: LessonsRegister},
  { path: '/faq', component: FAQ},
  { path: '/contact', component: Contact},
  { path: '/about', component: About},
  { path: '/lessons', component: Lessons},
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  data: {
    connecte:false,
    errors: [],
    email: null,
    password: null
  },
  async mounted () {
  },
  methods: {
    async inscription(users){
      const res = await axios.post('/api/signup', users);
      this.$router.push('/login')
    },
    async connexion(users){
        const res = await axios.post('/api/login', users);
        this.connecte=true;
        this.$router.push('/recipies');
    },
    async lessons(lesson_register){
      try {
        const res = await axios.post('/api/lessonsregister', lesson_register);
        this.$router.push('/lessons')
           
      } catch (error) {
        console.log("error", error);
      }
    }
  }
})
