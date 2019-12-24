/**
 *
 * @param {string} pass パスワード
 * @param {string} checkPass 確認用パスワード
 * @returns {string} エラーメッセージ、空の場合は成功
 */
const passValidate = (pass, checkPass) => {
  if (pass !== checkPass) return "パスワードが一致しません";
  else if (pass.length < 8) return "パスワードは8文字以上で入力してください";
  else return "";
};

module.exports = passValidate;
