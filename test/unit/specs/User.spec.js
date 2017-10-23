import Vue from 'vue'
import User from '@/components/User'

let vm
beforeEach(function () {
  const Constructor = Vue.extend(User)
  vm = new Constructor().$mount()
})

describe('User.vue', () => {
  it('should render correct contents', () => {
    expect(vm.$data.show).to.equal(true)
  })
})
