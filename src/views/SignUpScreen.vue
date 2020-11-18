<template>
  <v-card>
    <v-col align="center">
      <h1>SING UP</h1>
      <div>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" md="4">
                <v-text-field
                  type="text"
                  placeholder="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  label="email"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field
                  type="text"
                  placeholder="passwod"
                  v-model="password"
                  :rules="nameRules"
                  label="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </div>
      <v-btn color="primary" elevation="2" large @click="createUserAccount">Sing in Now!!</v-btn>
    </v-col>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import firebase from '@/firebase';

export type DataType = {
  valid: boolean;
  email: string;
  password: string;
  nameRules: Array<object>;
  emailRules: Array<object>;
}

export default Vue.extend({
  name: 'SignUpScreen',
  components: {
  },
  data(): DataType {
    return {
      valid: false,
      email: '',
      password: '',
      nameRules: [
        (v: string) => !!v || 'Name is required',
        (v: string) => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      emailRules: [
        (v: string) => !!v || 'E-mail is required',
        (v: string) => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  methods: {
    async createUserAccount() {
      try {
        await firebase.auth().createUserWithEmailAndPassword(this.email, this.password);
        alert('Create Account');
      } catch (e) {
        alert(`Error!:${e}`);
        console.error('Account Register Error', e.message);
      }
    },
  },
});
</script>
