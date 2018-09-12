<template>
  <div>
    <question v-for="question in questions" :key="question.key" :question="question"></question>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Question from '@/components/Question.vue';
import { model } from 'baqend';
import { db } from 'baqend/realtime';

@Component({
    components: {
        Question,
    },
})
export default class QuestionList extends Vue {

  public questions: model.Question[] = [];

  private async created() {
    db.Question
      .find()
      .descending('upvotes')
      .resultStream()
      .subscribe((questions) => {
        this.questions = questions;
      });
  }

}
</script>
