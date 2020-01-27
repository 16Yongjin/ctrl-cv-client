<template lang="pug">
div
  h1.title.is-4.has-text-centered 플랫폼 선택
  section
    .columns
      .column(v-for="platform in platforms" :key="platform.name")
        .card.platform(@click="onPlatformSelect(platform.name)")
          .is-overlay(:class='{ accepted: platformAccounts[platform.name].accepted }') 
            .title.is-size-1
              span.center ✔
          .card-image
            figure.image.is-1by1
              img(:src='require(`@/assets/${platform.img}`)', :alt='platform.name')
          .card-content
            .media
              p.title.is-4 {{ platform.name }}
            .content {{ platform.description }}

  .mt-2(style="display:flex;")
    b-button.is-size-5-desktop( @click.prevent='backStep' outlined icon-left='chevron-left') 이전
    span(style="flex-grow: 1;")
    b-button.is-success.is-size-5-desktop(@click='registerResume' :disabled="!anyPlatfromSelected" light icon-right='chevron-right') 이력서 등록
      
  b-modal(v-if="selectedName" :active.sync='modalActive' has-modal-card trap-focus aria-role='dialog' aria-modal)
    form(action='')
      .modal-card(style='width: auto')
        b-tabs(v-model='activeTab')
          b-tab-item(label='계정 입력')
            header.modal-card-head
              p.modal-card-title {{ selectedName }} 계정 입력
            section.modal-card-body
              b-field(label='아이디')
                b-input(v-model="platformAccounts[selectedName].id" :placeholder='`${selectedName} 아이디`' required)
              b-field(label='비밀번호')
                b-input(v-model="platformAccounts[selectedName].pw" type='password' password-reveal :placeholder='`${selectedName} 비밀번호`' required)
            footer.modal-card-foot.has-text-right
              span(style="flex-grow: 1")
              button.button(type='button', @click='closeModal') 닫기
              button.button.is-primary(@click="proceedModal" :disabled="!validAccount") 확인

          b-tab-item(label='개인정보처리 동의')
            header.modal-card-head
              p.modal-card-title 개인정보처리 동의
            section.modal-card-body
              p 개인정보처리에 동의합니다.
            footer.modal-card-foot.has-text-right
              span(style="flex-grow: 1")
              button.button(type='button', @click='closeModal') 취소
              button.button.is-primary(@click="finishModal") 확인

  b-loading(:active.sync='isLoading', :can-cancel='false')
    .loading-icon
    h1.title.uploading {{ registeringText }}
</template>

<script>
const delay = time => new Promise(r => setTimeout(r, time));

export default {
  props: ["backStep"],
  data() {
    return {
      selectedName: "",
      activeTab: 0,
      platformAccounts: {
        사람인: { id: "test", pw: "", accepted: false },
        잡코리아: { id: "", pw: "", accepted: false },
        잡플래닛: { id: "", pw: "", accepted: false },
        원티드: { id: "", pw: "", accepted: false }
      },
      modalActive: false,
      isLoading: false,
      registeringText: "",
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
            "채용정보부터 직장인이 직접 남긴 기업리뷰, 연봉정보, 면접후기, 복지정보, 기업분석"
        },
        {
          name: "원티드",
          img: "wanted.jpg",
          description:
            "6000개 기업, 100만 회원. 국내기업부터 글로벌기업까지, 지금 원티드에서 지원하세요"
        }
      ]
    };
  },
  computed: {
    validAccount() {
      if (!this.selectedName) return false;
      const { id, pw } = this.platformAccounts[this.selectedName];
      console.log(!!(id && pw));
      return !!id && !!pw;
    },
    anyPlatfromSelected() {
      return Object.values(this.platformAccounts).some(i => i.accepted);
    }
  },
  methods: {
    onPlatformSelect(name) {
      console.log("name", name);
      this.selectedName = name;
      this.modalActive = true;
      this.activeTab = 0;
    },
    closeModal() {
      this.selectedName = "";
      this.modalActive = false;
      this.activeTab = 0;
    },
    proceedModal() {
      if (!this.validAccount) return;

      this.activeTab = 1;
    },
    finishModal() {
      this.platformAccounts[this.selectedName].accepted = true;

      this.closeModal();
    },
    async registerResume() {
      const registeringTexts = [
        "이력서를 서버에 업로드 중..",
        "채용플랫폼 로그인 중..",
        "이력서에 정보 입력 중..",
        "이력서 등록 중.."
      ];
      this.isLoading = true;

      for (let i = 0; i < registeringTexts.length; i++) {
        this.registeringText = registeringTexts[i];
        await delay(1000);
      }

      this.isLoading = false;

      this.$router.push("finish");
    }
  },
  watch: {
    modalActive(v) {
      if (!v) this.selectedName = "";
    }
  }
};
</script>

<style scoped>
.card.platform {
  transition: all 0.2s ease-out;
}

.card.platform:not(.accepted):hover {
  box-shadow: 0px 8px 16px rgba(38, 38, 38, 0.2);
  transform: scale(1.05);
}

.is-overlay {
  display: none;
}

.is-overlay.accepted {
  display: block;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9;
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
.modal-card .b-tabs .tabs {
  display: none;
}
</style>
