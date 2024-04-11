<template>
  <div class="chat-window">
    <div class="messages" ref="msgBox">
      <div class="single" v-for="m in formattedMessages" :key="m.id">
        <span class="created-at">{{ m.created_at }}</span>
        <span class="name">{{ m.name }} : </span>
        <span class="message">{{ m.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase/config";
import { computed, onUpdated, ref } from "vue";
import { formatDistanceToNow } from "date-fns";
export default {
  setup(props) {
    let messages = ref([]);
    let msgBox = ref(null);
    onUpdated(() => {
      msgBox.value.scrollTop = msgBox.value.scrollHeight;
    });
    let formattedMessages = computed(() => {
      return messages.value.map((msg) => {
        let formatTime = formatDistanceToNow(msg.created_at.toDate());
        return { ...msg, created_at: formatTime };
      });
    });
    db.collection("messages")
      .orderBy("created_at")
      .onSnapshot((snap) => {
        let results = [];
        snap.docs.forEach((doc) => {
          let document = { ...doc.data(), id: doc.id };
          doc.data().created_at && results.push(document);
        });
        messages.value = results;
      });
    return { messages, formattedMessages, msgBox };
  },
};
</script>

<style>
.chat-window {
  background: #fafafa;
  max-height: 300px;
  padding: 30px 20px;
  overflow: scroll;
  overflow-x: hidden;
}
.single {
  margin: 18px 0;
}
.created-at {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 4px;
}
.name {
  font-weight: bold;
  margin-right: 6px;
}
.message {
  max-height: 400px;
  overflow: auto;
}
</style>
