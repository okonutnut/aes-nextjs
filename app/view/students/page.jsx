'use client'
import StudentsTable from './table';

const StudentsPage = () => {
  return (
    <>
      <h1 className="text-[24px] font-bold">Student List</h1>
      {/* Add date range for filtering */}
      <StudentsTable />
    </>
  );
};

export default StudentsPage;