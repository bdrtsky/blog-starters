<template>
  <div class="page-wrapper">
    <div class="container">
      <div class="intro">
        <p>
          Hello. My name is Evan You. I am an independent software developer and
          the creator of the open source JavaScript framework Vue.js. Most of my
          work is open source and publicly available on GitHub. If you happen to
          speak Chinese, my Chinese name is 尤雨溪. you can also find me on 微博
          and 知乎. Outside of programming and helping my wife take care of our
          two kids, I enjoy video games, karaoke, sushi and collecting watches.
        </p>
      </div>
      <ul>
        <li v-for="blogpost in blogposts" :key="blogpost.slug">
          <BlogpostPreview :blogpost="blogpost"></BlogpostPreview>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    const blogposts = await app.$content('blog').fetch()
    // console.log(blogposts)

    return { blogposts }
  }
}
</script>

<style lang="postcss" scoped>
.page-wrapper {
  padding: 0 1rem;
}

.intro {
  margin: 3rem 0;
}

.intro p {
  font: var(--font-6);
  font-family: var(--monospace-font-family);
  width: 100%;
}

@media (min-width: var(--screen-md)) {
  .intro p {
    width: 50%;
  }
}

ul {
  display: flex;
  flex-direction: column;
}
</style>
