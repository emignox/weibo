import { data_Brand, Item } from "./data-brand"; // Aggiorna con il percorso corretto al file dei dati
import Button from "../blocs/buttons";
import { useNavigate } from "react-router-dom";
import { Scroll } from "../blocs/scroll";

const FlexAlternatingComponent = ({ items }: { items: Item[] }) => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="w-full py-32 text-2xl font-black text-center lg:text-6xl ">
        {" "}
        Because Weibo is for everyone{" "}
      </h1>
      <div className="flex flex-col items-center justify-center gap-y-52">
        {items.map((data, index) => (
          <>
            <div
              key={index}
              className={` flex flex-col lg:flex ${index % 2 === 0 + 1 ? "lg:flex-row" : "lg:flex-row-reverse "}  justify-center items-center  gap-y-5   w-5/6`}
            >
              {/* <Scroll> */}
              <img
                className={` w-4/5 lg:w-2/6  rounded-xl`}
                src={data.image}
                alt=""
              />
              <Scroll>
                <div className="flex flex-col items-center justify-center gap-y-12">
                  <h2 className="text-xl font-black lg:text-5xl">
                    {data.title}
                  </h2>
                  <p className={` w-5/6  lg:w-1/2 text-center font-semibold `}>
                    {data.text}
                  </p>
                  <Button
                    className={`px-2 py-2 border border-black  hover:bg-black  text-weibo-black  hover:text-white`}
                    onClick={() => navigate("/")}
                    text={data.textButton}
                  />
                </div>
              </Scroll>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

const BrandComponent = () => {
  return <FlexAlternatingComponent items={data_Brand} />;
};

export default BrandComponent;
