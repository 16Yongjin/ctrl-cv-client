<template lang="pug">
.container
  h1.title.has-text-centered 이력서 등록하기
  section.section
    b-steps(v-model='activeStep' :has-navigation="showStepNav")
      b-step-item(label='등록방법')
        resume-method(:onResumeInput='onResumeInput' :onWriteSelect='onWriteSelect')

      b-step-item(label='입력')
        div(v-if="write")
          resume-input
        div(v-else)
          resume-check

      b-step-item(label='플랫폼 선택')
        platform-card

      template(v-if="showStepNav" slot='navigation' slot-scope='{previous, next}')
        .has-text-right(style="display:flex;")
          b-button(outlined size="is-medium" icon-left='chevron-left' :disabled='previous.disabled' @click.prevent='previous.action') 이전
          span(style="flex-grow: 1;")
          span.subtitle(style="line-height: 2.5rem; padding-right:1.5rem;") 위 정보가 맞나요? 
          b-button(v-if="activeStep !== 2" outlined size="is-medium" icon-right='chevron-right' :disabled='next.disabled' @click.prevent='next.action')  {{ write ?  '다음' : '네!'}}

  b-loading(:active.sync='isLoading', :can-cancel='false')
    .loading-icon
    h1.title.uploading 이력서를 업로드 중입니다.

</template>

<script>
import ResumeMethod from "@/components/ResumeMethod.vue";
import ResumeInput from "@/components/ResumeInput.vue";
import ResumeCheck from "@/components/ResumeCheck.vue";
import PlatformCard from "@/components/PlatformCard.vue";

export default {
  name: "home",
  components: {
    ResumeMethod,
    ResumeInput,
    ResumeCheck,
    PlatformCard
  },
  data() {
    return {
      activeStep: 1,
      dropFiles: [],
      isLoading: false,
      write: false
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
    onWriteSelect() {
      this.write = true;
      this.activeStep = 1;
    },
    openLoading() {
      this.isLoading = true;
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

.uploading {
  position: absolute;
  top: calc(50% + 5rem);
  left: 50%;
  transform: translate(-50%, -50%);
  color: #dbdbdb;
}
</style>

<style>
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

.p1 {
  padding: 1rem;
}

.step-header {
  margin: 2rem;
}
</style>
