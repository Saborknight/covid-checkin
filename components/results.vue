<template>
  <b-container fluid>
    <b-row v-for="entry in dataCollection" :key="entry.id" class="results">
      <b-col>{{ entry.firstName }} {{ entry.lastName }}</b-col>
      <b-col>{{ entry.email }}</b-col>
      <b-col>{{ entry.phoneNumber }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    dataCollection () {
      return this.$store.state.formData.dataCollection.map(({ inputData }) => inputData)
    }
  }
}
</script>
