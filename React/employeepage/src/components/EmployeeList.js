
export default function EmployeeList (props) {
    return (
        <div className="employee">
            <h2>name: {props.whichEmployee.name}</h2>
            <h3>title: {props.whichEmployee.title}</h3>
            <h3> {props.whichEmployee.image}</h3>
        </div>
    )
}

