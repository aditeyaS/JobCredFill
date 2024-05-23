const fillText = (target, value) => {
  target.dispatchEvent(new Event("focus", { bubbles: true }));
  target.value = value;
  target.dispatchEvent(new Event("input", { bubbles: true }));
  target.dispatchEvent(new Event("blur", { bubbles: true }));
};

const checkCheckbox = (target) => {
  target.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
  target.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
  target.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
  target.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  target.dispatchEvent(new Event("change", { bubbles: true }));
};

var emailInput;
var passwordInput;
var confirmPasswordInput;
var consentCheckBox;

const initHTMLElements = () => {
  emailInput = document.querySelector('input[data-automation-id="email"]');
  passwordInput = document.querySelector(
    'input[data-automation-id="password"]'
  );
  confirmPasswordInput = document.querySelector(
    'input[data-automation-id="verifyPassword"]'
  );
  consentCheckBox = document.querySelector(
    'input[data-automation-id="createAccountCheckbox"]'
  );
};

const setHTMLValues = (userData) => {
  var count = 0;
  if (emailInput && userData.email) {
    fillText(emailInput, userData.email);
    count += 1;
  }
  if (passwordInput && userData.password) {
    fillText(passwordInput, userData.password);
    count += 1;
  }
  if (confirmPasswordInput && userData.password) {
    fillText(confirmPasswordInput, userData.password);
    count += 1;
  }
  if (consentCheckBox) {
    checkCheckbox(consentCheckBox);
    count += 1;
  }
  return count;
};

const fillData = (request, _sender, sendResponse) => {
  if (request.action == "fill-workday") {
    console.log("message received");
    const userData = request.userData;
    initHTMLElements();
    const count = setHTMLValues(userData);
    sendResponse(`${count} fields filled on Workday.`);
    return true;
  }
};

chrome.runtime.onMessage.addListener(fillData);
