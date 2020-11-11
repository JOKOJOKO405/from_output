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
          v-model="name.name"
          label="name"
          hide-details="auto"
          type="text"
          @blur="nameValidateMsg"
        ></v-text-field>
        <span
          class="text-caption"
          :class="{ warning: name.isWarning, success: name.isSuccess }"
          >{{ name.message }}</span
        >
        <v-text-field
          v-model="email.email"
          label="e-mail"
          hide-details="auto"
          type="email"
          @blur="emailValidateMsg"
        ></v-text-field>
        <span
          class="text-caption"
          :class="{ warning: email.isWarning, success: email.isSuccess }"
          >{{ email.message }}</span
        >
        <v-text-field
          v-model="tel.tel"
          label="tel"
          hide-details="auto"
          type="text"
          @keyup="telValidateMsg"
        ></v-text-field>
        <span
          class="text-caption"
          :class="{ warning: tel.isWarning, success: tel.isSuccess }"
          >{{ tel.message }}</span
        >
        <v-text-field
          label="comment"
          hide-details="auto"
          type="textarea"
        ></v-text-field>
        <span class="text-caption">{{ commentErrorMsg }}</span>
      </v-card-text>
      <v-card-actions>
        <v-btn v-model="btnDisabled" color="primary" @click="onSubmit"
          >SEND</v-btn
        >
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: {
        name: '',
        isWarning: false,
        isSuccess: false,
        message: '',
      },
      email: {
        email: '',
        isWarning: false,
        isSuccess: false,
        message: '',
      },
      tel: {
        tel: '',
        isWarning: false,
        isSuccess: false,
        message: '',
      },
      maxLength: 150,
      commentErrorMsg: '',
      btnDisabled: true,
    }
  },
  computed: {
    isValidateError() {
      return (
        this.name.message ||
        this.email.message ||
        this.telErrorMsg ||
        this.commentError
      )
    },
  },
  methods: {
    nameValidateMsg() {
      if (this.name.name === '') {
        this.name.message = '必須入力項目です'
        this.name.isWarning = true
        this.name.isSuccess = false
      } else {
        this.name.message = 'OK'
        this.name.isSuccess = true
        this.name.isWarning = false
      }
    },
    emailValidateMsg() {
      const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/

      if (this.email.email === '') {
        this.email.message = '必須入力項目です'
        this.email.isWarning = true
        this.email.isSuccess = false
      } else if (!regex.test(this.email.email)) {
        this.email.message = '書き方違うよ'
        this.email.isWarning = true
        this.email.isSuccess = false
      } else {
        this.email.message = 'OK'
        this.email.isSuccess = true
        this.email.isWarning = false
      }
    },
    telValidateMsg() {
      const regex = /^0\d{9,10}$/
      const num = this.tel.tel

      if (!regex.test(num)) {
        this.tel.message = '書き方違うよ'
        this.tel.isWarning = true
        this.tel.isSuccess = false
      } else {
        this.tel.message = ''
        this.tel.isWarning = false
      }
    },
    onSubmit() {
      if (this.isValidateError) return

      this.nameValidateMsg()
      this.emailValidateMsg()
    },
  },
}
</script>

<style scoped>
.warning,
.success {
  color: #fff;
  padding: 2px 10px;
  font-weight: bold;
  display: inline-block;
  margin: 8px 0 20px;
}
</style>
