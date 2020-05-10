import "./commonComponent.css";

class CommonComponent {
  render(text,arr) {
    const body = document.querySelector("body");

    const component = document.createElement("div");
    component.classList.add("component");

    const pseudo = document.createElement('div')
    pseudo.id = `${text.toLowerCase()}`;
    pseudo.classList.add('pseudo')
    component.appendChild(pseudo)

    const title = document.createElement("div");
    title.classList.add("title");
    title.innerHTML = `
    <h3>${text}</h3>
    `;
    component.appendChild(title);

    const container = document.createElement("div");
    container.classList.add("container");

    arr.forEach(edu => {
      const content = document.createElement('div');
      content.classList.add('content')
      const period = document.createElement('div')
      period.classList.add('period')
      period.innerHTML = `<p>${edu.period}</p>`
      
      const info = document.createElement('div')
      info.classList.add('info')
      info.innerHTML = ''
      edu.info.forEach(item => {
        info.innerHTML += `<p>${item}</p>`
      })

      const circle = document.createElement('div');
      circle.classList.add('circle')

      content.appendChild(period)
      content.appendChild(info)
      content.appendChild(circle)

      container.appendChild(content)
    })
    component.appendChild(container)


    body.appendChild(component);
  }
}

export default CommonComponent;
