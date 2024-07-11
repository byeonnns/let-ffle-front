import { reactive } from 'vue';

const eventBus = reactive({
    showToast: null,
    show(message) {
      if (this.showToast) {
        this.showToast(message);
      }
    }
  });
  
  export function useEventBus() {
    return eventBus;
  }