export const Task = (props) => {
  const { tasks } = props;

  const deleteTaskId = 1;

  const filteredTasks = tasks.filter((task) => {
    return task.id !== deleteTaskId;
  });

  return (
    <ul>
      {/* {tasks.map((task) => (
        <li key={task.id}>{`id is ${task.id}, title is "${task.title}"`}</li>
      ))} */}
      {filteredTasks.map((task) => (
        <li key={task.id}>{`id is ${task.id}, title is "${task.title}"`}</li>
      ))}
    </ul>
  );
};
