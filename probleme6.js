

// 1- Écris une fonction factorielleN qui calcule la factorielle de n avec une boucle while.
function factorielleN(n) {
    var resultat=1
    var cont=1

    while (cont<=n) {
        resultat=resultat*cont
        cont++
        
    }
    return resultat
    
}


// 2- Écris une fonction afficheMultiplesDe3 qui prend un nombre n et affiche tous les multiples de 3 de 0 jusqu’à n.
function afficheMultiplesDe3(n) {
    var count=0
    while (count<=n) {
        if (count%3===0) {
            console.log(count);
            
            
        }
        count++
    }
    
}


// 3- Écris une fonction compteVoyelles qui prend une chaîne de caractères et compte le nombre de voyelles avec une boucle while.

function compteVoyelles(ch) {
    var cont=0
    var cont2=0
    var resultat=0
    var voyelle="aeiouy"

    while (cont<ch.length) {
        if (ch[cont]===voyelle[cont2]) {
            resultat++


            
        }
        cont++
        
    }
    
}