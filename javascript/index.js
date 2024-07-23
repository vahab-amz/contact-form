let form = document.getElementById('myFrom')
let fName = document.getElementById('fName')
let lName = document.getElementById('lName')
let email = document.getElementById('email')
let general_enquiry = document.getElementById('general_enquiry')
let support_request = document.getElementById('support_request')
let msg = document.getElementById('message')
let check = document.getElementById('check')
let submit = document.getElementById('submit')

let errores_withOutRadioButtons = document.querySelectorAll('.errores')
let error_radioButtons = document.querySelector('.error_radioButton')

let popupAlert = document.getElementById('popup')

submit.addEventListener('click', function(){

    let value_fname = fName.value
    let value_lname = lName.value
    let value_email = email.value
    let value_generalEnquiry = general_enquiry.checked
    let value_supportRequest = support_request.checked
    let value_msg = msg.value
    let value_check = check.checked
    
    let inputs = [fName, lName, email, msg]
    let validate = [value_fname, value_lname, value_email, value_msg, value_check]

    let checkCorrectEmail = value_email.match(".+@.+")

    for(i = 0; i < validate.length ; i++){
        if(validate[i]){
            errores_withOutRadioButtons[i].style.display = 'none'
            if(i != 4){
                inputs[i].style.borderColor = 'gray'
            }
        }
        if(i == 2 && checkCorrectEmail){
            errores_withOutRadioButtons[i].style.display = 'none'
        }
    }
    if(value_generalEnquiry || value_supportRequest){
        error_radioButtons.style.display = 'none'
    }





    if( (value_generalEnquiry || value_supportRequest) && value_fname && value_lname && value_email && checkCorrectEmail && value_msg && value_check){
        form.addEventListener('submit', function(event){
            event.preventDefault()
        })
        popupAlert.classList.toggle('transitionPopupAlert')  
        setTimeout(timeHandler, 5000)
        function timeHandler(){
            popupAlert.classList.remove('transitionPopupAlert')
            location.reload()
        }
    } else{
        form.addEventListener('submit', function(event){
            event.preventDefault()
            
        })
        for(i = 0; i < validate.length ; i++){
            if(!(validate[i])){
                errores_withOutRadioButtons[i].style.display = 'inline-block'
                if(i != 4){
                    inputs[i].style.borderColor = 'hsl(0, 66%, 54%)'
                }
            }
            if(i == 2 && !checkCorrectEmail){
                errores_withOutRadioButtons[i].style.display = 'inline-block'
            }
        }
        if(!(value_generalEnquiry || value_supportRequest)){
            error_radioButtons.style.display = 'inline-block'
        }
    }
})





// submit.addEventListener('click' , function(){
//     if(test){
//         alert("done")
//     } else{
//         form.addEventListener('submit', function(event){
//             event.preventDefault()
//             alert('fail')
//         })
//     }
    
// })