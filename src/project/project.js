import "./project.css";

class Project {
  render(text) {
    const body = document.querySelector("body");

    const project = document.createElement("div");
    project.classList.add("project");

    const pseudo = document.createElement("div");
    pseudo.id = `${text.toLowerCase()}`;
    pseudo.classList.add("pseudo");
    project.appendChild(pseudo);

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = `
    <h3>${text}</h3>
    `;
    project.appendChild(title);

    const container = document.createElement("div");
    container.classList.add("container");

    const content = document.createElement("div");
    content.classList.add("content");
    content.id = "content";

    const pjt1 = document.createElement("div");
    pjt1.classList.add("pjt1","pjt");
    const pjt2 = document.createElement("div");
    pjt2.classList.add("pjt2","pjt");

    content.appendChild(pjt1);
    content.appendChild(pjt2);

    const pjt3 = document.createElement("div");
    pjt3.classList.add("pjt3","pjt");
    const pjt4 = document.createElement("div");
    pjt4.classList.add("pjt4","pjt");

    content.appendChild(pjt3);
    content.appendChild(pjt4);

    container.appendChild(content);

    project.appendChild(container);
    body.appendChild(project);
  }

  click() {
    const el = document.getElementById("content");
    el.addEventListener("click", (e) => {
      switch (e.target.classList[0]) {
        case 'pjt1':
          window.open("https://maskod.kr")
          break
        case 'pjt2':
          window.open("https://github.com/joonseongpark/fwine")
          break
        case 'pjt3':
          window.open("https://github.com/joonseongpark/vqa")
          break
        case 'pjt4':
          window.open("https://joonseongpark.github.io/ybigtabaseball/")
          break
      }
    });
  }
}

export default Project;
