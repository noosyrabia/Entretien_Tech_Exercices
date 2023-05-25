//remove duplicate elements 
const tableau = [8, 5, 8, 1, 3, 9, 1, 5, 3, 3, 6, 2, 10, 6, 111, 11, 5]; 

// function trie(){
//     for(let i= [] ; i >= 300; i++){
//     }
const ensembleDeChiffreUniques = new Set(tableau);
console.log(ensembleDeChiffreUniques)
const chiffresEnListes = Array.from(ensembleDeChiffreUniques);
console.log(chiffresEnListes)
const sortedChiffresTableau = chiffresEnListes.sort( (a ,b) => {
        return a - b ; 
    });
console.log(sortedChiffresTableau);



 //Chaine de caractère
 const StringTableau = ["chocolat", "pomme", "chocolat", "fraise", "ananas","pomme", "fraise"];

 const uniqueStringTableau = Array.from(new Set(StringTableau));
 const sortedStringTableau = uniqueStringTableau.sort();
 console.log(sortedStringTableau);
 