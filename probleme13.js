

function each(tab, func) {
  for (var i = 0; i < tab.length; i++) {
    func(tab[i], i);
  }
}

function map(array, func) {
  var result = [];
  each(array, function (el, i) {
    result.push(func(el, i));
  });
  return result;
}


// 1 - Écrire une fonction qui prend un tableau de nombres et retourne un tableau où chaque nombre est augmenté de 10 % en utilisant map.
function augmenterDE10(tab) {
  return tab.map(function(el) {
    return el+(el*0.1)
  })
  
}

// 2 - Écrire une fonction qui prend un tableau de phrases et retourne un tableau contenant le nombre de lettres de chaque phrase (sans compter les espaces) en utilisant each .
function phrase(tab) {
  var newTab=[]
  each(tab,function(el){
    var compteur=0
    for (var i = 0; i < el.length; i++) {
      
      if (el[i]!==" ") {
        compteur=compteur+1

        
      }
      
    }
    newTab.push(compteur)
    

  })
  return newTab

  
}


// 3 - Écrire une fonction qui prend un tableau de nombres et affiche la moyenne de tous les nombres en utilisant each .
function nooombre(tab) {
  var somme=0
  var result=0
  each(tab,function (el) {
    somme=somme+el

    
  })
  result=somme/tab.length
  console.log(result);
  
}


// 4 - Écrire une fonction appelée agesEnMinutes qui
//  prend en paramètre un tableau d’objets et
//  retourne un nouveau tableau d’objets après avoir converti les âges de années en minutes
//  en utilisant map.
// 
//  var personnes = [{
//        nom: {
//              prenom: 'Majd',
//            secondPrenom: 'Eddin',
//      },
//       age: 30
//       }, {
//       nom: {
//             prenom: 'Fatima',
//             nomFamille: 'Himmamy'
//        },
//        age: 26
//        }, {
//        nom: {
//              prenom: 'Sahar',
//              secondPrenom: 'MHD'
//        },
//        age: 27
//        }, {
//        nom: {
//              prenom: 'Nour',
//              secondPrenom: 'Eddin',
//        },
//        age: 15
//        }, {
//        nom: {
//              prenom: 'Ahmad',
//              nomFamille: 'Awad'
//        },
//        age: 33
//  }];
// 
function agesEnMinutes(tab) {
  return tab.map(function(el){
    var newobj={}
    for(let cle in el){
      if (cle==="age") {
        newobj[cle]=el[cle]*365*24*60
      } else{
        newobj[cle]=el[cle]
      }
    }
    return newobj
  })
  
}


