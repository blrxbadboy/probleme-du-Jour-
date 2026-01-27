// 1- Crée une fonction qui prend un nombre et retourne true s’il est pair, sinon false.
function numpair(n) {
    if (n%2===0) {
        return true
        
    }
    return false
    
}


// 2- Crée une fonction pour inverser une chaîne donnée avec une boucle for

function inverse(ch) {
    var result=""
    for (var i = 0; i < ch.length; i++) {
        result=ch[i]+result
        
    }
    return result
    
}



// 3- Crée une fonction pour supprimer le dernier élément d’un tableau et le retourner sans itérer
function supptab() {
    var tab=[1,2,3,4,5]
    tab.pop()
    return tab
    
}



// 4- Crée une fonction pour supprimer le premier élément d’un tableau et le retourner sans itérer
function supptab2() {
    var tab=[1,2,3,4,5]
    tab.shift()
    return tab
    
}



// 5- Crée une fonction pour trouver le premier nombre divisible par 3 et 5 entre 1 et 50 avec une boucle while
function find() {
    var n=1
    while (n<=50) {
        if (n % 3===0 && n% 5===0) {
            return n
            
        }
        n++
    }
    
}
