import axios from 'axios'

export default {
  // module!

  namespaced: true,
  // data!

  state: () => ({
    movies: [] 
  }),
  // computed!

  getters: {
    // movieIds(state) {
    //   return state.movies.map(m => m.imdbID)
    // }
  },
  // methods!

  // 변이 mutations에서만 데이터 변경 
  mutations: { 
    updateState(state, payload) {
      // ['movies','message','loading']
      Object.keys(payload).forEach(key =>{
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
    }
  },
  // 비동기
  actions: {
    async searchMovies({ commit }, payload) {
      const { title, type, number ,year } = payload
      const OMDB_API_KEY = 'e01aeb69'
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: Search,
        //message: 'Hello world!',
        //loading: true
      })
    }
  }
}