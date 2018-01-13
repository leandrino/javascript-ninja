const fetch = require('node-fetch')
// const co = require('co')

// fetch('http://jsonplaceholder.typicode.com/posts/1')
//   .then( response => response.json() )
//   .then( post => post.title )
//   .then( title => console.log('title: ', title) )

/**
 * GENERATOR WITH LIBRARY CO
 */

// co(function *() {
//   const uri = 'http://jsonplaceholder.typicode.com/posts/1'
//   const response = yield fetch(uri)
//   const post = yield response.json()
//   const title = post.title
//   console.log('Title:', title)
// })

/**
 * G E N E R A T O R
 */

// run(function *() {
//   const uri = 'http://jsonplaceholder.typicode.com/posts/1'
//   const response = yield fetch(uri)
//   console.log('Response: ', response)
//   const post = yield response.json()
//   const title = post.title
//   console.log('Title:', title)
// })

// function run(generator) {
//   const interator = generator()
//   const interation = interator.next()
//   const promise = interation.value
//   promise.then(response => {
//     const anotherInterator =interator.next(response)
//     const anotherPromise = anotherInterator.value
//     anotherPromise.then( post => interator.next(post))
//   })
// }

/**
 * R E F A C T O R I N G
 */

run(function *() {
  const uri = 'http://jsonplaceholder.typicode.com/posts/1'
  const response = yield fetch(uri)
  const post = yield response.json()
  const title = post.title
  return title
})
.catch( error => console.error(error.stack))
.then( x => console.log('run resulted in', x))

function run(generator) {
  const iterator = generator()

  function iterate(iteration) {
    if (iteration.done) return iteration.value
    const promise = iteration.value
    return promise.then( x => iterate(iterator.next(x)))
  }

  return iterate(iterator.next())
}
