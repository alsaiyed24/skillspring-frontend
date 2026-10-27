const app = Vue.createApp({

    data() {
        return {

            message: "SkillSpring",
            description: "Discover activities. Learn new skills.",

        
            // Array containing the lessons available on SkillSpring.
// Each lesson is an object with its own details.
lessons: [
    {
        id: 1001,
        subject: "Coding",
        location: "Hendon",
        price: 25,
        availability: 5,
        icon: "💻"
    },
    {
        id: 1002,
        subject: "Mathematics",
        location: "Colindale",
        price: 20,
        availability: 5,
        icon: "📐"
    },
    {
        id: 1003,
        subject: "Art",
        location: "Wembley",
        price: 18,
        availability: 5,
        icon: "🎨"
    }
],

            cart: [],
            displayCart: false

        }
    },

    computed: {

    // Returns the total number of lessons added to the cart
    numberOfItems() {
        return this.cart.length;
    }

},

   
methods: {

    /*
        Adds the selected lesson to the shopping cart.

        The lesson parameter identifies which lesson
        the user clicked.
    */
    addToCart(lesson) {

        // Only add a lesson when spaces are available
        if (this.canAddToCart(lesson)) {

            // Store the selected lesson's ID
            this.cart.push(lesson.id);

            // Reduce available spaces for that lesson
            lesson.availability--;
        }
    },

    /*
        Checks whether the selected lesson has
        spaces remaining.

        Returns true if spaces are available,
        otherwise returns false.
    */
    canAddToCart(lesson) {
        return lesson.availability > 0;
    },

    /*
        Switches between the lesson listing
        and shopping cart views.
    */
    showCart() {
        this.displayCart = !this.displayCart;
    }

}


})

app.mount("#app")