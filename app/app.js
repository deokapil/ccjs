import css from "./style.css";
import displayPopup from "./main";
import { getCookie, setCookie } from "./utils";

export async function intiCCmgt() {
  // get interesting attributes
  const scriptTag = document.querySelector("script[data-tenent-uid]");
  const tenentUid = scriptTag.getAttribute("data-tenent-uid");
  const apiUrl = scriptTag.getAttribute("data-api-url");

  const res = await fetch(`${apiUrl}/api/consent-config`, {
    method: "POST", // POST, PUT, DELETE, etc.
    headers: {
      // the content type header value is usually auto-set
      // depending on the request body
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ccUuid: tenentUid,
    }),
  });
  const cont = await res.json();

  const status = getCookie("consent_status");
  console.log(status);

  switch (status) {
    case "Agreed":
      console.log("Has Already agreed to all");
      break;
    case "Essential":
      console.log("Has Already agreed to all");
      break;
    default:
      const popup_vars = { apiUrl, tenentUid, option: cont };
      displayPopup(popup_vars);
  }

  console.log(cont);

  // const  await
}
