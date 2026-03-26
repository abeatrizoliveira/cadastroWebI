const userName = document.getElementById("user-name");
const userEmail = document.getElementById("user-email");
const usersTableBody = document.getElementById("user-table-body");

function renderEmptyTable(message) {
  usersTableBody.innerHTML = `
        <tr>
            <td colspan="3">${message}</td>
        </tr>
    `;
}

function renderUsers(users){
    if(users.length == 0){
        renderEmptyTable("Nenhum usuário encontrado.");
    } else{
        usersTableBody.innerHTML = "";
        let rowsTemp = "";  
        for(let i = 0; i <  users.length; i++){
            console.log(users[i]);
            rowsTemp += `
                <tr>
                    <td>${users[i].name}</td>
                    <td>${users[i].email}</td>
                    <td>ok</td>
                </tr>
            `;
        }
        usersTableBody.innerHTML = rowsTemp;
    }

}

async function loadUsers() {
  const response = await fetch("/users");
  if (response.ok) {
    const users = await response.json();
    renderUsers(users)
  } else {
    renderEmptyTable("Problemas ao obter os usuários.");
  }
}

loadUsers();
