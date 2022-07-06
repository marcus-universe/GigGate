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
    comments: [{
      id: 1,
      name: "Frank",
      img: "frank",
      comment: "Dank Giggate kann ich nun richtig in die Drums hauen ohne das meine Nachbarn wieder an der Tür klopfen."
    },
      {
        id: 2,
        name: "Josh",
        img: "josh",
        comment: "Das letzte Rock-Event war der Hammer. Ich habe ne geile E-Gitarre bekommen und konnte auf der Bühne richtig abrocken. Nächstes mal bin ich sicher wieder dabei."
      },
      {
        id: 3,
        name: "Jule",
        img: "jule",
        comment: "Die Giggate Proberäume sind ein super Treffpunkt, um neue Musiker zu treffen und gemeinsam zu jammen. Habe viele coole Musiker kennengelernt. Danke Giggate! 😊"
      },
      {
        id: 4,
        name: "Lisa",
        img: "lisa",
        comment: "Ein super Ort für mich, um in Ruhe, ungestört, Piano zu spielen. Genau wonach ich gesucht habe. ❤"
      },
      {
        id: 5,
        name: "William",
        img: "william",
        comment: "Vollausgestattete Proberäume, mega Events und coole Musiker die man trifft. Was will man mehr? Es ist der Himmel für jeden Musiker und ich freu mich schon auf mein nächsten Gig 😎🎸"
      },
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})
