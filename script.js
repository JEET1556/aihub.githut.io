const languageData = {
  en: {
    subtitle: "All AI tools in one place!",
    placeholder: "Search AI tools...",
    footer: "❤️ Finding AI tools is now easier.",
    categories: {
      All: "All",
      Chatbot: "Chatbot",
      Image: "Image",
      Video: "Video",
      Avatar: "Avatar",
      Design: "Design",
      Writing: "Writing",
      Productivity: "Productivity"
    },
    tools: [
      {
        name: "ChatGPT",
        description: "Text-based AI chatbot",
        category: "Chatbot",
        url: "https://chat.openai.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
      },
      {
        name: "Midjourney",
        description: "Create images from prompts",
        category: "Image",
        url: "https://www.midjourney.com",
        logo: "https://seeklogo.com/images/M/midjourney-logo-93D5C3D36A-seeklogo.com.png"
      },
      {
        name: "Runway ML",
        description: "Video and image editing",
        category: "Video",
        url: "https://runwayml.com",
        logo: "https://assets-global.website-files.com/634fafb335d3bbf29cdb5d92/63e2e37e93c008e17f02a480_favicon-32x32.png"
      },
      {
        name: "D-ID",
        description: "Create talking avatars from text",
        category: "Avatar",
        url: "https://www.d-id.com",
        logo: "https://www.d-id.com/wp-content/uploads/2023/01/d-id_favicon-01-150x150.png"
      },
      {
        name: "Leonardo AI",
        description: "Design game assets using AI",
        category: "Design",
        url: "https://leonardo.ai",
        logo: "https://cdn.leonardo.ai/favicon.ico"
      },
      {
        name: "Copy.ai",
        description: "AI writing for marketing",
        category: "Writing",
        url: "https://www.copy.ai",
        logo: "https://assets.copy.ai/wp-content/uploads/2022/06/favicon.png"
      },
      {
        name: "Tome",
        description: "AI-powered presentations",
        category: "Productivity",
        url: "https://tome.app",
        logo: "https://tome.app/favicon.ico"
      },
      {
        name: "Pictory",
        description: "Convert text to video",
        category: "Video",
        url: "https://pictory.ai",
        logo: "https://pictory.ai/wp-content/uploads/2022/09/cropped-Pictory-favicon-192x192.png"
      }
    ]
  },
  gu: {
    subtitle: "તમામ AI ટૂલ્સ એક જ જગ્યા પર!",
    placeholder: "AI ટૂલ શોધો...",
    footer: "jeet patel AI ટૂલ શોધવી હવે સરળ બનશે.",
    categories: {
      All: "બધા",
      Chatbot: "ચેટબોટ",
      Image: "છબીઓ",
      Video: "વિડિઓ",
      Avatar: "અવતાર",
      Design: "ડિઝાઇન",
      Writing: "લખાણ",
      Productivity: "ઉત્પાદકતા"
    },
    tools: [
      {
        name: "ChatGPT",
        description: "ટેક્સ્ટ ચેટ માટેનો ચેટબોટ",
        category: "Chatbot",
        url: "https://chat.openai.com",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
      },
      {
        name: "Midjourney",
        description: "પ્રોમ્પ્ટ પરથી તસવીરો બનાવે છે",
        category: "Image",
        url: "https://www.midjourney.com",
        logo: "https://seeklogo.com/images/M/midjourney-logo-93D5C3D36A-seeklogo.com.png"
      },
      {
        name: "Runway ML",
        description: "વિડિયો અને ફોટા એડિટિંગ",
        category: "Video",
        url: "https://runwayml.com",
        logo: "https://assets-global.website-files.com/634fafb335d3bbf29cdb5d92/63e2e37e93c008e17f02a480_favicon-32x32.png"
      },
      {
        name: "D-ID",
        description: "ટેક્સ્ટથી બોલતી અવતાર બનાવો",
        category: "Avatar",
        url: "https://www.d-id.com",
        logo: "https://www.d-id.com/wp-content/uploads/2023/01/d-id_favicon-01-150x150.png"
      },
      {
        name: "Leonardo AI",
        description: "ગેમ ડિઝાઇન માટે",
        category: "Design",
        url: "https://leonardo.ai",
        logo: "https://cdn.leonardo.ai/favicon.ico"
      },
      {
        name: "Copy.ai",
        description: "માર્કેટિંગ માટે લખાણ બનાવે છે",
        category: "Writing",
        url: "https://www.copy.ai",
        logo: "https://assets.copy.ai/wp-content/uploads/2022/06/favicon.png"
      },
      {
        name: "Tome",
        description: "AI પ્રેઝન્ટેશન ટૂલ",
        category: "Productivity",
        url: "https://tome.app",
        logo: "https://tome.app/favicon.ico"
      },
      {
        name: "Pictory",
        description: "ટેક્સ્ટથી વિડિયો બનાવે છે",
        category: "Video",
        url: "https://pictory.ai",
        logo: "https://pictory.ai/wp-content/uploads/2022/09/cropped-Pictory-favicon-192x192.png"
      }
    ]
  }
};

let currentLang = localStorage.getItem("language") || "gu";
const container = document.getElementById("tool-container");
const searchInput = document.getElementById("search");
const categoryDiv = document.getElementById("category-buttons");
const languageSelect = document.getElementById("language-select");
const subtitle = document.getElementById("subtitle");

function displayCategoryButtons() {
  categoryDiv.innerHTML = "";
  const catList = ["All", ...new Set(languageData[currentLang].tools.map(t => t.category))];

  catList.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = languageData[currentLang].categories[cat];
    btn.className = "category-btn";
    if (cat === "All") btn.classList.add("active");
    btn.addEventListener("click", () => {
      document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      filterTools(cat, searchInput.value);
    });
    categoryDiv.appendChild(btn);
  });
}

function displayTools(toolList) {
  container.innerHTML = "";
  toolList.forEach(tool => {
    const card = document.createElement("a");
    card.href = tool.url;
    card.target = "_blank";
    card.className = "tool-card";
    card.innerHTML = `
      <img class="tool-logo" src="${tool.logo}" alt="${tool.name} logo" />
      <div class="tool-category">${languageData[currentLang].categories[tool.category]}</div>
      <h2>${tool.name}</h2>
      <p>${tool.description}</p>
    `;
    container.appendChild(card);
  });
}

function filterTools(category, query) {
  let filtered = languageData[currentLang].tools;

  if (category !== "All") {
    filtered = filtered.filter(tool => tool.category === category);
  }

  if (query) {
    filtered = filtered.filter(tool =>
      tool.name.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  displayTools(filtered);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("language", lang);
  subtitle.textContent = languageData[lang].subtitle;
  searchInput.placeholder = languageData[lang].placeholder;
  document.querySelector("footer p").textContent = languageData[lang].footer;
  displayCategoryButtons();
  filterTools("All", searchInput.value);
}

// Language selector event
languageSelect.value = currentLang;
languageSelect.addEventListener("change", () => {
  setLanguage(languageSelect.value);
});

// Search filtering
searchInput.addEventListener("input", () => {
  const activeCategoryBtn = document.querySelector(".category-btn.active");
  const activeCategory = activeCategoryBtn ? activeCategoryBtn.textContent : "All";

  const categoryKey = Object.keys(languageData[currentLang].categories).find(
    key => languageData[currentLang].categories[key] === activeCategory
  ) || "All";

  filterTools(categoryKey, searchInput.value);
});

setLanguage(currentLang);

// 🌈 Set daily background gradient
const dailyBackgrounds = [
  ["#2b5876", "#4e4376"],  // Monday
  ["#0f2027", "#2c5364"],  // Tuesday
  ["#3a6073", "#16222a"],  // Wednesday
  ["#2193b0", "#6dd5ed"],  // Thursday
  ["#cc2b5e", "#753a88"],  // Friday
  ["#1e3c72", "#2a5298"],  // Saturday
  ["#42275a", "#734b6d"]   // Sunday
];

function setDailyBackground() {
  const day = new Date().getDay(); // 0 = Sunday
  const [start, end] = dailyBackgrounds[day];
}

setDailyBackground();