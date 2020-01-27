import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const monthParser = yymm => {
  const yy = yymm.slice(0, 4);
  const mm = yymm.slice(4, 6);
  return new Date(yy, mm - 1);
};

export default new Vuex.Store({
  state: {
    resume: {
      person: {
        name: "Robert Kill",
        email: "robert@gmail.com",
        phoneNumber: "010-1234-5678"
      },
      educations: [
        {
          educationLevel: "대학교(4년)",
          edcationDegree: "",
          schoolName: "한국대학교", // 학교 이름
          educationState: "졸업예정",
          majorCategory: "컴퓨터", // 주전공 계열
          majorName: "컴퓨터공학과", // 주전공 이름
          hasMinor: true, // 부/이중/복수 전공 여부
          minorType: "이중전공", // 부전공 종류
          minorCategory: "경영", // 부전공 계열
          minorName: "경역학과", // 부전공 이름
          schoolEntrance: monthParser("201603"), // 입학일자(YYYYMM)
          schoolGraduation: monthParser("202001"), // 졸업일자(YYYYMM)
          dayOrNight: "주간", // 주간/야간 선택
          gpa: "3.5", // 학점
          gpaScale: "4.5" // 기준학점
        }
      ]
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
