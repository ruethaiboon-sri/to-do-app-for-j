import "./AddForm.css";
export default function AddForm(props) {
  const { title, setTitle, createTask, editId } = props;
  return (
    <div>
      <h2>อย่าลืมทำ!!</h2>
      <form onSubmit={createTask}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {editId ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
}
