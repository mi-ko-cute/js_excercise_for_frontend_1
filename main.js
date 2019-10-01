/**
 * 課題1: id値が 'title' の要素を取得する
 *   - getElementByIdを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const idTitle = document.getElementById('title');
console.log(idTitle);

/**
 * 課題2: id値が 'item-container' の要素を取得する
 *   - querySelectorを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const idItem_Container = document.querySelector('#item-container');
console.log(idItem_Container);

/**
 * 課題3: li要素を全て取得する
 *   - console.logで取得したDOMの中身を確認する
 */
const li = document.getElementsByTagName('li');
console.log(li);

/**
 * 課題4: class値が 'item' の要素を全て取得する
 *   - getElementsByClassNameを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const classItem = document.getElementsByClassName('item');
console.log(classItem);

/**
 * 課題5: class値が 'item' の要素を全て取得する
 *   - querySelectorAllを使う
 *   - console.logで取得したDOMの中身を確認する
 */
const classItemAll = document.querySelectorAll('.item');
console.log(classItemAll);
