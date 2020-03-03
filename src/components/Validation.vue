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
          @blur="$v.email.$touch()"
          v-model="email"
        >
      </div>
      <pre>
        {{ $v.email }}
      </pre>
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