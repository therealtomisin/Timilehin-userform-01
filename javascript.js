let login = () =>{
    form = document.forms["form-login"]
    console.log(form)
    let button = form.querySelector('.button');
    button.addEventListener("click", (e)=>{
        e.preventDefault()
        let email =  form.querySelector('.email').value
        let username = form.querySelector('.username').value
        let password = form.querySelector('.password').value

        let emailRegex = /^([a-z\d\.-]+)@([a-z]+)\.([a-z]{2,5})(\.[a-z]{2,5})?$/ig;
        let usernameRegex = /^[a-z0-9]{5,20}$/gi
        let passwordRegex = /^[a-z0-9]{6,12}$/gi

        console.log(emailRegex.test(email))
        console.log(usernameRegex.test(username))
        console.log(passwordRegex.test(password))

        if (emailRegex.test(email) ){
            if (passwordRegex.test(password) ){
                class user  {
                    constructor(theEmail, theusername, thepassword){
                        this.email = theEmail;
                        this.username = theusername;
                        this.password = thepassword;
                    }
                }
                let user1 = new user(email, username, password)
                console.log(user1)
                form.querySelector('.email').value = ''
                form.querySelector('.username').value = ''
                form.querySelector('.password').value = ''
            }
        }
                else {
                    return console.error('invalid username or password');
                    
        }
       
    })
}
login()






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