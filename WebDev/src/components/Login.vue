<script setup>
import { ref } from 'vue';
import { auth } from '../firebase'; // or axios for custom backend
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';

const email = ref('');
const password = ref('');

const login = async () => {
    try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        console.log('Logged in!');
    } catch (error) {
        alert(error.message);
    }
};

async function addTask() {
  if (newTask.value.trim()) {
    await addDoc(collection(db, 'tasks'), {
      text: newTask.value,
      done: false,
      userId: auth.currentUser.uid // Link task to user
    });
    newTask.value = '';
  }
}
</script>

<template>
    <div>
        <input v-model="email" placeholder="Email" type="email" />
        <input v-model="password" placeholder="Password" type="password" />
        <button @click="login">Login</button>
    </div>
</template>