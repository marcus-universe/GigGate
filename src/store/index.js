import {
  createStore
} from 'vuex'
import {commentsData, Prices, Notifications, filterIcons, rooms, orte, message} from '@/assets/json'

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
      chatOpen: false,
      NotifyNumber: 4,
      deletedNotify: false,
      uploadOpen: false,
      filterInstOpen: false,
      filterOrteOpen: false,
      menuNoShadow: false,
    },
    elements: {
      ButtonCenter: false,
    },
    notifications: Notifications,
    comments: commentsData,
    preisListe: Prices,
    filterInst: filterIcons,
    rooms: rooms,
    orte: orte,
    message: message,
  },
  getters: {},
  mutations: {
    horizontalScroller(state, event) {
      event.preventDefault()
      event.currentTarget.scrollLeft += event.deltaY / 2
    }
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