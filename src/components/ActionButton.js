function ActionButton({ title, action }) {
  return <button onClick={action}>{title}</button>;
}

export default ActionButton;
