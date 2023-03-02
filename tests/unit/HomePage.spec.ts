import { mount } from '@vue/test-utils'
import HomePage from '@/views/HomePage.vue'
import { IonButton, IonModal } from '@ionic/vue'

describe('HomePage', () => {
  it('renders a button', () => {
    const wrapper = mount(HomePage)
    expect(wrapper.findComponent(IonButton).exists()).toBe(true)
    expect(wrapper.findComponent(IonButton).text()).toBe('Open counter modal')
  })
  it('opens a counter modal when the button is clicked', async () => {
    const wrapper = mount(HomePage)
    await wrapper.findComponent(IonButton).trigger('click')
    expect(wrapper.findComponent(IonModal).exists()).toBe(true)
  })
})
