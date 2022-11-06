export const state = () => ({
    list: []
    })
    
    export const mutations = {
    add(state, text) {
        state.list.push({
        text
        })
    },
    remove(state, { todo }) {
        state.list.splice(state.list.indexOf(todo), 1)
    },
    retrieve(stat, {todo}) {
        return state.list
    }
    }