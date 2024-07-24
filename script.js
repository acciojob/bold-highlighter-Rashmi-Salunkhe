function highlight() {
    // Get all <strong> elements in the document
    var boldWords = document.querySelectorAll('strong');

    // Loop through each <strong> element and change its color to green
    boldWords.forEach(function(bold) {
        bold.style.color = 'green';
    });
}

function return_normal() {
    // Get all <strong> elements in the document
    var boldWords = document.querySelectorAll('strong');

    // Loop through each <strong> element and revert its color to black
    boldWords.forEach(function(bold) {
        bold.style.color = 'black';
    });
}
