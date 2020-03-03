<template>
  <div>
    <h1 class="pt-5" style="color:blue">Hello Validation!!!</h1>
    <form class="pt-3">
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email" 
          class="form-control"
          :class="{'is-invalid' : $v.email.$error}"
          @blur="$v.email.$touch()"
          v-model="email"
        >
        <div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
        <div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
      </div>
    </form>
  </div>
</template>

<script>

  import { required, email } from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        email: ''   
      }
    },
    validations: {
      email: {
        required,
        email
      }
    }
  }
</script>

<style scoped>
 
</style>