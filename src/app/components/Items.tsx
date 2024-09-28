const Items = () => {
  const items: string = "Tasks to do";
  if (!items) {
    return <p>No tasks for today</p>;
  }
  return <div>Items</div>;
};

export default Items;
