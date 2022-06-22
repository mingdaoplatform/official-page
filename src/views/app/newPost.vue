<template>
  <div class="new">
    <h1>新增問題</h1>
    <textarea name="content" id="content"></textarea>
    <select name="subject" id="subject">
      <option value="0">國文</option>
      <option value="1">英文</option>
      <option value="2">數學</option>
      <option value="3">社會</option>
      <option value="4">自然</option>
    </select>
    <button>送出</button>
  </div>
</template>

<style lang="scss" scoped>
.new {
  width: 85vw;
  max-width: 1000px;
  margin: 20px auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  textarea {
    margin: 50px 20px 20px 20px;
    width: 100%;
    max-width: 800px;
    resize: none;
    font-size: 1rem;
    line-height: 25px;
    outline: none;
    border: none;
    background-color: #eeeeeee0;
    padding: 10px 15px;
    border-radius: 8px;
  }

  select {
    width: 100%;
    max-width: 200px;
    outline: none;
  }

  button {
    margin-top: 20px;
    width: 100%;
    max-width: 300px;
    background-color: #fab340;
    border: 1px solid #fab340;
    outline: none;
    border-radius: 5px;
    padding: 5px 0;
    color: #fff;
  }
}
</style>
