const solutions = document.getElementById('solutions')
const navigation = document.getElementById('navigation')
const hamburger = document.getElementById('hamburger')
const news = document.getElementById('news')
const navClose = document.getElementById('nav-close')

const openNav = () => {
  if (self.innerWidth <= 900) {
    if (navigation.classList.contains('open')) {
      navigation.classList.remove('open')
    } else {
      navigation.classList.add('open')

      const closeNav = () => {
        navigation.classList.remove('open')
        hamburger.classList.remove('hide')
      }

      navClose.addEventListener('click', closeNav)
    }
  }
}

hamburger.addEventListener('click', openNav)

const solutionsData = [
  {
    text: 'Enabling a more sustainable, resilient and liveable world',
    icon: 'icons/co2.png',
  },
  {
    text: 'Enabling a more sustainable, resilient and liveable world',
    icon: 'icons/bi_tree.png',
  },
  {
    text: 'Enabling a more sustainable, resilient and liveable world',
    icon: 'icons/carbon_carbon.png',
  },
]

const newsData = [
  {
    image:
      'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
    text: 'Enabling a more sustainable, resilient and liveable world',
  },
  {
    image:
      'https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    text: 'Enabling a more sustainable, resilient and liveable world',
  },
  {
    image:
      'https://images.unsplash.com/photo-1498855926480-d98e83099315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    text: 'Enabling a more sustainable, resilient and liveable world',
  },
]

for (item of solutionsData) {
  let solutionCard = document.createElement('div')
  solutionCard.innerHTML = `
    <div class="solutions__card">
        <div class="container">
            <p class="solutions__card__head">
            Enabling a more sustainable, resilient and liveable world
            </p>
            <img src=${item.icon} alt="Co2" />
            <button class="secondary-btn">see more</button>
            <div class="line"></div>
            <p>Thriving cities</p>
            <p>Critical infrastructure</p>
            <p>Cleaner, protected environments</p>
        </div>
    </div>
  `
  solutions.appendChild(solutionCard)
}

for (item of newsData) {
  let newsCard = document.createElement('div')
  newsCard.innerHTML = `
  <div class="news__card">
  <img
    src=${item.image}
    alt=""
  />
  <div class="news__card__bottom">
    <h5>Press release</h5>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
      aliquam...
    </p>
    <div class="read-more">
      <p class="read-more__text">Read More</p>
      <img
        aria-hidden="true"
        src="icons/akar-icons_arrow-forward.png"
        alt="arrow icon"
        class="read-more__arrow"
      />
    </div>
  </div>
</div>`
  news.appendChild(newsCard)
}
