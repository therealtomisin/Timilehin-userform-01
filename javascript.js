const inputs = document.querySelectorAll('input')
    const regexValues = {
    email: /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/i,       
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/i
}

validate = (field, regex) => {
    if(regex.test(field.value)){
        field.className = 'valid'
        console.log(regex.test(field.value))
    } else{
        field.className = 'invalid'
    }
}
const submit = document.querySelector('.button')
inputs.forEach((input)=>{
    input.addEventListener('keyup', (e)=>{
       // console.log(e.target.attributes.name.value)
       validate(e.target, regexValues[e.target.attributes.name.value])
    })
})
submit.addEventListener('click', (e)=>{
    let userSection = document.querySelector('.user')
    let theDiv = document.createElement('div');
    let theList =  document.createElement('ul');

    userSection.appendChild(theDiv)
    theDiv.appendChild(theList)
   
            inputs.forEach((input)=>{
                if (input.className = 'valid'){
                    let listElement = document.createElement('li');
                    theList.appendChild(listElement)
                    listElement.textContent = input.value;

                    // form.querySelector('.userbox .email').value = ''
                    // form.querySelector('.userbox .username').value = ''
                    // form.querySelector('.userbox .password').value = ''
                }
            })
        })





/* let inputs = document.querySelectorAll("#input")

let regexValues = {
    email: /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/ig,
    username: /^[a-z0-9]{5,20}$/ig,
    password: /^[a-z0-9]{6,12}$/gi
}

    function validateRegex(field, regex){
        if (regex.test(field.value)){
            
            field.className = 'valid' 
        }
        else{
            field.className = 'invalid'
        }
    }

    inputs.forEach((input)=>{
        input.addEventListener('keyup', (e)=>{
            //console.log(e.target.className)
           validateRegex(e.target, regexValues[e.target.attributes.name.value])
        })
    }) */

    //     if (emailRegex.test(email) && usernameRegex.test(username)){
    //         if (username.length < 20 && passwordRegex.test(password)){
    //             
    //         }
    //     }
    //             else {
    //                 return console.error('invalid username or password');
                    
    //     }
    //     
    // })







//console.log("timi")
// let formFunction =()=>{
//     let form = document.forms['form-login']
//     console.log(form)
//     let user = {}
//     form.addEventListener("submit", ()=>{

//     })
// }  
/* let timi = {
    name: "Timi"

} */

// let button = form.querySelector('.button');
// button.addEventListener("click", (e)=>{
//     e.preventDefault()
//     let email =  form.querySelector('.email').value
//     let username = form.querySelector('.username').value
//     let password = form.querySelector('.password').value


// 
