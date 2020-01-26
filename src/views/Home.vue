<template lang="pug">
.container
  h1.title.has-text-centered 이력서 등록하기
  section.section
    b-steps(v-model='activeStep' :has-navigation="showStepNav")
      b-step-item(label='등록방법')
        .step-header
          h1.title.has-text-centered 이력서 등록 방법 선택
        .columns
          .column.is-3.is-hidden-touch
          .column.is-3
            .card
              section
                b-field
                  b-upload(v-model='dropFiles' drag-drop @input="onResumeInput")
                    section.p1
                      .content.has-text-centered
                        img(src="@/assets/upload.png")
                        p 이력서를 드롭하거나 
                        p 여기를 클릭하세요.
          .column.is-3
            .card.write(@click="goWrite")
              section
                .content.has-text-centered.p1
                  img(src="@/assets/write.png")
              .card-content.has-text-centered
                .content.subtitle 이력서 직접입력
      b-step-item(label='입력')
        div(v-if="write")
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
        div(v-else)
          .step-header
            h1.title.is-4.has-text-centered 이력서 확인
          |                 Lorem ipsum dolor sit amet.

      b-step-item(label='플랫폼 선택')
        h1.title.has-text-centered 플랫폼 선택
        section
        .columns
          .column
            .card.platform
              .card-image
                figure.image.is-1by1
                  img(src='@/assets/saramin.png', alt='사람인')
              .card-content
                .media
                  .media-content
                    p.title.is-4 사람인
                .content
                  | 1000대기업 공채 및 핵심자료, 대기업/중소기업 채용, 기업정보,
                  | 연봉정보 제공.
          .column
            .card.platform
              .card-image
                figure.image.is-1by1
                  img(src='@/assets/jobkorea.png', alt='잡코리아')
              .card-content
                .media
                  .media-content
                    p.title.is-4 잡코리아
                .content
                  | 1000대기업 핵심공채전략, 맞춤채용정보, 기업정보, 연봉정보 등
                  | 합격정보 제공.
          .column
            .card.platform
              .card-image
                figure.image.is-1by1
                  img(src='@/assets/jobplanet.jpg', alt='잡플래닛')
              .card-content
                .media
                  .media-content
                    p.title.is-4 잡플래닛
                .content
                  | 채용정보부터 직장인이 직접 남긴 기업리뷰, 연봉정보, 면접후기,
                  | 복지정보, 기업분석까지.
          .column
            .card.platform
              .card-image
                figure.image.is-1by1
                  img(src='@/assets/wanted.jpg', alt='원티드')
              .card-content
                .media
                  .media-content
                    p.title.is-4 원티드
                .content
                  | 6000개 기업, 100만 회원. 국내기업부터 글로벌기업까지, 지금
                  | 원티드에서 지원하세요.

      template(v-if="showStepNav" slot='navigation', slot-scope='{previous, next}')
        .has-text-right(style="display:flex;")
          b-button(outlined size="is-medium" icon-left='chevron-left', :disabled='previous.disabled', @click.prevent='previous.action')
            | 이전
          span(style="flex-grow: 1;")

          b-button(v-if="activeStep !== 2" outlined size="is-medium" icon-right='chevron-right', :disabled='next.disabled', @click.prevent='next.action')
            | 확인

  b-loading(:active.sync='isLoading', :can-cancel='false')
    //- b-icon(pack='fas', icon='cog', size='is-large', custom-class='fa-spin')
    .loading-icon
    h1.title.uploading 이력서를 업로드 중입니다.

</template>

<script>
export default {
  name: "home",
  data() {
    return {
      activeStep: 1,
      dropFiles: [],
      isLoading: false,
      write: true
    };
  },
  computed: {
    showStepNav() {
      console.log(this.activeStep, this.activeStep !== 0);
      return this.activeStep !== 0;
    }
  },
  methods: {
    onResumeInput(file) {
      console.log(file);
      this.openLoading();
    },
    goWrite() {
      this.write = true;
      this.activeStep = 1;
    },
    openLoading() {
      this.isLoading = true;
      this.write = true;
      setTimeout(() => {
        this.isLoading = false;
        this.activeStep = 1;
      }, 1 * 1000);
    }
  },
  watch: {
    activeStep(step) {
      if (step === 0 && this.write) {
        this.write = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding-bottom: 2rem;
}

.header {
  padding: 2rem;
  margin: 2rem;
}

.card img {
  height: 80px;
}

.p1 {
  padding: 1rem;
}

.step-header {
  margin: 2rem;
}

.card.write:hover {
  border-color: #00d1b2;
  background: rgba(0, 209, 178, 0.05);
}

.uploading {
  position: absolute;
  top: calc(50% + 5rem);
  left: 50%;
  transform: translate(-50%, -50%);
  color: #dbdbdb;
}
</style>

<style>
.upload,
.upload-draggable {
  width: 100%;
}

.loading-background {
  background: rgba(0, 0, 0, 0.5) !important;
}

.md .field {
  flex-grow: 0.4 !important;
}

.sm .field {
  flex-grow: 0.1 !important;
}

.xs .field {
  flex-grow: 0.01 !important;
}
</style>
