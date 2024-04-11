<template>
  <div class="chat-window">
    <div class="messages" v-for="m in messages" :key="m.id">
        <div class="single">
            <span class="created-at">{{m.created_at}}</span>
            <span class="name">{{m.name}}</span>
            <span class="message">{{m.message}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/config'
import { ref } from 'vue'
export default {
    setup(props) {
        let messages = ref([]);
        db.collection('messages').orderBy('created_at').onSnapshot((snap)=>{
            let results = [];
            snap.docs.forEach((doc) => {
                let document = {...doc.data(),id: doc.id}
                results.push(document);
            });
            messages.value = results;
        })
        return {messages}
    }
}
</script>

<style>
.chat-window{
    background: #fafafa;
    padding: 30px 20px;
}
.single{
    margin: 18px 0;
}
.created-at{
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name{
    font-weight: bold;
    margin-right: 6px;
}
.message{
    max-height: 400px;
    overflow: auto;
}

</style>