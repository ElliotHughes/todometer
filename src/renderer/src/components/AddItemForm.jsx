import { useEffect, useRef, useState } from "react";
import { useAppReducer } from "../AppContext.jsx";
import styles from "./AddItemForm.module.css";

// Form to populate todo items
function AddItemForm() {
	const dispatch = useAppReducer();
	let inputRef = useRef();

	function addItem(e) {
		const newItem = {
			text: inputRef.current.value,
			key: Date.now(),
			status: "pending",
		};
		if (newItem.text.trim()) {
			dispatch({ type: "ADD_ITEM", item: newItem });
		}
		e.preventDefault();
		inputRef.current.value = "";
		inputRef.current.focus();
	}

	// useEffect(() => {
	//   const handlePaste = (event) => {
	// 	const items = (event.clipboardData || event.originalEvent.clipboardData).items;
	// 	for (let i = 0; i < items.length; i++) {
	// 	  const item = items[i];
	// 	  if (item.kind === 'string' && item.type === 'text/plain') {
	// 		item.getAsString((text) => {
	// 			const newItem = {
	// 				text: text,
	// 				key: Date.now(),
	// 				status: "pending",
	// 			};
	// 			if (newItem.text.trim()) {
	// 				dispatch({ type: "ADD_ITEM", item: newItem });
	// 			}
	// 			inputRef.current.value = "";
	// 		});
	// 		break;
	// 	  }
	// 	}
	//   };
  
	//   // 添加事件监听器
	//   document.addEventListener('paste', handlePaste);
  
	//   // 清理函数，在组件卸载时移除事件监听器
	//   return () => {
	// 	document.removeEventListener('paste', handlePaste);
	//   };
	// }, []);

	return (
		<form className={styles.form} onSubmit={addItem}>
			<input ref={inputRef} placeholder="输入一个任务" autoFocus />
			<button type="submit" />
		</form>
	);
}

export default AddItemForm;
