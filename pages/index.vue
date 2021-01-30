<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-deploy-demo
      </h1>
      <div class="links">
        <button class="button--green" @click.prevent="tryGet">
          Documentation
        </button>
        <button class="button--grey" @click.prevent="tryPost">
          GitHub
        </button>
        <a href="/api/oauth1">跳轉1</a>
        <a href="/auth">跳轉2</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head: () => ({
    title: "這是首頁"
  }),
  methods: {
    async tryGet() {
      try {
        const { data } = await this.$axios.get("/api");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    async tryPost() {
      try {
        const { data } = await this.$axios.post("/api/test", {
          name: "ian",
          age: 21
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
