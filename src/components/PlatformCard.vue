<template lang="pug">
div
  h1.title.has-text-centered 플랫폼 선택
  section
    .columns
      .column(v-for="platform in platforms" :key="platform.name")
        .card.platform
          .card-image
            figure.image.is-1by1
              img(:src='require(`@/assets/${platform.img}`)', :alt='platform.name')
          .card-content
            .media
              .media-content
                p.title.is-4 {{ platform.name }}
            .content {{ platform.description }}
</template>

<script>
export default {
  data() {
    return {
      platforms: [
        {
          name: "사람인",
          img: "saramin.png",
          description:
            "1000대기업 공채 및 핵심자료, 대기업/중소기업 채용, 기업정보, 연봉정보 제공."
        },
        {
          name: "잡코리아",
          img: "jobkorea.png",
          description:
            "1000대기업 핵심공채전략, 맞춤채용정보, 기업정보, 연봉정보 등 합격정보 제공."
        },
        {
          name: "잡플래닛",
          img: "jobplanet.jpg",
          description:
            "채용정보부터 직장인이 직접 남긴 기업리뷰, 연봉정보, 면접후기, 복지정보, 기업분석까지."
        },
        {
          name: "원티드",
          img: "wanted.jpg",
          description:
            "6000개 기업, 100만 회원. 국내기업부터 글로벌기업까지, 지금 원티드에서 지원하세요."
        }
      ]
    };
  }
};
</script>

<style scoped></style>
