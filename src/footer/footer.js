import './footer.css'

class Footer {
  render() {
    const body = document.querySelector('body')
    const footer = document.createElement('footer')
    footer.innerHTML = `
    <p>© 2020 Created by. JoonSeong Park</p>
    `

    body.appendChild(footer)
  }
}

export default Footer