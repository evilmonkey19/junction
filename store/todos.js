export const state = () => ({
string: []
})

export const mutations = {
add(state, text) {
    state.string = text
},
remove(state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
},
retrieve(stat, {todo}) {
    return state.list
}
}
