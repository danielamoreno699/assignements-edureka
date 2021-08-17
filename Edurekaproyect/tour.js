(function(){
    var tour = new Tour ({
        storage: false

    });

    tour.addSteps([

        {
            element: ".tour-step.tour-step-one",
            placement: "bottom",
            title: "welcome to edureka",
            content : " we offer live classes",
            onNext : function(tour){
                var nameProvided = $("input[name = your_name]").val();
                if ($.trim(nameProvided) !== ""){
                    name = nameProvided;
                }
        }


        
        {
            element: ".tour-step.tour-step-two",
            placement : "bottom",
            title: function() { return "welcome to edureka , " + name; },
            content : " we offer instructor led live online classes "


        },
        {
            element: ".tour-step.tour-step-three",
            placement : "bottom",
            title: function() { return "welcome to edureka , " + name; },
            content : function() { "we offer the flexibility to change the batch/class at any time"}




        },

        {
            element: ".tour-step.tour-step-four",
            placement : "bottom",
            title: function() { return "welcome to edureka , " + name; },
            content : function() { "we provide 24/7 support to our learners"}




        },
        {
            element: ".tour-step.tour-step-five",
            placement : "top",
            backdrop: true,
            title: function() { return "welcome to edureka , " + name; },
            content : function() { "check out our fresh baked courses"}




        },
        {
            element: ".tour-step.tour-step-six",
            placement : "top",
            title: function() { return "welcome to edureka , " + name; },
            content : "sign up to get started with edureka"




        },

        {
            element: "top",
            backdrop: true, 
            placement : true,
            title: function() { return "THAK YOU , " + name; },
            content: function() {return "we wish you happy learning"}




        },

        ]); 

        tour.init();
        tour.start();

}());