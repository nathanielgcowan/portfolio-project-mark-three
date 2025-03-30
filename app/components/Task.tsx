const Task = ({  task, index }) => {
    console.log(task, index);
    return (
        <tr key={index}>
            <td>{task.text}</td>
            <td>Blue</td>
        </tr>
    )
}

export default Task;