import React from "react";
import CardComponent from "../components/Cards/CardComponent";
import { useGetCursosQuery } from "../store/api/apiSlice";
import RingLoader from "react-spinners/RingLoader";
import Loading from "../components/loading/loading";
const Courses = () => {
  const { data, isLoading, isError, error } = useGetCursosQuery();

  if (isLoading)
    return (
     <Loading/>
    );
  else if (isError) return <div>{error.message}</div>;

  return (
    <div className="flex item-center justify-center min-h-screen container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.cursos.map((e, index) => {
          return (
            <CardComponent
              key={e.id}
              id={e.id}
              nombreCurso={e.nombreCurso}
              miniaturaCurso={e.miniaturaCurso}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
