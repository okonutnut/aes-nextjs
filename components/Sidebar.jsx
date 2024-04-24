'use client';
import { useRouter } from "next/navigation";
import { MdDashboard, MdDns, MdEditNote, MdInfo, MdManageAccounts, MdSummarize, MdViewList } from "react-icons/md";
export const Sidebar = () => {
  const router = useRouter();
  const btnClass = "focus:bg-primary focus:text-base-100 py-2 p-3 leading-normal bg-inherit border-0 font-medium mb-1";
  return (
    <>
      <div className="flex flex-col justify-between items-start border-r shadow-lg py-5 h-full">
        <section className="w-full">
          <h1 className="mx-5 text-xs font-semibold">Navigation</h1>
          <ul className="menu bg-base-100 text-neutral px-5 w-full">
            <li>
              <button onClick={() => router.push('/dashboard')} className={btnClass}>
                <MdDashboard className="text-secondary" />
                Dashboard
              </button>
            </li>
            <li>
              <details open>
                <summary className="py-2 p-3 leading-normal font-medium">
                  <MdEditNote className="text-primary" />
                  Enrollment
                </summary>
                <ul>
                  <li>
                    <button onClick={() => router.push('/enrollment')} className={btnClass}>
                      New Student
                    </button>
                  </li>
                  <li>
                    <button onClick={() => router.push('/enrollment')} className={btnClass} disabled>
                      Old Student
                    </button>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details open>
                <summary className="py-2 p-3 leading-normal font-medium">
                  <MdViewList className="text-error" />
                  View
                </summary>
                <ul>
                  <li>
                    <button onClick={() => router.push('/view/enrollees')} className={btnClass}>
                      Enrollees
                    </button>
                  </li>
                  <li>
                    <button onClick={() => router.push('/enrollment')} className={btnClass} disabled>
                      Reports
                    </button>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </section>

        <section className="w-full">
          <h1 className="mx-5 text-xs font-semibold">Settings</h1>
          <ul className="menu bg-base-100 text-neutral px-5 w-full">
            <li>
              <button onClick={() => router.push('/settings/configurations')} className={btnClass}>
                <MdDns className="text-secondary" />
                System Configuration
              </button>
            </li>
            <li>
              <button onClick={() => router.push('/enrollment')} className={btnClass}>
                <MdManageAccounts className="text-primary" />
                Accounts
              </button>
            </li>
            <li>
              <button onClick={() => router.push('/reports')} className={btnClass}>
                <MdInfo className="text-error" />
                About
              </button>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};