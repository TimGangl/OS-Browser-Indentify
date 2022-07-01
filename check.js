let browserChecker = () => {
  let userDetails = navigator.userAgent;
  for (let i in browserList) {
    if (userDetails.includes(browserList[i].value)) {
      browserDetailsRef.innerHTML = browserList[i].name || 'Unknown Browser';
      break;
    }
  }

  for (let i in os) {
    if (userDetails.includes(os[i].value)) {
      osDetailsRef.innerHTML = os[i].name;
      break;
    }
  }
};

window.onload = browserChecker();