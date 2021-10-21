let tabTop = document.querySelector('.tab-title');

function openTab(evt, tabName, named) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // Nome da tab
    tabTop.innerHTML = `<p>${named}</p>`;

    // Scroll to top
    tabTop.scrollIntoView({
        top: 0,
        behavior: "smooth"
    });
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
