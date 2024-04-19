document.addEventListener("DOMContentLoaded", function(){
    const newsletterForm= document.getElementById("signUp")
    const signupSuccess= document.getElementById("success")


    newsletterForm.addEventListener("submit", function(event){
        event.preventDefault()


        if (signupSuccess) {
            signupSuccess.style.display="block"
        }

        if(newsletterForm){
            newsletterForm.style.display="none"
        }
    } )
})