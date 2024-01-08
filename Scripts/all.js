function toggleDiv() {
    var div = document.querySelector('.animated-box');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
}

// Close the div when clicking outside of it
document.addEventListener('click', function(event) {
    var div = document.querySelector('.animated-box');
    var button = document.getElementById('toggleButton');

    if (event.target !== div && event.target !== button) {
        div.style.display = 'none';
    }
});

function buttondissapear() {
    var button = document.getElementById('toggleButton');
    button.style.display = 'none';
}

// Show the button when clicking outside of it
document.addEventListener('click', function(event) {
    var button = document.getElementById('toggleButton');

    if (event.target !== button) {
        button.style.display = 'block';
    }
});
