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
import getUser from "@/composable/getUser";
import { timestamp } from "@/firebase/config";
import useCollection from "@/composable/useCollection";
export default {
  setup(props) {
    let message = ref("");
    let { user } = getUser();
    let { error, addDoc } = useCollection("messages");
    let handleEnter = async () => {
      let chat = {
        message: message.value,
        name: user.value.displayName,
        created_at: timestamp,
      };
      await addDoc(chat);
      message.value = "";
      // console.log(chat);
    };
    return { message, handleEnter };
  },
};
</script>

<style>
form {
  /* margin: 10px; */
}
textarea {
  width: 100%;
  max-width: 100%;
  margin-bottom: 6px;
  padding: 10px;
  box-sizing: border-box;
  border: 0;
  border-radius: 0px 0px 20px 20px;
  font-family: inherit;
  outline: none;
  resize: none;
}
</style>
