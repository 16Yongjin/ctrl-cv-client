<template lang="pug">
.step-header
  h1.title.is-4.has-text-centered 이력서 입력
  section.step-section
    .block
      h2.subtitle 인적사항
      b-field.md(label='이름' horizontal)
        b-input(v-model='resume.person.name')
      b-field.md(label='이메일' horizontal)
        b-input(type='email' v-model="resume.person.email")
      b-field.md(label='휴대폰번호' horizontal)
        b-input(v-model="resume.person.phoneNumber")
    hr
    .block
      h2.subtitle 학력
      div(v-for="education in resume.educations")
        b-field(label='학교구분', horizontal)
          b-select(v-model="education.educationLevel" placeholder='선택해주세요')
            option(value='고등학교') 고등학교
            option(value='대학교(2,3년)') 대학교(2,3년)
            option(value='대학교(4년)') 대학교(4년)
            option(value='대학원') 대학원
        b-field.md(label='학교명' horizontal)
          b-input(v-model="education.schoolName")
        b-field.xs(label='재학기간' horizontal)
          b-datepicker(placeholder='입학' v-model="education.schoolEntrance" type='month' icon='calendar-today')
          p.has-text-centered ~
          b-datepicker(placeholder='졸업' v-model="education.schoolGraduation" type='month' icon='calendar-today')
          b-select(placeholder='졸업상태' v-model="education.educationState")
            option(value='졸업') 졸업
            option(value='졸업예정') 졸업예정
            option(value='재학중') 재학중
            option(value='중퇴') 중퇴
            option(value='수료') 수료
            option(value='휴학') 휴학
        b-field.md(label='전공명' horizontal)
          b-input(v-model="education.majorName")
        b-field.xs(label='학점' horizontal)
          b-input(v-model="education.gpa")
          b-select(placeholder='총점' v-model="education.gpaScale")
            option(value='4.5') 4.5
            option(value='4.3') 4.3
            option(value='4.0') 4.0
            option(value='100') 100
</template>

<script>
export default {
  computed: {
    resume() {
      return this.$store.state.resume;
    }
  }
};
</script>

<style scoped></style>
