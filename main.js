const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      album: [],
    }
  },
  mounted() {
    axios.get("api/album.php").then((response) => {
      this.album = response.data;
    })
  }
}).mount("#app");