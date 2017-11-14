import {shallow, createLocalVue} from 'vue-test-utils'
import App from './App'
import store from './store'

const localVue = createLocalVue() /* ? */

describe('App.vue', () => {
  const wrapper = shallow(App, {store, localVue}) /* ?  */
  it('toggles sidebar', () => {
    wrapper.find("[test='App.vue:sidebar-toggle']").trigger('click')
    expect(store.state.isMainSidebarActive).toBeTruthy()
  })

  it('toggles login', () => {
    wrapper.find("[test='App.vue:sign-in']").trigger('click')
    expect(store.state.isLoginModalActive).toBeTruthy()
  })
})
