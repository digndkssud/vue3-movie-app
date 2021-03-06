import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

const _defaultMessage = 'Search for the movie title!'

export default {
  // module!

  namespaced: true,
  // data!

  state: () => ({
    movies: [],
    message: _defaultMessage,
    loading: false,
    theMovie: {}
  }),
  // computed!
  getters: {
    // movieIds(state) {
    //   return state.movies.map(m => m.imdbID)
    // }
  },
  // methods!

  // 변이 mutations에서만 데이터 변경 
  // this.$store.commit으로 다른 컴포넌트에서 실행
  mutations: { 
    updateState(state, payload) {
      // ['movies','message','loading']
      Object.keys(payload).forEach(key =>{
        state[key] = payload[key]
      })
    },
    // 메인 페이지로 갔었을 때 초기화가 되어야하므로 Home 컴포넌트에서 사용
    resetMovies(state) {
      state.movies = []
      state.message = _defaultMessage
      state.loading = false
    }
  },
  // 비동기
  actions: {
    // Search.vue의 this.$store.dispatch()를 작동.
    // title, type, number, year을 payload를 통해 받아온다.
    async searchMovies({ state, commit }, payload) {
      if(state.loading) return
      commit('updateState',{ 
        message:'',
        loading: true
      })
     try {
      const res = await _fetchMovie({
        ...payload,
        page: 1
      })
      const { Search, totalResults } = res.data
      commit('updateState', {
        // 찾은 데이터(Search)를 momvies라는 데이터로 반환
        movies: _uniqBy(Search, 'imdbID') 
      })
      // console.log(totalResults) // 268
      // console.log(typeof totalResults) // string

      const total = parseInt(totalResults, 10) // string인 totalResults를 10진수인 int로 바꾸어 total에 저장
      const pageLength = Math.ceil(total / 10)

      // 추가 요청 전송!
      if(pageLength > 1) {
        for (let page = 2; page <= pageLength; page += 1) {
          if(page > (payload.number / 10 )) break 
          // 4 > 3 영화 목록 갯수 조절
          const res = await _fetchMovie({
            ...payload,
            page
          })
          const { Search } = res.data 
          commit('updateState', {
            // movies라는 배열에 기존 검색했던 movies 데이터와
            // 새로 찾아온 Search를 merge 하여 대입.
            movies: [
              ...state.movies, 
              ..._uniqBy(Search, 'imdbID')
            ]
          })
        }
      } 
     } catch ({ message }) {
       commit('updateState', {
         movies: [],
         message
       })
     } finally {
       commit('updateState',{
         loading: false
       })
     }
    },
    async searchMovieWithId({ state, commit }, payload){
      if(state.loading) return

      commit('updateState',{
        theMovie : {},
        loading  : true
      })

      try {
        const res = await _fetchMovie(payload)
        commit('updateState',{
          theMovie : res.data
        })
      } catch (error) {
        commit('updateState',{
          theMovie: {}
        })
      } finally {
        commit('updateState',{
          loading: false
        })
      }
    }
  }
}

async function _fetchMovie(payload) { 
 return await axios.post('/.netlify/functions/movie', payload)
}