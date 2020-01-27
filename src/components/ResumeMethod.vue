<template lang="pug">
.step-header
  h1.title.has-text-centered 이력서 등록 방법 선택
  .columns
    .column.is-3.is-hidden-touch
    .column.is-3
      .card
        section
          b-field
            b-upload(drag-drop @input="onResumeInput")
              section.p1
                .content.has-text-centered
                  img(src="@/assets/upload.png")
                  p 이력서를 드롭하거나 
                  p 여기를 클릭하세요.
    .column.is-3
      .card.write(@click="onWriteSelect")
        section
          .content.has-text-centered.p1
            img(src="@/assets/write.png")
        .card-content.has-text-centered
          .content.subtitle 이력서 직접입력
</template>

<script>
export default {
  props: ["onResumeInput", "onWriteSelect"]
};
</script>

<style scoped>
.card img {
  height: 80px;
}

.card.write:hover {
  border-color: #00d1b2;
  background: rgba(0, 209, 178, 0.05);
}
</style>

<style>
.upload,
.upload-draggable {
  width: 100%;
}
</style>
