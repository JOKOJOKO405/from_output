<template>
  <div class="container">
    <v-card>
      <v-card-title>
        <h1 class="text-center font-weight-bold">login</h1>
      </v-card-title>
    </v-card>
    <v-form ref="form">
      <v-card-text>
        <v-text-field
          v-model="name.name"
          label="name"
          hide-details="auto"
          type="text"
          :rules="name.rules"
          :counter="20"
        ></v-text-field>
        <v-text-field
          v-model="email.email"
          label="e-mail"
          hide-details="auto"
          type="email"
          :rules="email.rules"
        ></v-text-field>
        <v-text-field
          v-model="tel.tel"
          label="tel"
          hide-details="auto"
          type="text"
          :rules="tel.rules"
        ></v-text-field>
        <v-text-field
          v-model="comment.comment"
          label="comment"
          hide-details="auto"
          type="textarea"
          :counter="300"
          :rules="comment.rules"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn :disabled="btnDisabled" color="primary" @click="onSubmit"
          >SEND</v-btn
        >
        <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
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
        rules: [
          (val) => !!val || '入力必須項目です',
          (val) => {
            const max = 20
            return (
              (val && val.length <= max) || `${max}文字以内で入力してください`
            )
          },
        ],
      },
      email: {
        email: '',
        rules: [
          (val) => !!val || '入力必須項目です',
          (val) => {
            const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
            return regex.test(val) || '入力が正しくありません'
          },
        ],
      },
      tel: {
        tel: '',
        rules: [
          (val) => {
            const regex = /^0\d{9,10}$/
            return regex.test(val) || '入力が正しくありません'
          },
        ],
      },
      comment: {
        comment: '',
        rules: [
          (val) => {
            const max = 300
            return (
              (val && val.length <= max) || `${max}文字以内で入力してください`
            )
          },
        ],
      },
      btnDisabled: false,
    }
  },
  methods: {
    onSubmit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('insert', {
          name: this.name.name,
          email: this.email.email,
          tel: this.tel.tel,
          comment: this.comment.comment,
        })
        this.$router.push('/success')
      } else {
        this.btnDisabled = true
        setTimeout(() => {
          this.btnDisabled = false
        }, 2000)
      }
    },
    reset() {
      this.$refs.form.reset()
    },
  },
}
</script>
