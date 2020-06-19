<template>
<div class="chat container">
    <h2 class="center teal-text">Ninja Chat</h2>
    <nav>
        <div class="nav-wrapper teal">
            <a href="#!" class="brand-logo"><i class="material-icons"></i>{{ name }}</a>
            <ul class="right hide-on-med-and-down">
                <li><a href="sass.html"><i class="material-icons">search</i></a></li>
                <li><a href="collapsible.html"><i class="material-icons">refresh</i></a></li>
                <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li>
            </ul>
        </div>
    </nav>
    <div class="card">
        <div class="card-content">
            <ul class="messages" v-chat-scroll>
                <li v-for="message in messages" :key="message.id">
                    <span class="teal-text">{{ message.name }}</span><br>
                    <span class="grey-text text-darken-3 content">{{ message.content }}</span>
                    <span class="grey-text time">{{ message.timestamp }}</span>
                </li>
            </ul>
        </div>
        <div class="card-action">
            <NewMessage :name="name"/>
        </div>
    </div>
</div>
    
</template>

<script>
import NewMessage from '@/components/NewMessage'
import db from '@/firebase/init'
import moment from 'moment'
export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    },
    data(){
        return {
            messages: []
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp')
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
}
</script>
<style>
.chat h2{
    font-size: 2.6em;
    margin-bottom: 40px;
}
.chat span {
    font-size: 1.4em;

}
.chat .time {
    display: block;
    font-size: 0.8em;
}
.chat .content {
    font-size: 1em;
}
.messages {
    max-height: 300px;
    overflow: auto;
}

</style>