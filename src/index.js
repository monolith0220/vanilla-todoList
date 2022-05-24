const inputText = document.getElementById("inputText");
const inputButton = document.getElementById("inputButton");

const addList = () => {
  // テキストを取得
  const text = inputText.value;
  inputText.value = "";

  // li, spanタグを生成
  const li = document.createElement("li");
  const span = document.createElement("span");
  li.appendChild(span);

  // spanの中に追加
  span.innerText = text;

  // 完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";

  // 完了ボタンの機能
  completeButton.addEventListener("click", () => {
    const completeText = completeButton.previousElementSibling;
    const completeList = document.getElementById("completeTodoList");
    const completeItem = document.createElement("li");

    const target = completeButton.parentNode;
    target.remove();

    completeItem.appendChild(completeText);
    completeList.appendChild(completeItem);
  });

  // 削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  // 削除ボタンの機能
  deleteButton.addEventListener("click", () => {
    const target = deleteButton.parentNode;
    target.remove();
  });

  // buttonをliの中に追加
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了リストにliを追加
  const inCompleteList = document.getElementById("inCompleteTodoList");
  inCompleteList.appendChild(li);
};

inputButton.addEventListener("click", addList);
