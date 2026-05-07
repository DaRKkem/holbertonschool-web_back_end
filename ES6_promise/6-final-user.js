// Handles multiple promises and returns an array of their statuses and values
import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';


export default function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
        .then((results) => results.map((result) => ({
            status: result.status,
            value: result.value || result.reason,
        })));
}

/*

Ce que fait allSettled :
Il prend un tableau de Promises, les lance en parallèle,
et retourneune nouvelle Promise qui se resolve quand toutes
sont terminées — avec un tableau des résultats bruts :

Promise.allSettled([promesse1, promesse2])
// → retourne UNE Promise qui contient :
// [
//   { status: 'fulfilled', value: {firstName: 'Bob', lastName: 'Dylan'} },
//   { status: 'rejected', reason: Error('bob.jpg cannot be processed') }
// ]


Pourquoi .then() après ?
Parce que allSettled retourne une Promise — tu peux pas accéder
directement au tableau de résultats. .then() dit "quand cette
Promise est prête, donne moi ce qu'elle contient" :

Promise.allSettled([...])
// ici t'as une Promise, pas encore le tableau

.then((results) => ...)
// ICI t'as enfin accès au tableau results


Pourquoi .map() après ?
Parce que le tableau brut de allSettled a ce format :

{ status: 'fulfilled', value: ... }
{ status: 'rejected', reason: ... }  // reason pas value !
Mais l'énoncé veut toujours value — donc .map() reformate chaque
résultat pour unifier value et reason sous la même clé value.

*/
