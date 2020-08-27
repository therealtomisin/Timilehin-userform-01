let login = () =>{
    form = document.forms["form-login"]
    console.log(form)
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        let username = form.querySelector('.username').value
        let password = form.querySelector('.password').value
        // console.log(username)
        // console.log(password)
        let newusername = 
        
        class user  {
            constructor(theusername, thepassword){
                this.username = theusername;
                this.password = thepassword;
            }
        }
        let user1 = new user(username, password)
       // let user2 = new user ("Balkindo", "12345")
        console.log(user1)
        console.log(user2)
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