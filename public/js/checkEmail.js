(function(){
    window.addEventListener("load", function(){
        var isEligible = ""
        const eligibility_toggle = document.getElementById("toggle-698");
        eligibility_toggle.addEventListener('click', (e) => {
            console.log(eligibility_toggle.checked)
            eligibility_toggle.checked ? isEligible = true : isEligible = false
        } )
        const btn = document.getElementById("checkEmail");
        btn.addEventListener('click', (e) => {   
            const emailValue = document.getElementById('emailValue').value
            if (emailValue === "") {
                document.getElementById("fillYourEmail")
                .classList.remove("js-eligibility-hidden")
                return;
            }
            if (isEligible) {
                document
                    .getElementById("eligibility-wrapper").
                    classList.remove("js-eligibility-hidden")
                document
                    .getElementById("eligible")
                    .classList.remove("js-eligibility-hidden")
                document
                    .getElementById("eligibility_check")
                    .classList.add("js-eligibility-hidden")
                document
                    .getElementById("notEligible")
                    .classList.add("js-eligibility-hidden")
            } 
            else {
                document
                    .getElementById("eligibility-wrapper").
                    classList.remove("js-eligibility-hidden")
                document
                    .getElementById("notEligible")
                    .classList.remove("js-eligibility-hidden")
                document
                    .getElementById("eligibility_check")
                    .classList.add("js-eligibility-hidden")
            }
        }) 
        
    })
}())
