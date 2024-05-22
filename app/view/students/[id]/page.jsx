'use client'
import { useEffect, useState } from "react"
import { MdEdit, MdDelete, MdDone, MdCancel } from "react-icons/md"
import StudentProfileForm from "./form"
import { useForm } from "react-hook-form"
import axios from "axios"
import LoadingScreen from "@/components/Loading/LoadingScreen"
import { useRouter } from "next/navigation"

const StudentProfilePage = ({ params }) => {
	const router = useRouter();
	const [studentID, setStudentID] = useState(params.id);
	useEffect(() => {setStudentID(params.id)}, []);
	
	const [editProfile, setEditProfile] = useState(false);
	function EditProfileToggle() {
		const value = editProfile === true ? false : true
		setEditProfile(value)
	}

	const [isLoading, setIsLoading] = useState(false);
	const {register, handleSubmit, reset} = useForm();
	const onSubmit = async (data) => {
		setIsLoading(true);
		await axios.put('/api/students/', data)
			.then(response => {
				console.log(response)
				setIsLoading(false);
				EditProfileToggle();
				alert("Successfully Updated")
			})
			.catch(error => {
				console.log(error);
				setIsLoading(false);
			})
	}
	const handleDelete = async () => {
		if(confirm(`Are you sure you want to delete this student ${studentID}?`)) {
			setIsLoading(true)
			await axios.delete('/api/students/', {studentID})
				.then(response => {
					console.log(response)
					setIsLoading(false)
					alert("Successfully Deleted")
					router.push('/view/students')
				})
				.catch(error => {
					console.log(error);
					alert("Failed to delete student")
					setIsLoading(false)
				})
		}
	}

	if(isLoading) return <LoadingScreen />

	return(
		<>
			<h1 className="text-[24px] font-bold">Student Profile</h1>
			<form className="my-3" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex justify-between items-center">
					<p className="font-semibold">Student ID : <span className="font-normal">{params.id}</span></p>
						{editProfile ? 
							<div className="flex justify-center items-center gap-2">
								<button className="btn glass" type="reset" onClick={EditProfileToggle}>
									<MdCancel/> Cancel
								</button>	
								<button className="btn glass text-success" type="submit">
									<MdDone/> Save
								</button>	
							</div>	: 
							<div className="flex justify-center items-center gap-2">
								<button className="btn glass" onClick={EditProfileToggle}>
									<MdEdit/> Edit
								</button>	
								<button className="btn glass text-error" onClick={handleDelete}>
									<MdDelete/> Delete
								</button>	
							</div>
						}
				</div>

				<StudentProfileForm register={register} studentID={studentID} editProfile={editProfile} />
			</form>
		</>
	)
}
export default StudentProfilePage;