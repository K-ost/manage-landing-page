
// Swiper
const comments = new Swiper("#comments", {
  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: "#comments .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    750: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
})


// waypoint
document.querySelectorAll('.waypoints').forEach(box => {
  const element = new Waypoint({
    element: box,
    handler: function(direction) {
      if (direction === 'down') {
        this.element.classList.add('animate')
      } else {
        this.element.classList.remove('animate')
      }
    },
    offset: '75%'
  })
})


// shownav
const shownav = document.querySelector('.shownav')
const navmenu = document.querySelector('.navmenu')
shownav.addEventListener('click', e => {
  if (!shownav.classList.contains('active')) {
    shownav.classList.add('active')
    document.body.classList.add('nav_opened')
  } else {
    shownav.classList.remove('active')
    document.body.classList.remove('nav_opened')
  }
})

// Closing nav by click on overlay
if (document.documentElement.clientWidth < 1020) {
  const div = document.createElement('div')
  div.setAttribute('class', 'navmenu_overlay')
  navmenu.after(div)
  div.addEventListener('click', () => {
    shownav.classList.remove('active')
    document.body.classList.remove('nav_opened')
  })
}



// Subscribe form validation
const subscribeForm = document.querySelector('#subscribeForm')
const subscribeMessage = document.querySelector('#subscribeForm .form-message')
const subscribeEmail = document.querySelector('#subscribe-email')

// Value state
let emailValue = ''

// validateEmail
const validateEmail = email => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}

subscribeEmail.addEventListener('change', e => {
  emailValue = e.target.value
})
subscribeForm.addEventListener('submit', e => {
  e.preventDefault()
  
  if ( !emailValue.length ) {
    subscribeEmail.classList.add('error')
    subscribeMessage.textContent = 'The "input" field is empty'
  } else if ( !validateEmail(emailValue) ) {
    subscribeEmail.classList.add('error')
    subscribeMessage.textContent = 'The email address is not formatted correctly'
  } else {
    subscribeEmail.classList.remove('error')
    subscribeMessage.textContent = ''
  }
})


// Doughnut Chart Config
const doughnutConfig = {
  type: 'doughnut',
  data: {
    labels: ['Blue', 'Red', 'White'],
    datasets: [
      {
        label: 'Color',
        data: [28, 12, 1],
        borderWidth: 0,
        rotation: 90,
        backgroundColor: ['hsl(228, 39%, 23%)', 'hsl(12, 88%, 59%)', 'white']
      }
    ]
  },
  options: {
    responsive: true,
    //cutout: 130,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false
      }
    }
  },
}

// Bar Chart Config
const barConfig = {
  type: 'bar',
  data: {
    labels: ['Bar1', 'Bar2', 'Bar3', 'Bar4', 'Bar5'],
    datasets: [
      {
        label: 'Red',
        data: [-2, 2, -5, 4, -2.3],
        backgroundColor: 'hsl(12, 88%, 59%)',
        borderRadius: 6,
      },
      {
        label: 'Blue',
        data: [-2.6, -3, -2, 4, -3.2],
        backgroundColor: 'hsl(228, 39%, 23%)',
        borderRadius: 6,
      },
    ]
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
        ticks: { display: false },
      },
      y: {
        stacked: true,
        ticks: { display: false },
      }
    }
  }
}


// Bar Chart
const doughnutChart = document.getElementById('doughnut')
new Chart(doughnutChart, doughnutConfig)

const barChart = document.getElementById('barchart')
new Chart(barChart, barConfig)


// counterNum
const counterNums = document.querySelectorAll('.counterNum')
counterNums.forEach(el => {
  const dataAttr = el.getAttribute('data-num')
  const duration = Math.floor(300 / Number(dataAttr))
  let start = 0
  const interval = setInterval(() => {
    if (start < Number(dataAttr)) {
      start += 0.1
      el.textContent = start.toFixed(2)
    } else {
      clearInterval(interval)
    }
  }, duration)
})