import PropagateLoader  from "react-spinners/PropagateLoader";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div>
        <PropagateLoader color="#6734FF" size={30} />
      </div>
    </div>
  );
};

export default Loading;
