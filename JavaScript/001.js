<!-- HTML file: Variable reassignment -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variable reassignment</title>
    <link rel="stylesheet" href="001.css">
</head>
<body>
    <p id="message"></p>

    <script src="001.js"></script>
</body>
</html>


/* CSS file: Variable reassignment */

body{
    background-color: white;
    color: black;
}


// JS file: Variable reassignment

let message = "Hey! What's up?";
document.getElementById("message").innerHTML = message;