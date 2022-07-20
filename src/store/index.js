import {
  createStore
} from 'vuex'
import {commentsData, Prices, Notifications, filterIcons, rooms} from '@/assets/json'

export default createStore({
  state: {
    settings: {
      loggedIn: true,
      mobile: false,
      tablet: false,
      bellNumber: 2,
      menuOpen: false,
      profileOpen: false,
      bellOpen: false,
      NotifyNumber: 4,
      deletedNotify: false,
      uploadOpen: false,
      filterInstOpen: false,
    },
    elements: {
      ButtonCenter: false,
    },
    notifications: Notifications,
    comments: commentsData,
    preisListe: Prices,
    filterInst: filterIcons,
    rooms: rooms
  },
  getters: {},
  mutations: {
    // SET_COMMITS(state, commit) {
    //   state.comments = commit
    // },
  },
  actions: {


  },
  modules: {}
})

// const setProductToStore = () => {
//     axios
//     .get("@/assets/json/comments.json")
//     .then(response => {
//         mutations('SET_COMMITS', response.data.comments)
//     })   
// }
// setProductToStore()