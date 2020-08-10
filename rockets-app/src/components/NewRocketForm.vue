<template lang="html">
  <section>
    <button @click="showForm = !showForm" type="button" class="btn btn-danger">Show Form</button>
    <form v-if="showForm" @submit.prevent="onAddRocket">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          v-model="rocket.name"
          class="form-control"
          type="text"
          name="name"
          id="name"
          value=""
        />
      </div>
      <div class="form-group">
        <label for="country">Country</label>
        <input
          v-model="rocket.country"
          class="form-control"
          type="text"
          name="country"
          id="country"
          value=""
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea
          v-model="rocket.description"
          class="form-control"
          type="text"
          name="description"
          id="description"
          value=""
        ></textarea>
      </div>
      <div class="form-group">
        <label for="image">Image</label>
        <input
          v-model="rocket.image"
          class="form-control"
          type="text"
          name="image"
          id="image"
          value=""
        />
      </div>
      <button type="submit" class="btn btn-success">Add Rocket</button>
    </form>
  </section>
</template>

<script>
function getEmptyRocket() {
  return {
    name: "",
    country: "",
    description: "",
    image: ""
  };
}

export default {
  props: ["addRocket"],
  data: () => ({
    showForm: false,
    rocket: getEmptyRocket()
  }),
  methods: {
    onAddRocket() {
      this.addRocket(this.rocket);
      this.rocket = getEmptyRocket();
      this.showForm = false;
    }
  }
};
</script>

<style lang="css" scoped></style>
