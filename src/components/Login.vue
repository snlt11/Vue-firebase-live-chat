<template>
  <h1>Login</h1>
  <form @submit.prevent="login">
    <input type="email" placeholder="Enter Your Email" v-model="email" />
    <input
      type="password"
      placeholder="Enter Your Password"
      v-model="password"
    />
    <div class="error" v-if="error">{{ error }}</div>
    <button>Login</button>
  </form>
</template>

<script>
import useLogin from "@/composable/useLogin";
import { ref } from "vue";
export default {
  setup(props, context) {
    const email = ref("");
    const password = ref("");

    let { error, signIn } = useLogin();
    const login = async () => {
      let response = await signIn(email.value, password.value);
      if (response) {
        context.emit("enterChatroom");
      }
    };
    return { email, password, login, error };
  },
};
</script>

<style></style>
