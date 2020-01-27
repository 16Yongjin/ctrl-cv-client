<template lang="pug">
.step-header
  h1.title.has-text-centered 이력서 입력
  section
    .block
      h2.subtitle 인적사항
      b-field.md(label='이름' horizontal)
        b-input(value='Kevin Garvey')
      b-field.md(label='이메일' horizontal)
        b-input(type='email', value='john@gmail.com')
      b-field.md(label='휴대폰번호' horizontal)
        b-input(value='01012345678')
    hr
    .block
      h2.subtitle 학력
      b-field(label='학교구분', horizontal)
        b-select(placeholder='선택해주세요')
          option(value='1') 고등학교
          option(value='2') 대학교(2,3년)
          option(value='3') 대학교(4년)
          option(value='4') 대학원
      b-field.md(label='학교명' horizontal)
        b-input(value='한국대학교')
      b-field.xs(label='재학기간' horizontal)
        b-datepicker(type='month', placeholder='입학', icon='calendar-today')
        p.has-text-centered ~
        b-datepicker(type='month', placeholder='졸업', icon='calendar-today')
        b-select(placeholder='졸업상태')
          option(value='졸업') 졸업
          option(value='졸업예정') 졸업예정
          option(value='재학중') 재학중
          option(value='중퇴') 중퇴
          option(value='수료') 수료
          option(value='휴학') 휴학
      b-field.md(label='전공명' horizontal)
        b-input(value='')
      b-field.xs(label='학점' horizontal)
        b-input(value='')
        b-select(placeholder='총점')
          option(value='4.5') 4.5
          option(value='4.3') 4.3
          option(value='4.0') 4.0
          option(value='100') 100
</template>

<script>
export default {};
</script>

<style scoped></style>
