<template>
  <div class="card column-4 m-3" style="width: 18rem;">
    <div class="rocket-image-container">
      <img
        :src="rocket.image"
        class="card-img-top rocket-image"
        :alt="rocket.name"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ rocket.name }}</h5>
      <p class="card-text">{{ rocket.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rocket'],
};
</script>

<style>
.rocket-image-container {
  height: 400px;
}

.rocket-image {
  height: 100%;
  object-fit: fill;
}
</style>
