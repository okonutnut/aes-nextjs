import Link from "next/link";
import {MdDashboard, MdEditNote, MdSummarize} from "react-icons/md";
export const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col justify-base items-center">
      
        <ul className="menu min-h-screen w-full px-4">
          <li className="my-1">
            <Link href={'/dashboard'} className="focus:bg-primary btn leading-normal bg-inherit border-0">
              <MdDashboard className="text-base"/>
              Dashboard
            </Link>
            <Link href={'/enrollment'} className="focus:bg-primary btn leading-normal bg-inherit border-0">
              <MdEditNote className="text-base"/>
              Enrollment
            </Link>
            <Link href={'/reports'} className="focus:bg-primary btn leading-normal bg-inherit border-0">
              <MdSummarize className="text-base"/>
              Reports
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};