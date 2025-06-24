<template>
<h1>Signup</h1>
<div>
    <!-- copy  below into phone number auth -->
    <input v-model="email" placeholder="Email" type="email" />
    <input v-model="password" placeholder="Password" type="password" />
    <button @click="signUp">Sign Up</button>
</div>
</template>

<script setup> 
/* Javascript */
import { ref } from 'vue';
import { auth } from '../firebase'; // or axios for custom backend
import { createUserWithEmailAndPassword } from 'firebase/auth'; 

const email = ref('');
const password = ref('');
const phoneNumber = ref('');

const signUp = async () => {
    try {
        await createUserWithEmailAndPassword(auth, email.value, password.value);
        console.log('Signed up!');
    } catch (error) {
        alert(error.message);
    }
};
</script>

<style></style>