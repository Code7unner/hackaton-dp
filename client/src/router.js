import Vue from 'vue'
import Router from 'vue-router'
import MainPage from './views/MainPage.vue'
import CurrentEventPage from './views/CurrentEventPage.vue'
import EventDiscussions from './views/EventDiscussions.vue'
import Discussion from './views/Discussion.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage
    },
    {
      path: '/event/:id',
      name: 'main',
      component: CurrentEventPage,
      props: true
    },
    {
      path: '/eventdiscussions',
      name: 'eventdiscussions',
      component: EventDiscussions
    },
    {
      path: '/discussion',
      name: 'discassion',
      component: Discussion
    }
  ]
})
