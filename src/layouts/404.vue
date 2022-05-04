<script setup lang="ts">
  const router = useRouter();
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div text-4xl>
      <div i-carbon-warning inline-block />
    </div>
    <RouterView />
    <div>
      <button btn text-sm m="3 t8" @click="router.back()">back</button>
    </div>
  </main>
</template>
