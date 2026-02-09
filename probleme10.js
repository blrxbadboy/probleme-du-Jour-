 // 1 - Écris une fonction nommée removeElement qui prend un tableau et une valeur
 // en paramètres et retourne un nouveau tableau avec la première occurrence
 // de cette valeur supprimée. Si la valeur n’est pas trouvée, retourne le tableau original.
function removeE(tab,v) {
    var newTab=[]
    

    for (var i = 0; i < tab.length; i++) {
        if (tab[i]===v) {

            
        }
        
    }

    
}



 // 2 - Écris une fonction appelée reverseStr qui prend une chaîne de caractères
 // en entrée et retourne l’inverse de chaque lettre suivie d’un nombre
 // en commençant par zéro (à résoudre avec une boucle while).
 // exemple : reverseStr('hello'); ==> "o0l1l2e3h4"
function reverseStr(str) {
    var res=""
    var i=str.length - 1
    var count=0
    while (i>=0) {
        res=res+str[i]+ count
        i=i-1
        count=count +1

        
    }
    return res
    
}



 // 3- Écris une fonction nommée objKey qui prend un objet en paramètre
 //  et retourne un tableau contenant les clés de l’objet.
 // objKey({name:'ahmed', age:20}) ==> ['name','age']

function objKey(obj) {
    var newTab=[]
    if (key in obj) {
        
        
    }
    
}

// 4- Prends un tableau et supprime chaque deuxième élément de ce tableau.
// Garde toujours le premier élément et commence à supprimer à partir de l’élément suivant.
// Exemple :
// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep'];
// removeEveryOther(myArr) ==> ['Keep', 'Keep', 'Keep']
