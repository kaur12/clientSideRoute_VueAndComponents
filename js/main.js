// create a couple of components we can request and render
let SplashComponent = {
    template: `<h1>Welcome to my Super Awesome App!</h1>`
}

// these are the same as Express routes => router.get('/', .... do something with the request)
const routes = [
    { path: '/', name: 'splash', component: SplashComponent }
]

const router = new VueRouter({
    routes // short for routes: routes
})

const vm = new Vue( {
    data: {

    },

    methods: {

    },

    router
}).$mount("#app");