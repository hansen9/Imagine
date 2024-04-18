<template>
  <v-sheet class="mx-auto" width="300">
    <v-form @submit.prevent>
      <v-text-field
        v-model="firstName"
        :rules="rules"
        label="First name"
      ></v-text-field>
      <v-text-field
        v-model="lastName"
        :rules="rules"
        label="Last name"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        hide-details
        required
        ></v-text-field>
      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="password"
        hide-details
        required
        ></v-text-field>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script>
export default {

}
</script>

<style>

</style>