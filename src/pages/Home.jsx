import useGetData from "../hooks/useGetData";
import SignInWithOthers from "../components/SignInWithOthers";
import TopTenEvents from "../components/TopTenEvents";
import Slider from "../components/Slider";
import Cards from "../components/Cards";

const Home = () => {
  const data = useGetData();
  return (
    <>
      <div className="mt-6 hidden md:block">
        <Slider />
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-6 mt-5">
        <div className="lg:w-3/4">
          <Cards data={data} lg={3} disabled={false} len={6} />
        </div>
        <div className="w-full lg:w-1/4 flex flex-col gap-6">
          <SignInWithOthers></SignInWithOthers>
          <div className="hidden lg:block">
            <TopTenEvents data={data}></TopTenEvents>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
