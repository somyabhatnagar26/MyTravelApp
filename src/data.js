import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },

  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.facebook.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit ',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit ',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit ',
  },
]

export const tours = [
  {
    id: 1,
    icon: tour1,
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit ',
    date: 'august 26th, 2020',
    location: 'china',
    duration: '6 days',
    price: 'from $2100',
  },
  {
    id: 2,
    icon: tour2,
    title: 'best of java',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit ',
    date: 'october 1th, 2020',
    location: 'indonesia',
    duration: '11 days',
    price: 'from $1400',
  },
  {
    id: 3,
    icon: tour3,
    title: 'explore hong kong',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit ',
    date: 'september 15th, 2020',
    location: 'hong kong',
    duration: '8 days',
    price: 'from $500',
  },
  {
    id: 4,
    icon: tour4,
    title: 'kenya highlights',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit ',
    date: 'december 5th, 2019',
    location: 'kenya',
    duration: '20 days',
    price: 'from $3300',
  },
]
