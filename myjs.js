bucle1: // This is the label name
for (var i = 0; i < 5; i++)
{
console.log("bucle1: " + i);
bucle2:
for (var j = 0; j < 5; j++){
if (j > 3 ) break ; // Quit the innermost loop
if (i == 2) break bucle1; // Do the same thing
if (i == 4) break bucle2; // Quit the outer loop
console.log("bucle2: " + j);
}
}