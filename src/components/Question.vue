<template>
  <div class="question">

    <div class="upvotes" @click="upVote">
      {{ question.upvotes || 0 }}
    </div>

    <div class="content">
      <router-link :to="'/question/' + question.key">{{ question.text }}</router-link>
      <div class="info">
        {{ question.author }}
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { model } from 'baqend';

@Component
export default class Question extends Vue {

  @Prop(Object) public question!: model.Question;

  public async upVote() {
    await this.question
      .partialUpdate()
      .increment('upvotes')
      .execute();
  }

}
</script>
<style>
.question {
  padding: 16px;
  background: white;
  display: flex;
  align-items: center;
}

.question:not(:last-child) {
  border-bottom: 1px solid #e8e8e8;
}

.question .upvotes {
  color: #27c087;
  font-size: 20px;
  width: 40px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
}

.question .content {
  padding-left: 16px;
}

.question .content .info {
  margin-top: 8px;
}
</style>
