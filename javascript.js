let inputs = document.querySelectorAll("input")

let regexValues = {
    email: /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/ig,
    username: /^[a-z0-9]{5,20}$/gi,
    password: /^[a-z0-9]{6,12}$/gi
}

    validateRegex=(field, value)=>{
        if (field.value = value){
            class user  {
                constructor(theEmail, theusername, thepassword){
                    this.email = theEmail;
                    this.username = theusername;
                    this.password = thepassword;
                    }
                 }
                 let user1 = new user(email, username, password)
                 console.log(user1)
        }
        else{
            return console.error('invalid username or password');
        }
    }

    //     if (emailRegex.test(email) && usernameRegex.test(username)){
    //         if (username.length < 20 && passwordRegex.test(password)){
    //             
    //         }
    //     }
    //             else {
    //                 
                    
    //     }
    //     form.querySelector('.email').value = ''
    //     form.querySelector('.username').value = ''
    //     form.querySelector('.password').value = ''
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
