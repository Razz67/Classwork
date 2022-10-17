import EmployeeList from "./EmployeeList";
import Data from "./Data";

export default function EmployeeListItems() {
	return (
		<div className="employee-items">
			<h2>Employee List</h2>
			{Data.map((datas, index) => {
				return (
					<ul>
						<li className=" employee-items">
							<EmployeeList key={index} whichEmployee={datas} />
						</li>
					</ul>
				);
			})}
		</div>
	);
}

