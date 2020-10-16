import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueNavigationBar from "vue-navigation-bar";
Vue.component("vue-navigation-bar", VueNavigationBar);
import VModal from "vue-js-modal";
import VueAnalytics from "vue-analytics";
import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";
Vue.use(VModal);
Vue.config.productionTip = false;

const requireComponent = require.context(
  // The relative path of the components folder
  "./components/base",
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName);

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(
      // Gets the file name regardless of folder depth
      fileName
        .split("/")
        .pop()
        .replace(/\.\w+$/, "")
    )
  );

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  );
});

Vue.use(VueAnalytics, {
  id: "UA-179418961-1",
  router
});

Vue.mixin({
  data: function() {
    return {
      // We'll initially assume webp is supported
      webpSupported: true
    };
  },
  methods: {
    transformImgExt(url) {
      // If webp is supported, transform the url
      if (this.webpSupported) {
        return url.replace(/\.\w{1,5}$/, ".webp");
      } else {
        // Otherwise, just return the original
        return url;
      }
    }
  }
});

new Vue({
  created() {
    (async () => {
      // If browser doesn't have createImageBitmap, we can't use webp.
      if (!self.createImageBitmap) {
        this.webpSupported = false;
        console.log("webp not supported");
        return;
      }
      console.log("webp supported");
      // Base64 representation of a white point image
      const webpData =
        "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=";
      // Retrieve the Image in Blob Format
      const blob = await fetch(webpData).then(r => r.blob());
      // If the createImageBitmap method succeeds, return true, otherwise false
      this.webpSupported = await createImageBitmap(blob).then(
        () => true,
        () => false
      );
    })();
  }, // End created

  router,
  store,
  render: h => h(App)
}).$mount("#app");
