<template lang="pug">
.container
  .section
    .block.rel
      .has-text-centered.center.w100.fade-in
        .h1.title ✔ 이력서 등록 완료!
        ul
          li - 사람인
          li - 잡플래닛
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  height: calc(100vh - 100px);
  min-height: 300px;
}

.section,
.block {
  height: 100%;
}

.fade-in {
  margin-top: 25px;
  font-size: 21px;
  text-align: center;

  -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 0.5s; /* Firefox < 16 */
  -ms-animation: fadein 0.5s; /* Internet Explorer */
  -o-animation: fadein 0.5s; /* Opera < 12.1 */
  animation: fadein 0.5s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Internet Explorer */
@-ms-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
