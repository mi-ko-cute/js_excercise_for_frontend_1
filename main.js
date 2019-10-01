/**
 * 課題1: id値が 'title' の要素を取得する
 *   - getElementByIdを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const titleElement = document.getElementById('title');
console.log(titleElement);

/**
 * 課題2: id値が 'item-container' の要素を取得する
 *   - querySelectorを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const itemContainerElement = document.querySelector('#item-container');
console.log(itemContainerElement);

/**
 * 課題3: li要素を全て取得する
 *   - console.logで取得したDOMの中身を確認する
 */
const liElements = document.getElementsByTagName('li');
console.log(liElements);

/**
 * 課題4: class値が 'item' の要素を全て取得する
 *   - getElementsByClassNameを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const classItems = document.getElementsByClassName('item');
console.log(classItems);

/**
 * 課題5: class値が 'item' の要素を全て取得する
 *   - querySelectorAllを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const classItemAll = document.querySelectorAll('.item');
console.log(classItemAll);
