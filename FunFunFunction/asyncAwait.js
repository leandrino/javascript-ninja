const fetch = require('node-fetch')

// async function fetchAvatarUrl(userId) {
//   const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
//   const data = await response.json()
//   console.log(data.imageUrl)
//   return data.imageUrl
// }

// const result = fetchAvatarUrl(123)
// result

async function fetchCatAvatars(userId) {
  const response = await fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  const user = await response.json()

  return await Promise.all(user.cats.map(async function(catId) {
    const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
    const catData = await response.json()
    return catData.imageUrl
  }))

  // const catImagesUrls = []
  // for (const catId of user.cats) {
  //   const response = await fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
  //   const catData = await response.json()
  //   catImagesUrls.push(catData.imageUrl)
  // }
  //
  // return catImagesUrls


  // return fetch(`https://catappapi.herokuapp.com/users/${userId}`)
  //   .then(response => response.json())
  //   .then(user => {
  //     const promises = user.cats.map(catId =>
  //       fetch(`https://catappapi.herokuapp.com/cats/${catId}`)
  //         .then(response => response.json())
  //         .then(catData => catData.imageUrl)
  //     )
  //     return Promise.all(promises)
  //   })
}

const result = fetchCatAvatars(123)
result
