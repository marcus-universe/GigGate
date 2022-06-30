import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    settings: {
      loggedIn: false,
      mobile: false,
      tablet: false,
      bellNumber: 4,
    },
    elements: {
      ButtonCenter: false,
    },
    notifications: [{
        id: 1,
        title: "Jetzt Proben",
        loggedIn: false,
        url: "/proberaeume",
        icon: "none",
        iconActive: false,
        text: "Deutschlandweit vollausgestattete Proberäume",
        button: "Abo-Plans"
      },
      {
        id: 2,
        title: "Jazzy-Gig",
        loggedIn: false,
        url: "/jazzy-gig",
        icon: "clock_dark.svg",
        iconActive: true,
        text: "18.08 - 18:00 - 22:00",
        button: "Zum Event"
      },
      {
        id: 3,
        title: "#YourGig",
        loggedIn: true,
        url: "/community",
        icon: "none",
        iconActive: false,
        text: "Teile deine Jamsession mit der Community",
        button: "Community"
      },
      {
        id: 4,
        title: "Gründe ne Band",
        loggedIn: true,
        url: "/community",
        icon: "none",
        iconActive: false,
        text: "Finde Musiker zum Jammen",
        button: "Community"
      }
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
