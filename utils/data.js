import { cfpLink } from './config'

export const speakersList = [
  {
    imageUrl: '/static/speakers/speakers-1',
    imageFormat: 'jpg',
    name: 'Peggy Rayzis',
    bio: 'Open Source Engineer at Apollo',
    twitter: 'peggyrayzis',
    github: 'peggyrayzis',
  },
  {
    imageUrl: '/static/speakers/speakers-2',
    imageFormat: 'jpg',
    name: 'Lee Byron',
    bio: 'Facebook, GraphQL co-creator',
    twitter: 'leeb',
    github: 'leebyron',
  },
  {
    imageUrl: '/static/speakers/speakers-3',
    imageFormat: 'jpg',
    name: 'Nick Schrock',
    bio: 'Ex-Facebook Engineer, GraphQL co-creator',
    twitter: 'schrockn',
    github: 'schrockn',
  },
  {
    imageUrl: '/static/speakers/speakers-4',
    imageFormat: 'jpg',
    name: 'Kyle Daigle',
    bio: 'Github',
    twitter: 'kdaigle',
    github: 'kdaigle',
  },
  {
    imageUrl: '/static/speakers/speakers-5',
    imageFormat: 'jpg',
    name: 'Sara Vieira',
    bio: 'Frontend Engineer at YLD.io',
    twitter: 'NikkitaFTW',
    github: 'SaraVieira',
  },
  {
    imageUrl: '/static/speakers/you-want-to-talk',
    imageFormat: 'jpg',
    name: 'This can be you!',
    bio: () => <a href={cfpLink}>Register today</a>,
    noShadow: true,
  },
]
