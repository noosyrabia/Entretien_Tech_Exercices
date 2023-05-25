//Vérifier si un mot est un palindrome ou pas 
function palindrome(str){
    let strMin = str.toLowerCase();
    console.log(strMin);
    if(strMin.split('').reverse().join('')=== str.toLowerCase()){ //split permet de transfomer une chaine de caractère en tableau
            console.log(`${str} est un palindrome`)
    }
  else{console.log(`${str} n'est pas un palindrome`)}

}
// Tester avec des caratères speciaux (regex)

palindrome("kayak");
palindrome("121");
palindrome("kayak kayak");
palindrome("142");
palindrome("kayaK");
palindrome("KayAk");
palindrome("LeVel");
palindrome("ete");
palindrome("121");
palindrome("Ressasser");
palindrome("salut")
