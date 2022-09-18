import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  const [changeColor, setChangeColor] = useState("#000000");

  useEffect(() => {
    document.body.classList.value === "dark"
      ? setChangeColor("#ffffff")
      : setChangeColor("#000000");
  }, [changeColor]);

  return (
    <div className="flex justify-center items-center w-full h-screen absolute top-0 backdrop-blur-sm bg-white/30 dark:bg-slate-800">
      <ReactLoading
        type="spin"
        color={changeColor}
        height={"7%"}
        width={"7%"}
      />
    </div>
  );
};

export default Loading;
