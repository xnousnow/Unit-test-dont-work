import { mount } from '@vue/test-utils'
import CounterModal from '@/components/CounterModal.vue'
import { IonButton } from '@ionic/vue'

describe('CounterModal', () => {
  it('renders a description and counter', async () => {
    const wrapper = mount(CounterModal)

    // Same effect as (this.$refs.modalComponent as any).$el.present(), I think?
    wrapper.vm.$el.present()

    // Here goes the problem: Cannot call text on an empty DOMWrapper.
    console.log(wrapper.html())
    // Above gives me the following:
    // <ion-modal id="ion-overlay-1"></ion-modal>

    expect(wrapper.find('p').text()).toBe('Hello, world! This is a counter to test:')
    const buttons = wrapper.findAllComponents(IonButton)
    expect(buttons.length).toBe(2)
    expect(buttons[0].text()).toBe('-')
    expect(buttons[1].text()).toBe('+')
    expect(wrapper.find('span').text()).toBe('0')

    buttons[0].trigger('click')
    expect(wrapper.find('span').text()).toBe('-1')
    buttons[1].trigger('click')
    expect(wrapper.find('span').text()).toBe('0')
  })
})
