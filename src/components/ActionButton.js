function ActionButton({ title, onClick }) {
  return <button onClick={() => alert(title)}>{title}</button>;
}

export default ActionButton;
