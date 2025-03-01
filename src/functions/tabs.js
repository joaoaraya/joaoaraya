let clickCount = 0;

function openTab(event, tabName) {
    const tabContent = document.querySelectorAll(".tabContent");
    const tabLinks = document.querySelectorAll(".tabButton");

    // hiddem all tabs
    tabContent.forEach(content => content.style.display = "none");

    // Clear "active" class for all buttons
    tabLinks.forEach(link => link.classList.remove("active"));

    // Show selected tab content
    document.getElementById(tabName).style.display = "block";

    // Add "active" class to button
    event.currentTarget.classList.add("active");

    clickCount++;
}

document.getElementById("defaultOpen")?.click();
