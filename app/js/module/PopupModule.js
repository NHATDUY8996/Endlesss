export default function PopupModule() {
  // const btnShowPopup = document.querySelectorAll(".btn-popupRe");
  const popupClose = document.querySelectorAll(".popup-close");
  const popupback = document.querySelectorAll(".popup-back");
  const popupOverlay = document.querySelectorAll(".popup-overlay");
  const body = document.getElementsByTagName("body")[0];
  const popup = document.querySelectorAll(".popup");
  const ppclose = document.querySelectorAll(".ppclose");
  // if (btnShowPopup) {
  //     btnShowPopup.forEach((item) => {
  //         item.addEventListener("click", () => {
  //             popup.classList.add("open");
  //             body.classList.add("no-scroll");
  //         });
  //     });
  // }
  if (popupback) {
    popupback.forEach((item) => {
      item.addEventListener("click", () => {
        popup.forEach((item) => {
          item.classList.remove("open");
          body.classList.remove("no-scroll");
        });
      });
    });
  }
    
  if (popupClose) {
    popupClose.forEach((item) => {
      item.addEventListener("click", () => {
        popup.forEach((item) => {
          item.classList.remove("open");
          body.classList.remove("no-scroll");
        });
      });
    });
  }
  if (ppclose) {
    ppclose.forEach((item) => {
      item.addEventListener("click", () => {
        popup.forEach((item) => {
          item.classList.remove("open");
          body.classList.remove("no-scroll");
        });
      });
    });
  }
  if (popupOverlay) {
    popupOverlay.forEach((item) => {
      item.addEventListener("click", () => {
        popup.forEach((item) => {
          item.classList.remove("open");
          body.classList.remove("no-scroll");
        });
      });
    });
  }

  const popupOpens = document.querySelectorAll(".popup-open");
  if (popupOpens) {
    popupOpens.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("click popup open");
        
        const idString = item.getAttribute("data-popup");
        if (popup) {
          popup.forEach((item) => {
            if (item.getAttribute("data-popup-id") == idString) {
              item.classList.add("open");
              body.classList.add("no-scroll");
            }
          });
        }
      });
    });
  }
}