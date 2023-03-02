import { mount } from '@vue/test-utils'
import CounterModal from '@/components/CounterModal.vue'
import { IonButton } from '@ionic/vue'

describe('CounterModal', () => {
  it('renders a description and counter', async () => {
    const wrapper = mount(CounterModal)

    expect(wrapper.find('p').text()).toBe('Hello, world! This is a counter to test:')
    const buttons = wrapper.findAllComponents(IonButton)
    // button variable includes Close button, so the length is 3.
    expect(buttons.length).toBe(3)
    // We have to ignore the first button.
    expect(buttons[1].text()).toBe('-')
    expect(buttons[2].text()).toBe('+')
    expect(wrapper.find('span').text()).toBe('0')

    buttons[1].trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('span').text()).toBe('-1')
    buttons[2].trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.find('span').text()).toBe('0')
  })
})
