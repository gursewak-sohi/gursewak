// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDU0ZcQIl6tiBlTCxdhpgNOzA9LyeZR-aM",
    authDomain: "gursewak-s-portfolio.firebaseapp.com",
    projectId: "gursewak-s-portfolio",
    storageBucket: "gursewak-s-portfolio.appspot.com",
    messagingSenderId: "177881507073",
    appId: "1:177881507073:web:a6b834ec6247da149da700",
    measurementId: "G-EM18BGXF8F"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var contactRef = firebase.database().ref('contact');

  $(function() {
    $('.charOnly').on('keypress', function (event) {
        var regex = new RegExp("^[A-Za-z -]+$");
        var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
        if (!regex.test(key)) {
           event.preventDefault();
           return false;
        }
    });

     // contact form  
     if ($("#contactForm").length > 0) {
  
        $(".valid-input").blur(function() {  
            var input = $(this).val().length;
            if (input > 0) {
                $(this).addClass('blurred');
            }
        });
        $(".valid-input").keyup(function() {    
            $(this).removeClass('blurred');
        });

        $(".valid-input").focus(function() {    
            $(this).removeClass('blurred');
        });

        $('#budget').on('change', function() {
            if ($(this).val() == '') {
                $(this).next().removeClass("opacity-0 invisible").addClass("opacity-1 visible");
            }
            else {
                $(this).next().removeClass("opacity-1 visible").addClass("opacity-0 invisible");
            }   
        });
    

        $("#contactFromSubmit").click(function (e) {
            e.preventDefault();
            var firstName = $("#firstName");
            var lastName = $("#lastName");
            var email = $("#email");
            var budget = $("#budget");
            var message = $("#message");
            var hasError = true;

            $(this).closest("#contactForm").find('.valid-input').each(function(i) {
                var opacity = $(this).next().css("opacity");
                if (opacity == 0 ) {
                    hasError = false;
                }
                else {
                    hasError = true; 
                    return false;
                } 
            });
            
            if (budget.val() == '') {
              
                $("#budget").next().removeClass("opacity-0 invisible").addClass("opacity-1 visible");
                hasError = true;
            }
            else {
                $("#budget").next().removeClass("opacity-1 visible").addClass("opacity-0 invisible");
                hasError = false;
            }
             

            if (hasError || firstName.val() == '' || lastName.val() == '' || budget.val() == '' || email.val() == '' || message.val() == '') {
                console.log("error");
                $(this).closest("#contactForm").find(".valid-input").addClass('blurred');
            }
            else {
                console.log(firstName.val(),lastName.val(),email.val(),budget.val(),message.val());
                saveMessage(firstName.val(), lastName.val(), email.val(),budget.val(),message.val());
                $(this).closest("#contactForm")[0].reset();
                $(this).closest("#contactForm").find(".valid-input").removeClass('blurred');
                $("#successForm").removeClass("opacity-0 invisible scale-0").addClass("opacity-1 visible scale-1");
                setTimeout(() => {
                    $("#successForm").removeClass("opacity-1 visible scale-1").addClass("opacity-0 invisible scale-0");   
                }, 5000);
            }
        });
        function saveMessage(firstName,lastName,email,budget,message ) {
            var newContactRef = contactRef.push(); 
            newContactRef.set({
                firstName: firstName,
                lastName: lastName,
                email: email,
                budget: budget,
                message: message
            });
        } 

    }
});