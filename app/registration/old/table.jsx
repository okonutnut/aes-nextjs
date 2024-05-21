const SubjectTable = ({ subjects, onRemove }) => {
  return (
    <>
      <div className="overflow-x-auto border rounded-md w-full">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th>
              <th>Code</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td className="font-bold">{index + 1}</td>
                <td>{subject.code}</td>
                <td>{subject.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};
export default SubjectTable;