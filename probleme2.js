// 1- Crée une fonction qui prend un nombre et retourne "positif", "négatif" ou "zéro" selon sa valeur.

function valeur(n) {
    if (n > 0) {
        return "positif"
    }
    if (n===0) {
        return "zero"
        
    }
        
    
    return "negatif"
}



// 2- Crée une fonction qui prend un nombre et retourne "divisible par 3", "divisible par 5" ou "autre" selon le cas.

function div(n) {
    if (n % 3 === 0) {
        return "divisible par 3"
        
    }
    if (n % 5 === 0) {
        return "divisible par 5"
    }
        
    
    return "autre"
}





// 3- Crée une fonction qui prend deux nombres et retourne le plus grand des deux.

function PG(n1,n2) {
    if (n1>n2) {
        return n1
        
    }
    if (n2>n1) {
        return n2
        
    }
        
    
    return n1
}



// 4- Crée une fonction qui prend une note (0 à 20) et retourne "réussi" si la note est >= 10, sinon "échoué".

function note(n) {
    if (n>=10) {
        return "reussi"
        
    }
    if (n<10) {
        return " echoue"
    }
        
    if (n<20) {
        return "le nombre doit etre entre 20-0"
    }
    
}


