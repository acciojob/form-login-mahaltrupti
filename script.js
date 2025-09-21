function getFormvalue() {
    //Write your code here
 const container = document.getElementById("container")
            const form = document.querySelector('.ele-container')
            const heading = document.getElementById("message")
           
            if(localStorage.getItem("email")){
                container.classList.add("hide")
                heading.classList.remove("hide")
                heading.innerText = `Hello ${localStorage.getItem("name")}`
            }

            form.addEventListener("submit",onSubmit)

            function onSubmit(e){
                e.preventDefault()
                console.log(e,'event from from')

                const name = document.getElementById("userName").value
                const email = document.getElementById("userEmail").value
                const password = document.getElementById("userPassword").value
                // Store name of user
                localStorage.setItem("name",name)
                // Store email of user
                localStorage.setItem("email",email)
                // Store password of user
                localStorage.setItem("password",password)

            }
}
