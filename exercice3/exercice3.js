/* Modifier le code ci dessous pour réaliser l'exercice */
let x;
let y;

if(x >= y)
{
    document.getElementById('monDiv').innerHTML = "La variable x est égal à la variable y";
}

else {
    document.getElementById('monDiv').innerHTML = "La variable x n'est pas égale à la variable y";
}
console.log(x)

x += 3;

if (x > y)
{
    document.getElementById('monDiv2').innerHTML = "La variable x est supérieure à la variable y";
}

else {
    document.getElementById('monDiv2').innerHTML = "La variable x est inférieur à la variable y";
}
