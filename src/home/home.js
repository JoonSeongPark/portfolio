import './home.css'

class Home {
  render(obj)  {
    const body = document.querySelector('body')
    const home = document.createElement('header')

    const pseudo = document.createElement('div')
    pseudo.id = 'home';
    pseudo.classList.add('pseudo')
    home.appendChild(pseudo)

    const container = document.createElement('div')
    container.classList.add('home-container')
    container.id = "home-container"
    const profileImg = document.createElement('figure')

    const content = document.createElement('article')
  
    
    content.innerHTML = `
    <h2>${obj.korName} <small>(${obj.engName})</small></h2>
    
    <span>${obj.field}</span>

    <strong>생년월일</strong>
    <p>${obj.birthday}</p>
    
    <strong>전화번호</strong>
    <p>${obj.phoneNumber}</p>
    
    <strong>이메일</strong>
    <p>${obj.email}</p>
    
    <strong>깃허브</strong>
    <a href="${obj.github}"><p>${obj.github}</p></a>
    
    <strong>기술스택</strong>
    <p>${obj.skills.join(', ')}</p>
    `


    container.appendChild(profileImg)
    container.appendChild(content)

    home.appendChild(container)
    
    body.appendChild(home)

    const comment = document.createElement('div')
    comment.classList.add('comment')
    comment.innerHTML = `
    <h2>안녕하세요!</h2>
    <h3>사용자의 피드백을 즐기는</h3>
    <h3>웹 프론트엔드 개발자 입니다.</h3>
    `
    body.appendChild(comment)

  }
}

export default Home