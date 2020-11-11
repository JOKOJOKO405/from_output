<template>
  <div class="container">
    <v-card>
      <v-card-title>
        <h1 class="text-center font-weight-bold">login</h1>
      </v-card-title>
    </v-card>
    <v-form>
      <v-card-text>
        <v-text-field
          v-model="name"
          label="name"
          hide-details="auto"
          type="text"
          @blur="nameValidateMsg"
        ></v-text-field>
        <span class="text-caption" :class="{ warning: nameErrorMsg }">{{
          nameErrorMsg
        }}</span>
        <v-text-field
          v-model="email"
          label="e-mail"
          hide-details="auto"
          type="email"
          @blur="emailValidateMsg"
        ></v-text-field>
        <span class="text-caption">{{ emailErrorMsg }}</span>
        <v-text-field label="tel" hide-details="auto" type="tel"></v-text-field>
        <span class="text-caption">{{ telErrorMsg }}</span>
        <v-text-field
          label="comment"
          hide-details="auto"
          type="textarea"
        ></v-text-field>
        <span class="text-caption">{{ commentErrorMsg }}</span>
      </v-card-text>
      <v-card-actions>
        <v-btn v-model="btnDisabled" color="primary">SEND</v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      maxLength: 8,
      nameErrorMsg: '',
      emailErrorMsg: '',
      telErrorMsg: '',
      commentErrorMsg: '',
      btnDisabled: true,
    }
  },
  methods: {
    nameValidateMsg() {
      if (this.name === '') {
        this.nameErrorMsg = '必須入力項目です'
      } else {
        this.nameErrorMsg = ''
      }
    },
    emailValidateMsg() {
      const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/

      if (this.email === '') {
        this.emailErrorMsg = '必須入力項目です'
      } else if (!regex.test(this.email)) {
        this.emailErrorMsg = '書き方違うよ'
      } else {
        this.emailErrorMsg = ''
      }
    },
  },
}
</script>

<style scoped>
.warning {
  color: #fff;
  padding: 2px 10px;
  font-weight: bold;
  display: inline-block;
  margin-top: 8px;
}
</style>
