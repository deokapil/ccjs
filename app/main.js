import { setCookie } from "./utils";

function displayPopup(option) {
  var isCTA2 = option.design.cookiePolicy === "CTA-2";

  var modalStyle =
    ' style="background: ' +
    option.design.bannerColor +
    "; color: " +
    option.design.bannerText +
    '"';

  var dismissButton =
    '<button id="dismissButton" class="cocn-modalBtn" style="margin-right:5px;background:' +
    option.design.buttonColor +
    "; color: " +
    option.design.buttonText +
    '">' +
    option.design.dismissButtonText +
    "</button>";

  var acceptButton =
    '<button id="accptButton" class="cocn-modalBtn" style="margin-right:5px;background:' +
    option.design.buttonColor +
    "; color: " +
    option.design.buttonText +
    '">' +
    option.design.acceptCookieButtonText +
    "</button>";

  var refuseButton =
    '<button id="refuseButton" class="cocn-modalBtn" style="margin-right:5px;background:' +
    option.design.refuseButtonColor +
    "; color: " +
    option.design.refuseButtonText +
    '">' +
    option.design.refuseCookieButtonText +
    "</button>";

  var btnGroup = isCTA2 ? acceptButton + refuseButton : dismissButton;

  var policy =
    '<p><a href="' +
    option.design.policyLink +
    '">' +
    option.design.policyLinkText +
    "</a></p>";

  var elemDiv = document.createElement("div");
  elemDiv.id = "myModal";
  elemDiv.className = "cocn-modal-box";
  var modalElement =
    '<div class="cocn-modal-' +
    option.design.bannerPosition +
    '" ' +
    modalStyle +
    ">" +
    '<span class="cocn-modalclose">&times;</span>' +
    '<div class="cocn-modalBody"><p>' +
    option.design.disclaimer +
    "</p>" +
    policy +
    btnGroup +
    "</div></div>";

  elemDiv.innerHTML = modalElement;

  document.body.appendChild(elemDiv);
  var span = document.getElementsByClassName("cocn-modalclose")[0];

  span.onclick = function () {
    elemDiv.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  if (isCTA2) {
    var accept = document.getElementById("accptButton");
    accept.onclick = function () {
      elemDiv.style.display = "none";
      setCookie("consent_status", "Agreed");
    };

    var accept = document.getElementById("refuseButton");
    accept.onclick = function () {
      alert("Cookies are disabled!");
      elemDiv.style.display = "none";
      setCookie("consent_status", "Essential");
    };
  } else {
    var accept = document.getElementById("dismissButton");
    accept.onclick = function () {
      alert("Dismiss Warning");
      elemDiv.style.display = "none";
    };
  }
  elemDiv.style.display = "block";
}

export default displayPopup;
