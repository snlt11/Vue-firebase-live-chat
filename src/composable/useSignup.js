import { ref } from "vue";
import { auth } from "@/firebase/config";

const error = ref(null);
let createAccount = async (email, password, displayName) => {
  try {
    let response = await auth.createUserWithEmailAndPassword(email, password);
    if (!response) {
      throw new Error("Could not create user");
    }
    response.user.updateProfile({ displayName });
    return response;
  } catch (e) {
    error.value = e.message;
  }
};
let useSignup = () => {
  return { error, createAccount };
};
export default useSignup;
