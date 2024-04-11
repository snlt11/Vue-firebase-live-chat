import { db } from "@/firebase/config";
import { ref } from "vue";

let useCollection = (collection) => {
  let error = ref(null);
  let addDoc = async (doc) => {
    try {
      await db.collection(collection).add(doc);
    } catch (e) {
      console.log(e.message);
      error.value = "Could not send the message";
    }
  };
  return { error, addDoc };
};

export default useCollection;
