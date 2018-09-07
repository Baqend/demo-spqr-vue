<template>
  <div class="form">
    <textarea
        :bind="text"
        class="input"
        placeholder="Your Text"
        name="text"
    ></textarea>
    <div class="row">
      <input
          :bind="author"
          class="input"
          placeholder="Name"
          name="author"
      />
      <button>Submit</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Form extends Vue {

  public text: string = '';
  public author: string = '';

}
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
}

.input {
  border: 1px solid #e8e8e8;
  background-color: #f8f8f8;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 16px;
  flex: 1;
  font-size: 16px;
}

.row {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

button {
  height: 36px;
  margin-left: 8px;
}
</style>
