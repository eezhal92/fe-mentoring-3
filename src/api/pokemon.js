export function createPokemon(data) {
  console.log('Mocking request to backend')
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    const isSuccess = randomNumber > 0.5;

    if (isSuccess) {
      console.log('delaying 2s')
      setTimeout(() => {
        resolve(data);
      }, 2000);
      return;
    }

    reject(new Error('Oops failed'));
  });
}

// export function createPokemon(data) {
//   return fetch('ini endpoint', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json());
// }

export function getPokemons(page = 1) {
  return Promise.resolve([
    { id: Math.random(), name: 'haha '},
    { id: Math.random(), name: 'hihi '},
  ]);
}