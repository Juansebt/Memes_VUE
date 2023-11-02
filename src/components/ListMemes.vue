<template>
  <div>
    <h1 class="text-center mt-3">{{title}}</h1>
  </div>
  <div class="total-show">
    <select class="form-select" @change="changeTotalShow">
        <option value="" selected>Todos</option>
        <option value="5">5 memes</option>
        <option value="25">25 memes</option>
        <option value="50">50 memes</option>
    </select>
  </div>
  <div class="row">
    <template v-for="meme in memes" :key="meme.id">
        <Meme :meme="meme"></Meme>
    </template>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import Meme from './Meme.vue';

export default {
    components: {
        Meme,
    },
    setup() {
        const store = useStore();
        const memes = computed(() => store.state.memes)

        onMounted(() => {
            store.dispatch("getMemes");
        });

        const changeTotalShow = (e) => {
            store.dispatch("getMemes", {
                total: e.target.value,
            })
        };

        return {
            title: store.state.titleApp,
            memes,
            changeTotalShow,
        };
    },
};
</script>

<style>
.total-show {
    display: flex;
    width: 165px;
}
</style>