<template>
    <div>
        <div ref="modal" class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title"><slot name="modalHeader"></slot></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <slot name="modalBody"></slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="modalFooter"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Modal } from 'bootstrap';

let modalInstance = null;
const modal = ref(null);

onMounted(() => {
    modalInstance = new Modal(modal.value);
});

const showModal = () => {
    modalInstance.show();
};

defineExpose({
  showModal
});

</script>

<style scoped>
</style>