<template>
  <form>
    <textarea
      placeholder="Text message here and press enter to send"
      v-model="message"
      @keypress.enter="handleEnter"
    >
    </textarea>
  </form>
</template>

<script>
import { ref } from "vue";
import getUser from '@/composable/getUser';
import { timestamp } from "@/firebase/config";
export default {
  setup(props) {
    let message = ref("");
    let {user} = getUser();
    let handleEnter=()=>{
        let chat = {
            message: message.value,
            name : user.value.displayName,
            created_at : timestamp
        }
        console.log(chat);
        message.value = "";
    }
    return { message ,handleEnter};
  },
};
</script>

<style>
form{
    margin: 10px;
}
textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}

</style>
