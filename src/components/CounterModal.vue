<template>
  <ion-modal>
    <ion-header>
      <ion-toolbar>
        <ion-title>Counter</ion-title>
        <ion-buttons slot="secondary">
          <ion-button @click="dismissModal">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <p>Hello, world! This is a counter to test:</p>
      <div>
        <ion-button @click="decrement">-</ion-button>
        <span>{{ counter }}</span>
        <ion-button @click="increment">+</ion-button>
      </div>
    </ion-content>
  </ion-modal>
</template>

<script lang="ts">
  import {
    IonButtons,
    IonButton,
    IonContent,
    IonHeader,
    IonModal,
    IonTitle,
    IonToolbar,
  } from '@ionic/vue'
  import { defineComponent } from 'vue'

  export default defineComponent({
    components: {
      IonButtons,
      IonButton,
      IonContent,
      IonHeader,
      IonModal,
      IonTitle,
      IonToolbar,
    },
    data() {
      return {
        counter: 0,
      }
    },
    methods: {
      increment() {
        this.counter++
      },
      decrement() {
        this.counter--
      },
      dismissModal() {
        this.$emit('dismissModal')
      },
    },
  })
</script>

<style scoped>
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
