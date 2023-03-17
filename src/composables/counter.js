import {ref} from 'vue'
export default function useCounter(){
    const count = ref(0)
    function reset(){
        count.value = 0
    }
    function increment() {
        count.value++
    }
    function decrement(){
        count.value--
    } 
    function doubleIncrement(){
        count.value = count.value +2
    }
    function doubleDecerment(){
        count.value = count.value -2
    }
    return {count, reset, increment, decrement, doubleIncrement, doubleDecerment}
}