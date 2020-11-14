export const state = () => ({
  user: null,
})

export const mutations = {
  insert(state, payload) {
    state.user = {
      name: payload.name,
      email: payload.email,
      tel: payload.tel,
      comment: payload.comment,
    }
  },
}

export const actions = {
  insert(context, payload) {
    context.commit('insert', payload)
  },
}
