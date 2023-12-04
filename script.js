const solutions = document.getElementById('solutions')
const navigation = document.getElementById('navigation')
const news = document.getElementById('news')
const hamburgerButton = document.getElementById('hamburger')

function updateNavigationVisibility() {
  const viewportWidth = window.innerWidth
  const isSmallScreen = viewportWidth < 1040

  if (isSmallScreen) {
    hamburgerButton.setAttribute('aria-expanded', 'false')
    hamburgerButton.setAttribute('aria-hidden', 'false')
    navigation.setAttribute('aria-hidden', 'true')
  } else {
    navigation.setAttribute('aria-hidden', 'false')
    hamburgerButton.setAttribute('aria-hidden', 'true')
  }
}

updateNavigationVisibility()

hamburgerButton.addEventListener('click', () => {
  const expanded = hamburgerButton.getAttribute('aria-expanded') === 'true'
  hamburgerButton.setAttribute('aria-expanded', !expanded)
  navigation.setAttribute('aria-hidden', expanded)
})

window.addEventListener('resize', updateNavigationVisibility)
document.addEventListener('click', (event) => {
  if (!navigation.contains(event.target) && event.target !== hamburgerButton) {
    hamburgerButton.setAttribute('aria-expanded', 'false')
    navigation.setAttribute('aria-hidden', 'true')
    navigation.classList.remove('open')
  }
})

const openNav = () => {
  if (self.innerWidth <= 1040) {
    if (navigation.classList.contains('open')) {
      navigation.classList.remove('open')
      navigation.setAttribute('aria-hidden', 'true')
    } else {
      navigation.classList.add('open')
      navigation.setAttribute('aria-hidden', 'false')
    }
  }
}

hamburgerButton.addEventListener('click', openNav)

const solutionsData = [
  {
    text: 'Enabling a more sustainable, resilient and liveable world',
    icon: 'icons/co2.webp',
  },
  {
    text: 'Enabling a more sustainable, resilient and liveable world',
    icon: 'icons/bi_tree.webp',
  },
  {
    text: 'Enabling a more sustainable, resilient and liveable world',
    icon: 'icons/carbon_carbon.webp',
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
            ${item.text}
            </p>
            <img src=${item.icon} alt="Co2 icon" />
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
      <a href="#" class="read-more__text">Read More</a>
      <img
        aria-hidden="true"
        src="icons/akar-icons_arrow-forward.webp"
        alt="arrow icon"
        class="read-more__arrow"
      />
    </div>
  </div>
</div>`
  news.appendChild(newsCard)
}

// fade in animation
document.addEventListener('DOMContentLoaded', function () {
  const fadeInElements = document.querySelectorAll('.fade-in')
  fadeInElements.forEach((element) => {
    element.classList.add('active')
  })
})
