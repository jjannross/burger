// Make sure we wait to attach our handlers until the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }
  // create burger
  const createBurger = document.getElementById("create-form");

  if (createBurger) {
    createBurger.addEventListener("submit", );
  }
});

const postBurger = (e) => {
  e.preventDefault();
  
  if (!document.getElementById("burger_name").value) return;

  const newBurger = {
    burger_name: document.getElementById("burger_name").value.trim(),
    devoured: false
  };

  console.log(newBurger);

  fetch("/api/burgers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    body: JSON.stringify(newBurger),
  }).then((response) => {
    console.log(response);

    document.getElementById("burger_name").value = "";

    console.log("Created a new burger!");
    location.reload();
  });
}

document.getElementById("addMenu").addEventListener("click", postBurger);


// devoured burger
const devourBtn = document.querySelectorAll(".devour");

if (devourBtn) {
  devourBtn.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");

      const burgerDevoured = {
        devoured: true,
      };

      fetch(`/api/burgers/${id}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },

        body: JSON.stringify(burgerDevoured),
      }).then((response) => {
        if (response.ok) {
          console.log(`changed  to: ${id}`);
          location.reload("/");
        } else {
          alert("something went wrong!");
        }
      });
    });
  });
}

document.querySelectorAll(".delete-burger").addEventListener("click", deleteBurger);

const deleteBurger = (event) => {
console.log (event);


fetch("/api/burgers", {
  method: "DELETE",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },

  
}).then((response) => {
  console.log(response);

  

  console.log("Created a new burger!");
  location.reload();
});
};