const app = Vue.createApp({

    data() {
        return {

            message: "SkillSpring",
            description: "Discover activities. Learn new skills.",

            lesson: {
                id: 1001,
                subject: "Coding",
                location: "Hendon",
                price: 25,
                availability: 5
            },

            cart: []

        }
    },

    computed: {

        canAddToCart() {
            return this.lesson.availability > 0;
        }

    },

    methods: {

        addToCart() {
            this.cart.push(this.lesson.id);
            this.lesson.availability = this.lesson.availability - 1;
        }

    }

})

app.mount("#app")