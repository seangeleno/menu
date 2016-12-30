import { div, addId } from '../builders';
import navbar from './navbar';
import hero from './hero';
import menu from './menu';

export default function app(items) {
  const navbarEle = navbar();
  const heroEle = hero();
  const menuEle = menu(items);
  const appEle = addId(div(navbarEle, heroEle, menuEle), 'app-container');

  return appEle;
}
