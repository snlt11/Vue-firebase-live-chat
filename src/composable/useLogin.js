import { ref } from "vue";
import { auth } from "@/firebase/config";

const error = ref(null);
let signIn = async (email, password) => {
  try {
    let response = await auth.signInWithEmailAndPassword(email, password);
    if (!response) {
      throw new Error("Authentication failed");
    }
    return response;
  } catch (e) {
    error.value = e.message;
  }
};
let useLogin = () => {
  return { error, signIn };
};
export default useLogin;
