import './home.css'

class Home {
  render()  {
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
    <h1>박 준 성 <small>(JoonSeong Park)</small></h1>
    <span>Web Front-end Developer</span>

    <strong>생년월일</strong>
    <p>1993.10.08.</p>
    
    <strong>전화번호</strong>
    <p>010.2001.6554</p>
    
    <strong>이메일</strong>
    <p>rytt@yonsei.ac.kr</p>
    
    <strong>깃허브</strong>
    <a href="https://github.com/joonseongpark"><p>https://github.com/joonseongpark</p></a>
    
    <strong>주소</strong>
    <p>서울시 서대문구 신촌로 109, 1415호</p>
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