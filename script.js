// Load topics dynamically from JSON file
document.addEventListener("DOMContentLoaded", function () {
    fetch("content.json")  // Ensure content.json is in the same folder
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to load JSON: " + response.status);
            }
            return response.json();
        })
        .then(data => {
            let topicsContainer = document.getElementById("topics-container");
            topicsContainer.innerHTML = "";  // Reset content

            data.topics.forEach(topic => {
                topicsContainer.innerHTML += `
                    <h3>${topic.title}</h3>
                    <p>${topic.description}</p>
                `;
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});

// Fun Fact button functionality
function showFact() {
    const facts = [
        "Did you know? The first website was published in 1991!",
        "Water can boil and freeze at the same time under certain conditions.",
        "Bananas are berries, but strawberries are not!",
        "Octopuses have three hearts and blue blood!"
    ];
    document.getElementById("fact").innerText = facts[Math.floor(Math.random() * facts.length)];
}