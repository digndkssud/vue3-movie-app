function a(callback){
  const str = 'Hello A'
  setTimeout(()=>{
    console.log('A')
    callback(str)
  },1000)
}

function b(){
  console.log('B')
}

a(function(event){
  console.log(event)
  b()
})

b()