document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Technomarx: Where technology meets Marxist thought.");
});

// Filter posts based on search input
function filterPosts() {
    const searchValue = document.getElementById("searchBar").value.toLowerCase();
    const posts = document.querySelectorAll(".post");

    posts.forEach(post => {
        const title = post.querySelector("h3").textContent.toLowerCase();
        const content = post.querySelector("p").textContent.toLowerCase();

        if (title.includes(searchValue) || content.includes(searchValue)) {
            post.style.display = "block";
        } else {
            post.style.display = "none";
        }
    });
}
