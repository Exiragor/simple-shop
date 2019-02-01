<template>
  <div class="comments-items">
    <div class="comment-item"
    v-for="comment in comments "
     :key="comment"
    >
      <h4 class="author">{{ comment.user }}</h4>
      <p class="message">{{ comment.message }}</p>
      <span class="data">{{ comment.data }}</span>

    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: "CommentList",
    async fetch ({ store, params }) {
      await store.dispatch("comments/loadComments", { count: 20, page: 1 })
    },
    computed: {
      ...mapState({
        comments: state => state.comments.list || []
      })
    }
  }
</script>

<style scoped lang="scss">
  @import "~assets/scss/vars";
  // colors
  $gray: map_get($colors, gray3);

.comments-items {
  display: flex;
  flex-direction: column;
  margin: 35px 0;

  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #e9e9e9;
  color: #000;
}
.comment-item {
  text-align: left;
  color: #000;
  background-color: #fff;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 25px;
}
.message {
  margin: 0;
  display: block;
}
.author {
  margin: 0;
  display: block;
  padding: 0 0 20px;
}
.data {
  margin: 0;
  display: block;
  text-align: right;
  padding: 10px 0 0;
  color: rgba(0,0,0, .8);
}
</style>