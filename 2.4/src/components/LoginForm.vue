<template>
  <div class="lg:max-w-lg md:max-w-md max-w-xs mx-auto">
      <form class="bg-white shadow-md rounded px-8 py-6 mb-4" @sumbit.prevent="submitForm">
          <div class="mb-4">
              <label for="username">Username</label>
              <input class="form-control focus:shadow-outline" type="text" id="username">
          </div>
          <div class="mb-4">
              <label for="password">Password</label>
              <input class="form-control  focus:shadow-outline" type="password" id="password">
          </div>
          <div class="mb-4">
              <button class="btn btn-primary hover:bg-blue-700 sm:bg-red-600">Sign In</button>
          </div>
      </form>
  </div>
</template>

<style>
label {
    @apply block text-gray-700 text-sm font-bold mb-2;
}

.form-control {
    @apply shadow border rounded w-full py-2 px-3 text-gray-700;
}
</style>

<script>
export default {
  methods: {
    submitForm() {
    
    }
  }
}
</script>