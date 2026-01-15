
// 1- Crée une fonction qui prend une heure (0–23) et retourne :
// "matin" si < 12
// "après-midi" si entre 12 et 18
// "soir" si > 18

function jour(h) {
    if (h<12) {
        return "matin"
        
    }
    if (h<18) {
        return "apres-midi"
        
    }
    return "soir"
    
}


// 2- Crée une fonction qui prend un score et retourne :
// "excellent" si score >= 90
// "bon" si score >= 70
// "moyen" si score >= 50
// "faible" sinon

function score(n) {
    if (n>=90 && n<100) {
        return "excellent"
        
    }
    if (n>=70 && n<90) {
        return "bon"
        
    }
    if (n>=50 && n<70) {
        return "moyen"
        
    }
    return "faible"
}


// 3- Crée une fonction qui prend trois nombres et retourne le **plus petit** des trois


function petit(n1,n2,n3) {
    if (n1<n2 && n1<n3) {
        return n1
        
    }
    if (n2<n1 && n2<n3) {
        return n2
        
    }
    return n3
    
}





