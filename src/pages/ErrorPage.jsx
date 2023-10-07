import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const { status, statusText, data } = useRouteError();

  return (
    <div>
      <h3 className="mt-14 lg:mt-28 text-3xl md:text-5xl text-red1 text-center font-bold">
        ❌ {data} <br />
        <br />
        Status: {status} <br />
        <br />
        Status Text: {statusText} <br />
        <br />
      </h3>
      <Link
        className="text-center text-2xl block text-blue-700 underline uppercase"
        to="/"
      >
        Go Home 🏠
      </Link>
    </div>
  );
};

export default ErrorPage;
