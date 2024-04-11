<template>
  <h1>Signup</h1>
  <form @submit.prevent="signUP">
    <input type="text" placeholder="Display Name" v-model="displayName" />
    <input type="email" placeholder="Enter Your Email" v-model="email" />
    <input
      type="password"
      placeholder="Enter Your Password"
      v-model="password"
    />
    <div class="error" v-if="error">{{error}}</div>
    <button>Signup</button>
  </form>
</template>

<script>
import useSignup from "@/composable/useSignup";
import { ref } from "vue";
export default {
  setup(props,context) {
    let displayName = ref("");
    let email = ref("");
    let password = ref("");

    let { error, createAccount } = useSignup();
    let signUP = async () => {
      let response = await createAccount(
        email.value,
        password.value,
        displayName.value
      );
      if (response) {
        context.emit("enterChatroom")
      }
    };
    return { displayName, email, password, signUP, error };
  },
};
</script>

<style></style>
