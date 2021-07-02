export default {
  install(app) {
    // install 실행이 완료되었다는 것을 알리기 위해 
    // Promise를 통해 처리 가능
    app.config.globalProperties.$loadImage = src => {      
      return new Promise(resolve => {
        const img = document.createElement('img')
        img.src = src
        img.addEventListener('load', () => {
          // 이미지 로드 완료!  
          resolve() 
        })
      })
    }
  }
} 