import { defineStore } from 'pinia'
import axios from 'axios'
const useListStore = defineStore('listStor', {
    state() {
        return {
            list: []
        }
    },
    actions: {
       async loadData() {
            const result = await axios.get('http://localhost:9000/list')
            this.list = result.data.data
        }
    },
    getters: {
        filteredList() {
            return (amount) => {
                return this.list.slice(0, amount)
            }
        }
    }
})
export default useListStore