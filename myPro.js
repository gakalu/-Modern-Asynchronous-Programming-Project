
function pageOnload() {
  const search = document.getElementById("search-user");

  const { from } = rxjs;
  const { filter } = rxjs.operators;
  search.onclick = displayUser;
  function displayUser() {
    fetchUser();
    const userId = Number(document.getElementById("user-id").value);
    async function fetchUser() {
      let userList = document.getElementById("users");
      userList.innerHTML = "";
      let result = await fetch("http://jsonplaceholder.typicode.com/users");
      let userFetch = await result.json();
      console.log(userFetch);
      const user = from(userFetch);
      user
        .pipe(filter((element) => element.id === userId))
        .subscribe((data) => {
          let id = data.id;
          let template = `     
            <div class="col">
                <h3> user information:</h3>
                <p>id: ${id}</p>
                <p>name: ${data.name}</p>
                <p>Email:${data.email} </p>
                <p style="color: red;font-size: larger;">Address</p>
                <p>Street:${data.address.street} </p>
                <p>City:${data.address.city} </p>
                <p>City:${data.address.city} </p>
                <p>Zip:${data.address.zipcode} </p>
                <button id="idBut" value="${id} " style="background-color: aqua;">Get posts</button>
            </div>     
        `;
          const div = document.createElement("div");
          div.classList = "row border-top";
          div.innerHTML = template;
          userList.append(div);
          let getPost = document.getElementById("idBut");
          getPost.onclick = function () {
            alert("I need help to post comments and find Geo location");
          };
        });
    }
    
  }
}

window.onload = pageOnload;