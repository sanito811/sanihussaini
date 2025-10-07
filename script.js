// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const navMenu = document.getElementById("navMenu")

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")

  // Animate hamburger menu
  const spans = menuToggle.querySelectorAll("span")
  if (navMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
    spans[1].style.opacity = "0"
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)"
  } else {
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  }
})

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    const spans = menuToggle.querySelectorAll("span")
    spans[0].style.transform = "none"
    spans[1].style.opacity = "1"
    spans[2].style.transform = "none"
  })
})

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar Background on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.15)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  }
})

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeInUp 0.8s ease-out forwards"
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all sections and cards
document.querySelectorAll("section, .service-card, .work-card, .skill-item").forEach((el) => {
  el.style.opacity = "0"
  observer.observe(el)
})

// Contact Form Submission
const contactForm = document.getElementById("contactForm")
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const formData = new FormData(contactForm)

  // Show success message
  alert("Thank you for your message! I will get back to you soon.")

  // Reset form
  contactForm.reset()
})

// Add sparkle effect to cursor
document.addEventListener("mousemove", (e) => {
  if (Math.random() > 0.95) {
    createSparkle(e.clientX, e.clientY)
  }
})

function createSparkle(x, y) {
  const sparkle = document.createElement("div")
  sparkle.style.position = "fixed"
  sparkle.style.left = x + "px"
  sparkle.style.top = y + "px"
  sparkle.style.width = "5px"
  sparkle.style.height = "5px"
  sparkle.style.background = "white"
  sparkle.style.borderRadius = "50%"
  sparkle.style.pointerEvents = "none"
  sparkle.style.zIndex = "9999"
  sparkle.style.animation = "sparkle 0.6s ease-out forwards"

  document.body.appendChild(sparkle)

  setTimeout(() => {
    sparkle.remove()
  }, 600)
}

// Add sparkle animation to CSS dynamically
const style = document.createElement("style")
style.textContent = `
    @keyframes sparkle {
        0% {
            transform: scale(0);
            opacity: 1;
        }
        100% {
            transform: scale(1.5);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Typing effect for hero subtitle
const subtitle = document.querySelector(".hero-subtitle")
if (subtitle) {
  const text = subtitle.textContent
  subtitle.textContent = ""
  let i = 0

  function typeWriter() {
    if (i < text.length) {
      subtitle.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 30)
    }
  }

  // Start typing after a short delay
  setTimeout(typeWriter, 500)
}

// Add floating animation to social buttons
const socialButtons = document.querySelectorAll(".social-btn")
socialButtons.forEach((btn, index) => {
  btn.style.animation = `fadeInUp 0.8s ease-out ${0.2 + index * 0.1}s forwards`
})

// Skill bars animation on scroll
const skillBars = document.querySelectorAll(".skill-progress")
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animation = "fillBar 1.5s ease-out forwards"
        skillObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.5 },
)

skillBars.forEach((bar) => {
  skillObserver.observe(bar)
})

console.log("Portfolio loaded successfully! 🚀")
// Add fillBar animation to CSS dynamically