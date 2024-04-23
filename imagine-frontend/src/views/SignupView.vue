<template>
  <v-card class="mx-auto pa-12 mb-8 mt-6" width="448">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="[rules.required]"
        label="First name"
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        :rules="[rules.required]"
        label="Last name"
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="E-mail"
        :rules="[rules.required]"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="[rules.required, rules.min]"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          hint="At least 8 characters"
          label="Normal with hint text"
          name="input-10-1"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      show1: false,
      password: '',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ("The email and password you entered don't match")
      }
    }
  }
}
</script>

<style>

</style>