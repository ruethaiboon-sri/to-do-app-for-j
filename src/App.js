import Header from "./components/Header";
import Item from "./components/Item";
import AddForm from "./components/AddForm";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [editId, setEditId] = useState(null);
  const [title, setTitle] = useState("");
  const [theme, setTheme] = useState("heart");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function createTask(e) {
    e.preventDefault();
    if (!title) {
      alert("พิมพ์ก่อนจ้าไอ้เตง");
    }
    else if (editId) {
      const updateTask = tasks.map((task) => {
        if (task.id === editId) {
          return { ...task, title: title };
        }
        return task;
      });
      setTasks(updateTask);
      setEditId(null);
    } else {
      const newTask = { id: Math.floor(Math.random() * 1000), title: title };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }

  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((t) => t.id === id);
    setTitle(editTask.title);
  }

  return (
    //dont forget to add space after "App"
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm
          theme={theme}
          title={title}
          setTitle={setTitle}
          createTask={createTask}
          editId={editId}
        />
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
