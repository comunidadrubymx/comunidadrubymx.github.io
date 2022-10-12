import "index.scss"

// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)

simplyCountdown('#countdown', {
  year: 2022,
  month: 10,
  day: 26,
  hours: 19,
  minutes: 0,
  seconds: 0,
  words: {
    days: { singular: ' dia', plural: ' dias' },
    hours: { singular: ' hora', plural: ' horas' },
    minutes: { singular: ' minuto', plural: ' minutos' },
    seconds: { singular: ' segundo', plural: ' segundos' }
  },
  plural: true,
  inline: false,
  inlineClass: 'simply-countdown-inline',
  enableUtc: false,
  onEnd: function() { return; },
  refresh: 1000,
  sectionClass: 'simply-section',
  amountClass: 'simply-amount',
  wordClass: 'simply-word',
  zeroPad: false,
  countUp: false
});

simplyCountdown('#countdown-en', {
  year: 2022,
  month: 10,
  day: 26,
  hours: 19,
  minutes: 0,
  seconds: 0,
  words: {
    days: { singular: ' day', plural: ' days' },
    hours: { singular: ' hour', plural: ' hours' },
    minutes: { singular: ' minute', plural: ' minutes' },
    seconds: { singular: ' second', plural: ' seconds' }
  },
  plural: true,
  inline: false,
  inlineClass: 'simply-countdown-inline',
  enableUtc: false,
  onEnd: function() { return; },
  refresh: 1000,
  sectionClass: 'simply-section',
  amountClass: 'simply-amount',
  wordClass: 'simply-word',
  zeroPad: false,
  countUp: false
});




window.toggleMenu = () => {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
