'use client'
import { useState } from "react"
import { MdEdit, MdDelete, MdDone, MdCancel } from "react-icons/md"
import StudentProfileForm from "./form"

const StudentProfilePage = ({ params }) => {
	const [editProfile, setEditProfile] = useState(false);

	const [studentID, setStudentID] = useState(params.id);

	function EditProfileToggle() {
		const value = editProfile === true ? false : true
		setEditProfile(value)
	}

	return(
		<>
			<h1 className="text-[24px] font-bold">Student Profile</h1>
			<section className="my-3">
				<div className="flex justify-between items-center">
					<p className="font-semibold">Student ID : <span className="font-normal">{studentID}</span></p>
						{editProfile ? 
							<div className="flex justify-center items-center gap-2">
								<button className="btn glass" onClick={EditProfileToggle}>
									<MdCancel/> Cancel
								</button>	
								<button className="btn glass text-success">
									<MdDone/> Save
								</button>	
							</div>	: 
							<div className="flex justify-center items-center gap-2">
								<button className="btn glass" onClick={EditProfileToggle}>
									<MdEdit/> Edit
								</button>	
								<button className="btn glass text-error">
									<MdDelete/> Delete
								</button>	
							</div>
						}
				</div>

				<StudentProfileForm id={studentID} editProfile={editProfile} />
			</section>
		</>
	)
}
export default StudentProfilePage;