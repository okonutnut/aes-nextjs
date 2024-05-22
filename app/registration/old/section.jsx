import { FormInput } from '@/components/inputs/FormInput';
import { useState, useEffect } from 'react';
const SectionSelector = ({register, sectionData}) => {
  const [selectedSection, setSelectedSection] = useState('');
  const [adviser, setAdviser] = useState('');
  console.log("Adviser : " + adviser)
  console.log("Section : " + selectedSection)
  
  useEffect(() => {
    if (selectedSection) {
      const selected = sectionData.find(section => section.section_name === selectedSection);
      setAdviser(selected ? selected.adviser : "");
    }
  }, [selectedSection]);
  
  return (
    <>
      <label className="form-control w-full max-w-xs my-1">
        <div className="label">
          <span className="label-text text-xs">Section</span>
        </div>
        <select className="select select-sm select-bordered w-full max-w-xs" {...register('section_name', { required: true })} onChange={(e) => setSelectedSection(e.target.value)}>
          {sectionData.map((section, index) => (
            <option key={index} value={section.section_name}>{section.section_name}</option>
          ))}
        </select>
      </label>
  
      <FormInput
        label="Adviser"
        type="text"
        readOnly
        value={adviser == null ? "" : adviser}
        register={register}
        name="adviser"
      />
    </>
  );
}
export default SectionSelector;