import Navbar from "./Navbar";
import Todos from "./Todos";

function MainPage() {
  return (
    <>
      <div className="container w-full px-4 sm:px-0 mx-auto max-w-2xl h-[100dvh] max-h-[100dvh] text-white font-inter">
        <Navbar />
        {/* Todos */}
        <Todos />
      </div>
    </>
  );
}

export default MainPage;
