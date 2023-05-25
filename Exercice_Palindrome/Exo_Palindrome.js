//Vérifier si un entier  est un palindrome 
function palindrome(str){
    let strMin = str.toLowerCase();
    console.log(strMin);
    if(strMin.split('').reverse().join('')=== str.toLowerCase()){ //split permet de transfomer une chaine de caractère en tableau
             console.log(`${str} true`)
    }
  else{ console.log(`${str} false`)}

}
palindrome("121");
palindrome("142");

