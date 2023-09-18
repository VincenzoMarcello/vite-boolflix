// # includiamo bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// # includiamo js di bootstrap
// # (altrimenti alcuni componenti non funzionano)
import * as bootstrap from "bootstrap";

// # importiamo fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// # bisogna importare le icone una per una
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";
library.add(starSolid, starRegular);

// # mettiamo l'import dopo per avere precedenza su bootstrap
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
