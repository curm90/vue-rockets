<template lang="html">
  <section>
    <new-rocket-form></new-rocket-form>
    <rocket-list :rockets="rockets"></rocket-list>
  </section>
</template>

<script>
import NewRocketForm from "../components/NewRocketForm";
import RocketList from "../components/RocketList";
import API from "../lib/api";

export default {
  name: "rockets",
  components: {
    NewRocketForm,
    RocketList
  },
  data: () => ({
    rockets: []
  }),
  async mounted() {
    this.rockets = await API.getRockets();
  }
};
</script>

<style scoped></style>
