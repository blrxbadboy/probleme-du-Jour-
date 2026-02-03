// 1-Écris une fonction removeByIndex qui supprime l’élément à l’index donné et retourne le nouveau tableau.
function removeBy(tab,index) {
    var newTab=[]
    for (var i = 0; i < tab.length; i++) {
        if (i!==index) {
             newTab.push(tab[i])
        }

       

        
    }
    return newTab
    
}



// 2-Écris une fonction pick qui prend un objet et un tableau de clés, et retourne un nouvel objet avec seulement ces clés.
function pick(obj,keyss) {
    var result={}
    for (var i = 0; i < keyss.length; i++) {
        var key = keyss[i] 
        if (key in obj) {
            result[key]=obj[key]
            
        }
        
    }

    return result
}




//3- Écris une fonction mostFrequent qui prend un tableau et retourne la valeur qui apparaît le plus souvent dans un tableau.

function mostFrequent(tab) {
    var countv=0
    var result=0
    for (var i = 0; i < tab.length; i++) {
        var count=0
        for (var j = 0; j < tab.length; j++) {
            if (tab[i]===tab[j]) {
                count=count+1

                
            }
            
        }
        if (count>countv) {
            countv=count
            result=tab[i]
            
        }

        
    }
    return result
    
}