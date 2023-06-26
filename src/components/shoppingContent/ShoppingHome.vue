<script setup lang="ts"></script>

<template>
  <div class="content1 hide">
    <div class="box1 box">
      <div class="image">
        <div class="text">
          <div class="text-2xl">Not Of This World</div>
        </div>
      </div>
    </div>
    <div class="box2 box">
      <div class="image">
        <div class="text">
          <div class="text-2xl">Real World</div>
        </div>
      </div>
    </div>
    <div class="box3 box">
      <div class="image"></div>
    </div>
  </div>
</template>
<style scoped>
.content1 {
  /* display: grid; */
  width: 100%;
  height: 100%;
}
.box {
  width: 100%;
  height: 100%;
}
.image {
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  background-position: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box1 >.image> .text {
  color: #fff;
}
.box1 {
  height: 50%;
}
.box1 > .image {
  background-image: url('@/assets/image/small.jpg');
  height: 100%;
}
.box2 > .image {
  background-image: url('@/assets/image/visuel_952213.jpg');
}
.box3 > .image {
  background-image: url('@/assets/image/column-15.jpg');
  background-size: contain;
}
</style>
