function fetchData() {
  return fetch("../data.json")
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function clearContainer(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function initUI(isMobile, data, container) {
  clearContainer(container);

  if (isMobile) {
    data.forEach((item) => {
      const button = document.createElement("button");
      button.textContent = item.title;
      button.className = "accordion-button";
      button.addEventListener("click", function () {
        if (this.nextElementSibling.classList.contains("active")) {
          this.nextElementSibling.classList.remove("active");
          this.classList.remove("active");
        } else {
          document
            .querySelectorAll(".accordion-content")
            .forEach((tab) => tab.classList.remove("active"));
          document
            .querySelectorAll(".accordion-button")
            .forEach((tab) => tab.classList.remove("active"));
          this.nextElementSibling.classList.add("active");
          this.classList.add("active");
        }
      });

      const content = document.createElement("div");
      content.className = "accordion-content";
      content.innerHTML = item.content;

      container.appendChild(button);
      container.appendChild(content);
    });

    container.firstChild.nextElementSibling.classList.add("active");
  } else {
    const tabButtons = document.createElement("div");
    tabButtons.className = "tab-buttons";

    const tabContents = document.createElement("div");

    data.forEach((item, index) => {
      const button = document.createElement("button");
      button.textContent = item.title;
      button.className = "tab-button";
      button.addEventListener("click", function () {
        if (tabContents.children[index].classList.contains("active")) {
          tabContents.children[index].classList.remove("active");
          this.classList.remove("active");
        } else {
          document
            .querySelectorAll(".tab-content")
            .forEach((tab) => tab.classList.remove("active"));
          document
            .querySelectorAll(".tab-button")
            .forEach((tab) => tab.classList.remove("active"));
          this.classList.add("active");
          tabContents.children[index].classList.add("active");
        }
      });
      const content = document.createElement("div");
      content.className = "tab-content";
      content.innerHTML = item.content;

      tabButtons.appendChild(button);
      tabContents.appendChild(content);
    });

    tabButtons.firstChild.classList.add("active");
    tabContents.firstChild.classList.add("active");

    container.appendChild(tabButtons);
    container.appendChild(tabContents);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is ready"); // Log when DOM is ready
  let isMobile = window.innerWidth <= 768;
  const container = document.getElementById("content");

  fetchData().then((data) => {
    initUI(isMobile, data, container);

    window.addEventListener("resize", function () {
      const newIsMobile = window.innerWidth <= 768;
      if (newIsMobile !== isMobile) {
        isMobile = newIsMobile;
        initUI(isMobile, data, container);
      }
    });
  });
});
