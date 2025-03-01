import { BsFillQuestionSquareFill } from "react-icons/bs";
import { MdTipsAndUpdates } from "react-icons/md";
import { Link } from "react-router-dom";
import img from "../../assets/img.jpg";

export const Wellcome = () => {
  return (
    <div>
      <div className="bg-gray-100 px-5 md:px-16 py-10 md:flex items-center justify-between rounded-lg my-10">
        <h1 className="text-2xl font-bold">Wellcome to NANASHOP</h1>
        <div className="md:flex items-center justify-center gap-5">
          <Link className="flex items-center gap-2 md:justify-center">
            <MdTipsAndUpdates className="text-xl" /> Your suggetion share with
            ours
          </Link>
          <Link className="flex items-center md:justify-center gap-2">
            <BsFillQuestionSquareFill /> Ask here your questions
          </Link>
        </div>
      </div>
      <div className=" bg-[url('./assets/img.jpg')] bg-no-repeat bg-cover rounded-lg h-[50vh] w-full text-white hidden md:flex flex-col justify-center">
        <div className="ml-20">
          <h1 className="font-bold text-3xl">
            Golbal stocking <br /> without limits
          </h1>
          <p className="my-3">
            Experience secure orders <br /> with Trade Assurance
          </p>
          <button className="bg-blue-600 py-2 px-5 rounded-full">
            View more
          </button>
        </div>
      </div>
    </div>
  );
};
