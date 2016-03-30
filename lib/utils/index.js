function isPhoneGap() {
  return (typeof window.Phonegap !== "undefined" || typeof window.cordova !== "undefined");
}

module.exports = {
  isPhoneGap: isPhoneGap
};
