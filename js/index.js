const form =document.getElementById("github-form")
const userList = document.getElementById("user-list")
const reposlist= document.getElementById("repos-list")

// display users
const getUsers = function(e){
    e.preventDefault()
    const user = document.getElementById("search").value
    fetch(`https://api.github.com/search/users?q=${user}`,
    {Accept: "application/vnd.github.v3+json"})
    .then(res => res.json()).then(data =>{
        console.log(data.items);
        data.items.map(user=>{
            const markup = `<li><p>Username: ${user.login}</p> 
            <img src="${user.avatar_url}" alt="${user.login}">
            <p><a href="${user.html_url}">Go to Profile</a></p>
            </li>`
            userList.insertAdjacentHTML("afterbegin", markup)

            // display user repos on click of user container
            const userLi = userList.querySelector("li")
            userLi.addEventListener("click", ()=> displayRepos(user.login))

        })
       
        
    }).catch(err =>{
        alert(err.message)
    })

}