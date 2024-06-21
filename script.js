document.getElementById("fetch-users").addEventListener("click", fetchUsers);

async function fetchUsers() {
  const userUrl = "https://reqres.in/api/users";
  try {
    const response = await fetch(userUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    displayUsers(data.data);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

function displayUsers(users) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";

  users.forEach((user) => {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    userCard.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
            <h3>${user.first_name} ${user.last_name}</h3>
            <p>${user.email}</p>
        `;

    userList.appendChild(userCard);
  });
}
