// 1- Crée une fonction qui prend deux nombres et retourne :
// "égaux" s’ils sont identiques
// "différents" sinon

function egaux(n1,n2) {
    if (n1===n2) {
        return "egaux"
        
    }
    return "differents"
    
}


// 2- Crée une fonction qui prend une chaîne et retourne true
// si elle est vide, sinon false

function chaine(ch) {
    if (ch==="") {
        return true
        
    }
    return false
}


// 3- Crée une fonction qui prend une vitesse et retourne :
// "lent" si inférieure à 30
// "normal" si entre 30 et 90
// "rapide" si supérieure à 90

function vitesse(n) {
    if (n<30) {
        return "lent"
        
    }
    if (n>=30 && n<=90) {
        return "normal"
    }
    return "rapide"
    
}



// 4- Crée une fonction qui prend un nombre et retourne true
// s’il est divisible par 2 OU par 3
// MAIS PAS par les deux en même temps

function divisible(n) {
    if (n % 2 === 0 && n % 3 === 0) {
        return false
        
    }
    if (n % 2 === 0 || n % 3 === 0) {
        return true
    }
    return false
}
