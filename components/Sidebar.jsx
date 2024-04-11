'use client';
import { useRouter } from "next/navigation";
import {MdDashboard, MdEditNote, MdSummarize} from "react-icons/md";
export const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-base items-center">
      
        <ul className="menu min-h-screen w-full px-4">
          <li className="my-1">
            <button onClick={() => router.push('/dashboard')} className="focus:bg-primary btn leading-normal bg-inherit border-0">
              <MdDashboard className="text-base"/>
              Dashboard
            </button>
            <button onClick={() => router.push('/enrollment')} className="focus:bg-primary btn leading-normal bg-inherit border-0">
              <MdEditNote className="text-base"/>
              Enrollment
            </button>
            <button onClick={() => router.push('/reports')} className="focus:bg-primary btn leading-normal bg-inherit border-0">
              <MdSummarize className="text-base"/>
              Reports
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};