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
        "Wearing a tie can reduce blood flow to the brain by 7.5 per cent.",
        "Did you know? The first website was published in 1991!",
        "The fear of long words is called Hippopotomonstrosesquippedaliophobia.",
        "Water can boil and freeze at the same time under certain conditions.",
        "Bananas are berries, but strawberries are not!",
        "Octopuses have three hearts and blue blood!",
        "Giraffes are 30 times more likely to get hit by lightning than people.",
        "The largest piece of fossilised dinosaur poo discovered is over 30cm long and over two litres in volume.",
        "The Universe's average colour is called 'Cosmic latte",
        "Animals can experience time differently from humans.",
        "Water might not be wet.",
        "All the world’s bacteria stacked on top of each other would stretch for 10 billion light-years.",
        "Octopuses don’t actually have tentacles."
    ];
    document.getElementById("fact").innerText = facts[Math.floor(Math.random() * facts.length)];
}