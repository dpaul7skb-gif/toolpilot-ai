// ==========================
// ToolPilot AI Database
// ==========================

const tools = [
    {
        name: "ChatGPT",
        category: "Writing",
        rating: "4.9 ⭐",
        description: "AI assistant for writing, coding and research."
    },
    {
        name: "Claude",
        category: "Writing",
        rating: "4.8 ⭐",
        description: "Advanced AI for long-form writing."
    },
    {
        name: "Gemini",
        category: "Productivity",
        rating: "4.7 ⭐",
        description: "Google AI assistant."
    },
    {
        name: "Perplexity",
        category: "Research",
        rating: "4.8 ⭐",
        description: "AI-powered answer engine."
    },
    {
        name: "Cursor AI",
        category: "Coding",
        rating: "4.9 ⭐",
        description: "AI code editor for developers."
    }
];

// ======================
// Featured Tool Cards
// ======================

const toolGrid = document.getElementById("toolGrid");

function displayTools(category = "All") {

    toolGrid.innerHTML = "";

    const filteredTools = category === "All"
        ? tools
        : tools.filter(tool => tool.category === category);

    filteredTools.forEach(tool => {

        toolGrid.innerHTML += `

        <div class="tool-card">

            <h3>${tool.name}</h3>

            <p>${tool.description}</p>

            <span>${tool.rating}</span>

            <button>Visit Tool</button>

        </div>

        `;

    });

}

displayTools();

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
searchInput.addEventListener("input", searchTools);
const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        document.querySelector(".filter-btn.active")
            .classList.remove("active");

        button.classList.add("active");

        displayTools(button.dataset.category);

    });

});