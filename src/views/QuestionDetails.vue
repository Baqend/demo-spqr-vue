<template>
  <div>
    <question v-if="question" :question="question" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Question from '@/components/Question.vue';
import { model } from 'baqend';
import { db } from 'baqend/realtime';
import { Route } from 'vue-router';

@Component({
  components: {
    Question,
  },
})
export default class QuestionDetails extends Vue {

  public question: model.Question;

  constructor() {
    super();
    this.question = new db.Question();
  }

  @Watch('$route', { immediate: true })
  private onRouteChanged(to: Route) {
    const params = to.params as { key: string };
    this.loadQuestion(params.key);
  }

  private async loadQuestion(key: string) {
    this.question = await db.Question.load(key);
  }
}
</script>

<style scoped>

</style>
