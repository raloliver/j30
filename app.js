var theNumber = Number(prompt("Pick a number", ""));
if (!isNaN(theNumber)) {
    alert("Your number is " + theNumber);
}else {
    alert("Please, insert a number");
}