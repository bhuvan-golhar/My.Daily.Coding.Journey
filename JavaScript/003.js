<!-- HTML file: String concatenation -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>String concatenation</title>
    <link rel="stylesheet" href="003.css">
</head>
<body>
    <h2 id="message"></h2>

    <script src="003.js"></script>
</body>
</html>


/* CSS file: String concatenation */

body{
    background-color: magenta;
    color: maroon;
}


// JS file: String concatenation

let country = prompt("Enter any country: ");
let capital = prompt("Enter its capital city: ");
document.getElementById("message").innerText = capital + " is the capital of " + country + ".";
