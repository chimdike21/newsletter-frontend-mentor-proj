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

    window.dismissSignupSuccess= function(){
        if(signupSuccess){
            signupSuccess.style.display='none'
        }

        const signUp= document.getElementById('signUp')
        if(signUp){
            signUp.style.display='block'
        }
    }
    document.getElementById('email').addEventListener('input', function(){
        var emailInput= this.value
        var emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (emailRegex.test(emailInput)){
            document.getElementById('error-alert').style.display='none'
        }else{
            document.getElementById('error-alert').style.display='block'
            document.getElementById('email').style.backgroundColor='hsl(0, 100%,96%)'
            document.getElementById('email').style.color='hsl(4, 100%, 67%)'
            document.getElementById('email').style.border='1px solid hsl(4, 100%, 67%'
        }
    })
})