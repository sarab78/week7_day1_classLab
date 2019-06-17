import Vue from 'vue'; //how we use our require

document.addEventListener('DOMContentLoaded', () => {
  // console.log('hi');//use to check is javascript file is working
 new Vue({ //constructor function
   el: "#app",
   data: { //data is an object
     greeting: "Hello world!"
   },
   methods: {
     updateGreeting: function(name){
       this.greeting = "Go away " + name
     }
   }
    });

})
