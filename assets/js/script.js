// ==========================
// ToolPilot AI Database
// ==========================

const tools = [
    {
        name: "ChatGPT",
        category: "Writing",
        rating: "4.9 ⭐"
    },
    {
        name: "Claude",
        category: "Writing",
        rating: "4.8 ⭐"
    },
    {
        name: "Gemini",
        category: "Productivity",
        rating: "4.7 ⭐"
    },
    {
        name: "Perplexity",
        category: "Research",
        rating: "4.8 ⭐"
    },
    {
        name: "Cursor AI",
        category: "Coding",
        rating: "4.9 ⭐"
    }
];
// ==========================
// Search Feature
// ==========================

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const results = document.getElementById("searchResults");

function searchTools() {

    const keyword = searchInput.value.toLowerCase().trim();

    results.innerHTML = "";

    if (keyword === "") {
        return;
    }

    const matches = tools.filter(tool =>
        tool.name.toLowerCase().includes(keyword)
    );

    if (matches.length === 0) {
        results.innerHTML = "<p>No AI tools found.</p>";
        return;
    }

    matches.forEach(tool => {

        results.innerHTML += `
            <div class="tool-card">
                <h3>${tool.name}</h3>
                <p>${tool.category}</p>
                <span>${tool.rating}</span>
            </div>
        `;

    });

}

searchBtn.addEventListener("click", searchTools);

searchInput.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {
        searchTools();
    }

});