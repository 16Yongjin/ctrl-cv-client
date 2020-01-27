<template lang="pug">
.container
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
        platform-card(:backStep="backStep")

      template(v-if="showStepNav" slot='navigation' slot-scope='{previous, next}')
        div(style="display:flex;")
          b-button.is-size-5-desktop(outlined icon-left='chevron-left' :disabled='previous.disabled' @click.prevent='previous.action') 이전
          span(style="flex-grow: 1;")
          span.check-text.is-size-5-desktop(v-if="checking") 위 정보가 맞나요? 
          b-button.is-success.is-size-5-desktop(light icon-right='chevron-right' :disabled='next.disabled' @click.prevent='next.action')  {{ write ?  '다음' : '네!'}}

        .has-text-right.mt-1(v-if="checking")
          span.check-text.is-size-5-desktop 아니라면,
          b-button.is-size-5-desktop(@click="onWriteSelect") 수정하기


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
      activeStep: 0,
      dropFiles: [],
      isLoading: false,
      write: false
    };
  },
  computed: {
    showStepNav() {
      return this.activeStep === 1;
    },
    checking() {
      return !this.write && this.activeStep === 1;
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
    },
    backStep() {
      this.activeStep = Math.max(this.activeStep - 1, 0);
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

.check-text {
  line-height: 2.5rem;
  margin-right: 1rem;
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

.mt-1 {
  margin-top: 1rem;
}

.mt-2 {
  margin-top: 2rem;
}

.rel {
  position: relative;
}

.w100 {
  width: 100%;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.step-header {
  margin: 2rem 0;
}

.step-section {
  padding: 3rem 1.5rem;
}

@media only screen and (max-width: 768px) {
  .step-section {
    padding: 0;
  }
}
</style>
