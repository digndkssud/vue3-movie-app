exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'KIM JUNSOO',
      age: 28,
      email: 'digndkssud@gmail.com'
    })
  }
}