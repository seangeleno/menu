import { addClass, div } from '../builders';
import { filterByType } from '../helpers';
import menuList from './menuList';

export default function rightMenu(items = []) {
  const soupSalad = menuList('Soups and Salads', filterByType(items, 'soup_salad'));
  const desserts = menuList('Desserts', filterByType(items, 'dessert'));

  return addClass(div(soupSalad, desserts), 'column', 'is-6');
}
