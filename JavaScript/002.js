<!-- HTML file: User input -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User input</title>
    <link rel="stylesheet" href="002.css">
</head>
<body>
    <h1 id="output"></h1>

    <script src="002.js"></script>
</body>
</html>


/* CSS file: User input */

body{
    background-color: grey;
    color: silver;
}


// JS file: User input

let name = prompt("What is your name?");
document.getElementById("output").innerHTML = name;
