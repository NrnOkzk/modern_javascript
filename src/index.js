/**
 * const, letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言"; //そもそもJSとしてエラー

// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可能
// // val3 = "const変数を上書き";

// // constは再宣言不可能
// const val3="const変数を再宣言"

// constで定義したobjectはプロパティの変更が可能
// const val4 = {
//   name: "narin",
//   age: 25
// };
// val4.age = 26;
// val4.address = "kanagawa";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "narin";
// const age = 25;
// // 「私の名前はnarinです。年齢は25歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// func1というconst変数に関数を入れることもできる
const func1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => str;
console.log(func2("func2です"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(10, 20));
