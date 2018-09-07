<template>
  <div class="ask">
  <Form onSubmit={this.onSubmit} />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Form from '@/components/Form.vue';

@Component({
  components: {
    Form,
  },
})
export default class Ask extends Vue {}
</script>

<style scoped>
.ask {
  padding: 16px 16px 0 16px;
  background-color: white;
}
</style>
