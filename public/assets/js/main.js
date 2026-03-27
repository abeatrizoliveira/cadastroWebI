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

function renderUsers(users) {
  if (users.length == 0) {
    renderEmptyTable("Nenhum usuário encontrado.");
  } else {
    usersTableBody.innerHTML = "";
    let rowsTemp = "";
    for (let i = 0; i < users.length; i++) {
      console.log(users[i]);
      rowsTemp += `
                <tr>
                    <td>${users[i].name}</td>
                    <td>${users[i].email}</td>
                    <td class= "user-table-actions-cell">
            <button class= "delete-user-button" onclick="deleteUser(${users[i].id_user})">
             <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M9 3h6l1 2h4v2H4V5h4l1-2zm1 6h2v8h-2V9zm4 0h2v8h-2V9zM7 9h2v8H7V9zm1 12a2 2 0 0 1-2-2V8h12v11a2 2 0 0 1-2 2H8z"
            fill="currentColor">
            </path>
                </svg>
                </button>
          </td>
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
    renderUsers(users);
  } else {
    renderEmptyTable("Problemas ao obter os usuários.");
  }
}

loadUsers();
