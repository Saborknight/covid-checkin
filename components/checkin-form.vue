<template>
  <b-container fluid>
    <b-form-row>
      <b-col sm="3">
        <label for="first-name">First Name</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          id="first-name"
          v-model="firstName"
          type="text"
          placeholder="First Name"
        />
      </b-col>
    </b-form-row>
    <b-form-row>
      <b-col sm="3">
        <label for="last-name">Last Name</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          id="last-name"
          v-model="lastName"
          type="text"
          placeholder="Last Name"
        />
      </b-col>
    </b-form-row>
    <b-form-row>
      <b-col sm="3">
        <label for="email">E-mail</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          id="email"
          v-model="email"
          type="text"
          placeholder="E-mail"
        />
      </b-col>
    </b-form-row>
    <b-form-row>
      <b-col sm="3">
        <label for="phone-number">Phone Number</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          id="phone-number"
          v-model="phoneNumber"
          type="text"
          placeholder="Phone Number"
        />
      </b-col>
    </b-form-row>
    <b-row align-h="end" class="p-3">
      <b-col cols="*">
        <b-button @click="submit">
          Check in
        </b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: ''
    }
  },
  computed: {
    formData () {
      return this.$store.state.formData.dataCollection
    }
  },
  methods: {
    submit () {
      const preparedFormData = {
        id: Math.floor(Math.random() * (999 - 100) + 100),
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber
      }
      console.log('submitted', preparedFormData)
      this.$store.commit('formData/add', preparedFormData)
    },
    ...mapMutations({
      toggle: 'formData/toggle'
    })
  }
}
</script>
