<template>
  <b-container fluid class="form-container">
    <div v-if="messageReceived" class="success-message">
      <h3>Successfully checked in!</h3>
      <b-row :key="messageReceived.id" class="results">
        <b-col>{{ messageReceived.firstName }} {{ messageReceived.lastName }}</b-col>
        <b-col>{{ messageReceived.email }}</b-col>
        <b-col>{{ messageReceived.phoneNumber }}</b-col>
      </b-row>
    </div>
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
        <b-button @click="sendForm">
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
      phoneNumber: '',
      messageReceived: '',
      timeoutId: false
    }
  },
  computed: {
    formData () {
      return this.$store.state.formData.dataCollection
    }
  },
  methods: {
    async sendForm (form) {
      const preparedFormData = {
        id: Date.now(),
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber
      }

      try {
        const message = await this.$axios.$post('https://jsonplaceholder.typicode.com/users', preparedFormData)
        console.log(message)

        if (this.timeoutId) {
          this.messageReceived = false
          clearTimeout(this.timeoutId)
        }

        this.messageReceived = message

        this.timeoutId = setTimeout(() => {
          this.messageReceived = false
        }, 5000)
      } catch (e) {
        // console.error(e)
      }
    },
    ...mapMutations({
      toggle: 'formData/toggle'
    })
  }
}
</script>
