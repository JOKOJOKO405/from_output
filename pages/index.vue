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
        ></v-text-field>
        <span class="text-caption">エラーメッセージ</span>
        <v-text-field
          label="e-mail"
          hide-details="auto"
          type="email"
        ></v-text-field>
        <v-text-field label="tel" hide-details="auto" type="tel"></v-text-field>
        <v-text-field
          label="comment"
          hide-details="auto"
          type="textarea"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">SEND </v-btn>
      </v-card-actions>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.name,
    }
  },
  computed: {
    maxLength() {
      return 0
    },
  },
}
</script>
