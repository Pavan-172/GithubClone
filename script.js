
(function () {
    const buttonId = document.getElementById("button")
    buttonId.addEventListener("click", function () {
        const searchValue = document.getElementById("search").value
        if (searchValue) {
         userSearch(searchValue)
        } else {
            console.log("Invalid user");
        }
    });
   
   async function userSearch(name) {
       let url = ` https://api.github.com/users/${name}`;
       fetch(url)
           .then(response => {
               console.log(response)
               if (!response.ok) {
                   throw Error("ERROR")
               }
               return response.json();
           })
           .then(data => {
               document.getElementById("result").innerHTML =
                   `<ol>
                   <li><h6>User Profile Picture</h6></li>
                   <img src="${data.avatar_url}" width="100" heigth="100"/>
           <li><h6>No.of Repositories:</h6> ${data.public_repos}</li>
              <li> <h6>followers</h6></li>
               <h6>${data.followers}</h6>
              <li> <h6>following</h6></li>
               <h6>${data.following}</h6>
              <li><h6>repositary url</h6></li>
               <h6>${data.repos_url}</h6></ol>
               `;
           })
    }   

})    
(function () {
    const buttonId = document.getElementById("button")
    buttonId.addEventListener("click", function () {
        const searchValue = document.getElementById("search").value
        if (searchValue) {
         userSearch(searchValue)
        } else {
            console.log("Invalid user");
        }
    });
     async function userSearch(name) {
        let userName = name;
        let url = `https://api.github.com/users/${userName}/repos`;
        fetch(url)
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw Error("ERROR")
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                const ui = data.map(repo => {
                    return `
                   <ol><li type="circle"><h6>${repo.name}</h6></li></ol>`  
                }).join("")
                 document.getElementById("result1").insertAdjacentHTML("afterend", ui);
            })
        }
}())   