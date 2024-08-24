import { reactive } from "vue";

export const store = reactive({
    data: JSON.parse(localStorage.getItem("data"))
})