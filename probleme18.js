/**
 * Trouve le premier élément qui apparaît un nombre pair de fois dans un tableau.
 * N'oublie pas de gérer les éléments avec plusieurs occurrences paires et retourne le premier.
 * Retourne null s'il n'y a aucun élément avec un nombre pair d'occurrences.
 * Exemple d'utilisation :
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); // 4
 */
//etape 1:parcourir le tableau avec un boucle 
//etape 2:utilise un compteur pour les nombre de occurence 
//etape 3:parcourir pour trouver une reccurence
//etape 4:verifier si le nombre occurence est pair ainsi que le nombre != 0
//etape 5:return le resultat a partir de la verification null/nombre

var evenOccurrence = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    var count=0

    for (var j = 0; j < arr.length; j++) {
      if (arr[i]===arr[j]) {
        count=count+1
        
      }
      
      
    }
    if (count!=0 && count %2==0) {
      return arr[i]
      
    }


    
  }
  return null
};
