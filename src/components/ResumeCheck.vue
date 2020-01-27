<template lang="pug">
.step-header
  h1.title.is-4.has-text-centered 이력서 확인
  section.step-section
    .block
      h2.subtitle 인적사항
      check-field(label="이름" :value="resume.person.name")
      check-field(label="이메일" :value="resume.person.email")
      check-field(label="연락처" :value="resume.person.phoneNumber")
    hr
    .block
      h2.subtitle 학력
    div(v-for="education in resume.educations")
      check-field(label="학교구분" :value="education.educationLevel")
      check-field(label="학교명" :value="education.schoolName")
      check-field(label="재학기간" :value="monthFmt(education.schoolEntrance, education.schoolGraduation)")
      check-field(label="졸업상태" :value="education.educationState")
      check-field(label="전공명" :value="education.majorName")
      check-field(label="학점" :value="`${education.gpa}/${education.gpaScale}`")
</template>

<script>
import CheckField from "@/components/CheckField.vue";
export default {
  components: { CheckField },
  computed: {
    resume() {
      return this.$store.state.resume;
    }
  },
  methods: {
    monthFmt(start, end) {
      const startFmt = `${start.getFullYear()}. ${start.getMonth() + 1}`;
      const endFmt = `${end.getFullYear()}. ${end.getMonth() + 1}`;
      return `${startFmt} ~ ${endFmt}`;
    }
  }
};
</script>

<style scoped></style>
