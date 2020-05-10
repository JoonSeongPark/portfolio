import "./nav.css";

class Nav {
  render() {
    const body = document.querySelector("body");

    const nav = document.createElement("nav");
    const logoATag = document.createElement("a");
    logoATag.setAttribute("href", "#home");
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("nav-left");
    leftDiv.id = "nav-left";
    const p = document.createElement("p");
    p.innerHTML = "JoonSeong Park";

    const rightDiv = document.createElement("div");
    rightDiv.classList.add("nav-right");
    const ul = document.createElement("ul");
    ul.innerHTML = "<li><a href='#home' id='top'><p>Home</p></a></li>";
    ul.innerHTML +=
      "<li><a href='#education' id='edu'><p>Education</p></a></li>";
    ul.innerHTML += "<li><a href='#activity' id='act'><p>Activity</p></a></li>";
    ul.innerHTML += "<li><a href='#project' id='proj'><p>Project</p></a></li>";

    leftDiv.appendChild(p);

    logoATag.appendChild(leftDiv);

    rightDiv.appendChild(ul);

    nav.appendChild(logoATag);
    nav.appendChild(rightDiv);

    body.appendChild(nav);
  }
  goUp() {
    const body = document.querySelector("body");
    body.innerHTML += `<a href="#home" class="arrow"><i class='fas fa-angle-up fa-3x'></i></a>`;
  }
  onScoll() {

    const top = document.getElementById('top')
    const edu = document.getElementById("edu")
    const act = document.getElementById("act")
    const proj = document.getElementById("proj")

    const arrow = document.querySelector(".arrow");
    
    
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY || document.documentElement.scrollTop;
      const scrollBottom =  scrollPos + window.innerHeight >= document.body.offsetHeight
      
      top.classList = scrollPos < 971 ? 'active' : ''
      edu.classList = scrollPos < 1363 && scrollPos >= 971 ? 'active' : ''
      act.classList = scrollPos < 2142 && scrollPos >= 971 && !scrollBottom ? 'active' : ''
      proj.classList = scrollPos >= 2142 ? 'active' : ''
      
      arrow.style.display = scrollPos < 971 ? "none" : "block";
    });
  }
}

export default Nav;
