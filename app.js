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
        // Stores the IDs of lessons added to the shopping cart
            cart: [],

        // Controls whether the shopping cart page is displayed
            displayCart: false,

         // Stores the customer's checkout information
            order: {
             name: "",
             phone: ""
            }

        }
    },

    computed: {

    // Returns the number of lessons in the shopping cart
    numberOfItems() {
        return this.cart.length;
    },
 /*
        Checks whether checkout can proceed.

        Both customer name and phone number must
        contain text, and the cart must not be empty.

        trim() removes spaces from the beginning
        and end of a string.
    */
    canCheckout() {
        return (
            this.order.name.trim() !== "" &&
            this.order.phone.trim() !== "" &&
            this.cart.length > 0
        );
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
    WEEK 3 - TASK 3.5

    Counts how many times a particular lesson
    appears in the shopping cart.

    For example:
    cart = [1001, 1001, 1003]

    cartItemCount(1001) returns 2.
    cartItemCount(1003) returns 1.
*/
cartItemCount(lessonId) {

    // Start counting from zero
    let count = 0;

    // Loop through every lesson ID in the cart
    for (let id of this.cart) {

        // Increase the count when the IDs match
        if (id === lessonId) {
            count++;
        }
    }

    // Return the number of matching lessons
    return count;
},


/*
    Removes one copy of the selected lesson
    from the shopping cart.

    The available spaces increase by one
    when a lesson is removed.
*/
removeFromCart(lesson) {

    // Find the position of the lesson ID in the cart
    const index = this.cart.indexOf(lesson.id);

    // Only remove the lesson if it exists in the cart
    if (index !== -1) {

        // Remove one occurrence of the lesson ID
        this.cart.splice(index, 1);

        // Restore one available space
        lesson.availability++;
    }
},



    /*
        Switches between the lesson listing
        and shopping cart views.
    */
   
/*
    Switches between the lessons page
    and the shopping cart page.
*/
showCart() {
    this.displayCart = !this.displayCart;
},

/*
    Confirms the customer's order.

    The order can only proceed if the
    checkout information is complete.
*/
checkout() {

    // Prevent checkout if validation fails
    if (!this.canCheckout) {
        return;
    }

    // Store the customer's name before clearing the form
    const customerName = this.order.name.trim();

    // Display the confirmation message
    alert("Thank you, " + customerName +
          "! Your SkillSpring order has been confirmed.");

    // Empty the shopping cart
    this.cart = [];

    // Clear the customer information
    this.order.name = "";
    this.order.phone = "";

    // Return to the lessons page
    this.displayCart = false;
}


}


})

app.mount("#app")