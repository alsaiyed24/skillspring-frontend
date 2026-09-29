const app = Vue.createApp({
    data() {
        return {
            message: "SkillSpring",
            description: "Discover activities. Learn new skills.",
            status: ""
        }
    },

    methods: {
        showMessage() {
            this.status = "Let's find the perfect class for you!"
        }
    }
})

app.mount("#app")