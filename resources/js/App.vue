<template>
  <div>
    <header>
      <Navbar />
    </header>
    <main>
      <vue-loading v-show="isLoading" />
      <div class="container" v-show="!isLoading">
        <message />
        <router-view />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Message from "./components/Message.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { INTERNAL_SERVER_ERROR } from "./util";
import { mapState } from "vuex";

export default {
  components: {
    Message,
    Navbar,
    Footer
  },
  computed: {
    ...mapState({
      errorCode: state => state.error.code,
      isLoading: state => state.process.loading
    })
  },
  watch: {
    errorCode: {
      handler(val) {
        if (val === INTERNAL_SERVER_ERROR) {
          this.$router.push("/500");
        }
      },
      immediate: true
    },
    $route() {
      this.$store.commit("error/setCode", null);
    }
  },
  mounted() {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$store.commit("process/setLoading", false);
  },
  created() {}
};
</script>
