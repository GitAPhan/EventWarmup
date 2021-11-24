// function to change background color
function change_bg_color() {
    // random color generator
    var bg_colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "grey", "black"];
    var bg_color_selection = bg_colors[Math.floor(Math.random() * bg_colors.length)];

    // set bg to color
    document.body.style.backgroundColor = bg_color_selection;
}

// delay background change by 3000ms
function delay_bg_change() {
    setTimeout(change_bg_color, 3000);
    setInterval(change_bg_color, 3000);
}

// Party Time button
var new_button = document.createElement('button');
new_button.innerText = "Party Time!";
document.body.appendChild(new_button);

// click button, change bg
new_button.addEventListener('click', delay_bg_change);

