//simple instance creation
		new Vue(
		{
		  el: '#test-area',
		  data: 
		  {
		    message: 'Welcome to vue js'
		  }
		})

		// Creating a new Vue instance and pass in an options object.
		var demo = new Vue(
		{

		    // A DOM element to mount our view model.
		    el: '#mainone',

		    // Define properties and give them initial values.
		    data: 
		    {
		        show_tooltip: false,
		        text_content: 'Click here to change me.'
		    },

		    // the function
		    methods: 
		    {
		        hideTooltip: function()
		        {
		            this.show_tooltip = false;
		        },
		        toggleTooltip: function()
		        {
		            this.show_tooltip = !this.show_tooltip;
		        }
		    }
		})

		Vue.filter('currency', function (value) {
		    return 'Ksh.' + value.toFixed(2);
		});

		var demo = new Vue({
		    el: '#maintwo',
		    data: {

		        foods: [
		        	{
		        		name: 'Hey Pesto! Pizza',
		        		price: 1200,
		        		active:true
		        	},{
		        		name: 'Pizza Fresco',
		        		price: 700,
		        		active:false
		        	},{
		        		name: 'Fifty Fifty Pizza',
		        		price: 750,
		        		active:false
		        	},{
		        		name: 'Baked Sandwich',
		        		price: 300,
		        		active:false
		        	}
		        ]
		    },

		    methods: {
		    	toggleActive: function(s){
		            s.active = !s.active;
		    	},
		    	total: function(){

		        	var total = 0;

		        	this.foods.forEach(function(s){
		        		if (s.active){
		        			total+= s.price;
		        		}
		        	});

		    	   return total;
		        }
		    }
		});

		
