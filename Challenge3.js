let name = 'PrajakTA'
let upper=name.split('').filter(n => n===n.toUpperCase()).length;
console.log("Uppercase letters:"+upper);
let lower= name.length-upper;
console.log("Lowercase letters:"+lower);
console.log((upper>lower)?name.toUpperCase():name.toLowerCase());