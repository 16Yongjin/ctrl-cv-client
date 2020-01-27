<template lang="pug">
.step-header
  h1.title.is-4.has-text-centered 이력서 확인
  section
    .block
      h2.subtitle 인적사항
      check-field(label="이름" value="Robert Kill")
      check-field(label="이메일" value="robert@gmail.com")
      check-field(label="연락처" value="010-1234-5678")
    hr
    .block
      h2.subtitle 학력
    check-field(label="학교구분" value="대학교(4년)")
    check-field(label="학교명" value="한국대학교")
    check-field(label="재학기간" value="2016.3 ~ 2020.1")
    check-field(label="졸업상태" value="재학중")
    check-field(label="전공명" value="컴퓨터공학")
    check-field(label="학점" value="4.0 / 4.5")
</template>

<script>
import CheckField from "@/components/CheckField.vue";
export default {
  components: { CheckField }
};
</script>

<style scoped></style>
