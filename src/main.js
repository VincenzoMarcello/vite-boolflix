// # includiamo bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// # includiamo js di bootstrap
// # (altrimenti alcuni componenti non funzionano)
import * as bootstrap from "bootstrap";

// # mettiamo l'import dopo per avere precedenza su b
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
