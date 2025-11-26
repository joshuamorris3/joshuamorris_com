import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedinIn,
  faGithub,
  faKeybase,
} from "@fortawesome/free-brands-svg-icons";

library.add(faLinkedinIn, faGithub, faKeybase);

// Convert <i> tags to SVG when DOM is ready
if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      dom.i2svg();
    });
  } else {
    dom.i2svg();
  }
}
