let count = 0;

let buttons = document.querySelectorAll(".product button");
let cart = document.getElementById("cart");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        count++;
        cart.innerHTML = "🛒 Cart (" + count + ")";
        alert("Product Added to Cart!");
    });
});
function searchProduct() {
    let search = document.getElementById("searchInput").value.toLowerCase();

    if (search === "shoes") {
        document.getElementById("shoes").scrollIntoView({ behavior: "smooth" });
    } else if (search === "watch") {
        document.getElementById("watch").scrollIntoView({ behavior: "smooth" });
    } else if (search === "tshirt") {
        document.getElementById("tshirt").scrollIntoView({ behavior: "smooth" });
    } else {
        alert("Product not found!");
    }
}
function signup() {
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account Created Successfully!");
    window.location.href = "login.html";
}
function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedUsername = localStorage.getItem("username");
    let savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
        alert("Login Successful!");
        window.location.href = "index.html";
    } else {
        alert("Invalid Username or Password!");
    }
}