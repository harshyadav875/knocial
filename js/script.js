// Header Scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled"); 
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// nav hide  
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})











function validateName() {

    var name = document.getElementById('cnt-name').value;
  
    if(name.length == 0) {
  
      producePrompt('Name is required', 'name-error' , 'red')
      return false;
  
    }
  
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
  
      producePrompt('First and last name, please.','name-error', 'red');
      return false;
  
    }
  
    producePrompt('Valid', 'name-error', 'green');
    return true;
  
  }
  
  function validatePhone() {
  
    var phone = document.getElementById('cnt-phone').value;
  
      if(phone.length == 0) {
        producePrompt('Phone number is required.', 'phone-error', 'red');
        return false;
      }
  
      if(phone.length != 10) {
        producePrompt('Include area code.', 'phone-error', 'red');
        return false;
      }
  
      if(!phone.match(/^[0-9]{10}$/)) {
        producePrompt('Only digits, please.' ,'phone-error', 'red');
        return false;
      }
  
      producePrompt('Valid', 'phone-error', 'green');
      return true;
  
  }
  
  function validateEmail () {
  
    var email = document.getElementById('cnt-email').value;
  
    if(email.length == 0) {
  
      producePrompt('Email Invalid','email-error', 'red');
      return false;
  
    }
  
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  
      producePrompt('Email Invalid', 'email-error', 'red');
      return false;
  
    }
  
    producePrompt('Valid', 'email-error', 'green');
    return true;
  
  }
  
  
  
  function validateForm() {

    if (!validateName() || !validatePhone() || !validateEmail() ) {
      jsShow('submit-error');
      producePrompt('Please fix errors to submit.', 'submit-error', 'red');
      setTimeout(function(){jsHide('submit-error');}, 2000);
    }
    else {
        window.location.href="thanks.html";
    }
    
  }
  
  function jsShow(id) {
    document.getElementById(id).style.display = 'block';
  }
  
  function jsHide(id) {
    document.getElementById(id).style.display = 'none';
  }
  
  
  
  
  function producePrompt(message, promptLocation, color) {
  
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color = color;
  
  
  }