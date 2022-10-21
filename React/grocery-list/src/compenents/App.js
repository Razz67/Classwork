import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};


export default function App() {
	const [name, setName] = useState("");
	const [list, setList] = useState(getLocalStorage());
	const [isEditing, setIsEditing] = useState(false);
	const [editID, setEditID] = useState(null);
	const [alert, setAlert] = useState({
		show: false,
		msg: "",
		type: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		// check if input field is empty
		if (!name) {
			// display error alert
			showAlert(true, "danger", "Please Enter A  Grocery Item");

			// check if input field is not empty and isEditing is true
		} else if (name && isEditing) {
			// deal with editing
      setList(list.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name };
        }
        return item;
      }));

      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "Item Edited Successfully");

		} else {

			// display success alert
      showAlert(true, "success", "Item Added To Your Grocery List");

			// add new item to the list
			const newItem = { id: new Date().getTime().toString(), title: name };

			// grab the current list and add the new item to it
			setList([...list, newItem]);
			setName("");
		}
	};

	// show alert function
	const showAlert = (show = false, type = "", msg = "") => {
		setAlert({ show, type, msg });
	};

  const clearList = () => {
    showAlert(true, "danger", "List Cleared");
    setList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "danger", "Item Removed");
    setList(list.filter((item) => item.id !== id));
  };

    const editItem = (id) => {
      const editOneItem = list.find((item) => item.id === id);
      setIsEditing(true);
      setEditID(id);
      setName(editOneItem.title);
    };

    useEffect(() => {
      localStorage.setItem("list", JSON.stringify(list));
    }, [list]);


	return (
		<section className="section-center">
			<form className="grocery-form" onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

				<h3>grocery list</h3>

				<div className="form-control">
					<input
						type="text"
						className="grocery"
						placeholder="Enter Item: e.g. eggs"
						value={name}
						onChange={(evt) => setName(evt.target.value)}
					/>

					<button type="submit" className="submit-btn">
						{isEditing ? "edit" : "submit"}
					</button>
				</div>
			</form>

			{/* Display clear items button only when items are in the list */}
			{list.length > 0 && (
				<div className="grocery-container">
					<List items={list} removeItem={removeItem} editItem={editItem}/>
					<button className="clear-btn"onClick={clearList}>clear items</button>
				</div>
			)}
		</section>
	);
}
