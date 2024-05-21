import TopNav from "../TopNav";
import Sidebar from "../Sidebar";
const ViewContent = ({children}) => {
    return (
      <>
        <TopNav />
        <div className="flex pt-[4rem]">
          <div className="fixed bottom-0 top-[4rem] w-[18%]">
            <Sidebar />
          </div>
          <div className="container ps-[18rem] pe-[5rem]">
            <main className="px-7 py-5">
              {children}
            </main>
          </div>
        </div>
      </>
    );
};
export default ViewContent;