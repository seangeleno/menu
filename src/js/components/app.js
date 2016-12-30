import { div, addId, text } from '../builders';

export default function app() {
  const appEle = addId(div(text('In this course, we will be building a simple online menu for a fake restaurant called Fancy Bear Eateries. To build this, we will use on vanilla JavaScript. We will avoid using any libraries or frameworks besides Browserify and Babel so that we can spread our files out into modules and use as much ES2015 as we can! The aim is to learn some of the methods that are available to use in JavaScript. We will also learn some of the new ES* features and how to use them today. We will learn how to organize our code into components. And lastly, we will implement simple versions of parts of the big libraries and frameworks to help us understand why these tools exist.')), 'app-container');

  return appEle;
}
