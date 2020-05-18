<template>
  <div>
    <div v-if="isLoading">loading</div>
    <header>
      <Navbar />
    </header>
    <main>
      <div class="container">
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
  created() {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$store.commit("process/setLoading", true);
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$store.commit("process/setLoading", true);
      //  continue to next page
      setTimeout(() => {
        next();
      }, 500);
    });
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      this.$store.commit("process/setLoading", false);
    });
  }
};
</script>
