<template>
  <div class="container">
    <Navbar></Navbar>
    <ChatWindow></ChatWindow>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow.vue'
import NewChatForm from "../components/NewChatForm.vue";
import { watch } from "vue";
import Navbar from "../components/Navbar.vue";
import getUser from "@/composable/getUser";
import { useRouter } from "vue-router";
export default {
  components: {
    ChatWindow,
    NewChatForm,
    Navbar,
  },
  setup() {
    let { user } = getUser();
    let router = useRouter();

    watch(user, () => {
      if (!user.value) {
        router.push("/");
      }
    });
  },
};
</script>

<style></style>
