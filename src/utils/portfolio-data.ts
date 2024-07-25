import coinWatch from '@public/assets/images/portfolio/coin-watch-mockup.webp';
import garuda from '@public/assets/images/portfolio/garuda-mockup.webp';
import ibrahim from '@public/assets/images/portfolio/ibrahim-law-mockup.webp';
import taskify from '@public/assets/images/portfolio/taskify-mockup.webp';
import todoApp from '@public/assets/images/portfolio/todo-app-mockup.webp';
import urban from '@public/assets/images/portfolio/urban-shop-mockup.webp';
import shortfly from '@public/assets/images/portfolio/url-shortly-mockup.webp';

export const portfolioData: IPortfolio[] = [
  {
    id: '01',
    title: 'Garuda Universe',
    image: garuda.src,
    url: 'https://garudaverse.tech/',
    repo: undefined,
  },
  {
    id: '02',
    title: 'Ibrahim Law',
    image: ibrahim.src,
    url: 'https://ibrahim-law.vercel.app/',
    repo: undefined,
  },
  {
    id: '03',
    title: 'Urban Fashion Shop',
    image: urban.src,
    url: 'https://urban-fashion.htma.site/',
    repo: 'https://github.com/hutamatr/urban-fashion-shop',
  },
  {
    id: '04',
    title: 'Taskify',
    image: taskify.src,
    url: 'https://github.com/hutamatr/taskify/releases/tag/1.1.0',
    repo: 'https://github.com/hutamatr/taskify',
  },
  {
    id: '05',
    title: 'Crypto Price Watcher',
    image: coinWatch.src,
    url: 'https://cryptoprices-watcher.vercel.app/',
    repo: 'https://github.com/hutamatr/cryptoprices-watcher',
  },
  {
    id: '06',
    title: 'Url Shortfly',
    image: shortfly.src,
    url: 'https://url-shortfly.vercel.app/',
    repo: 'https://github.com/hutamatr/url-shortfly',
  },
  {
    id: '07',
    title: 'Todolist App',
    image: todoApp.src,
    url: 'https://todolist-app-project.vercel.app/',
    repo: 'https://github.com/hutamatr/todolist-app',
  },
];
