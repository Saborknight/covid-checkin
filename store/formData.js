export const state = () => ({
  dataCollection: []
})

export const mutations = {
  add (state, inputData) {
    state.dataCollection.push({
      inputData,
      done: false
    })
  },
  remove (state, { formData }) {
    state.dataCollection.splice(state.dataCollection.indexOf(formData), 1)
  },
  toggle (state, formData) {
    formData.done = !formData.done
  }
}
