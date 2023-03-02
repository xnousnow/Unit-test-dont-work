<template>
  <ion-page ref="page">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Ionic</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Ionic</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="ion-padding">
        <ion-button @click="openModal" expand="block"
          >Open counter modal</ion-button
        >
      </div>
      <ion-modal ref="modalComponent" :presentingElement="page">
        <my-modal-component @dismissModal="dismissModal" />
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
  import {
    IonButton,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonModal,
  } from '@ionic/vue'
  import { defineComponent } from 'vue'
  import MyModalComponent from '../components/CounterModal.vue'

  export default defineComponent({
    components: {
      IonButton,
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
      IonModal,
      MyModalComponent,
    },
    data() {
      return {
        page: null,
      }
    },
    methods: {
      openModal() {
        (this.$refs.modalComponent as any).$el.present()
      },
      dismissModal() {
        (this.$refs.modalComponent as any).$el.dismiss()
      },
    },
    mounted() {
      this.page = (this.$refs.page as any).$el
    },
  })
</script>
