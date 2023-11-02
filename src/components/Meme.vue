<template>
  <div class="col-2 d-flex justify-content-center meme">
    <div class="card my-3" style="width: 18rem;">
        <img :src="meme.url" class="card-img-top" :alt="meme.name">
        <div class="card-body">
            <p class="card-text text-center">{{ meme.name }}</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        meme: Object,
    },
};
</script>

<style>

</style>