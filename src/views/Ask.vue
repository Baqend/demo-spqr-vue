<template>
  <div class="ask">
  <Form :onSubmit="onSubmit" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Form from '@/components/Form.vue';
import { db } from 'baqend/realtime';

@Component({
  components: {
    Form,
  },
})
export default class Ask extends Vue {

  public async onSubmit(data: { author: string, text: string }) {
    const question = new db.Question(data);
    await question.save();

    this.$router.push('/');
  }

}
</script>

<style scoped>
.ask {
  padding: 16px 16px 0 16px;
  background-color: white;
}
</style>
