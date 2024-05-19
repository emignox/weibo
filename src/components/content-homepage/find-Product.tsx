import Button from "../blocs/buttons";

function find() {
  return (
    <>
      <div className="relative flex flex-col h-screen my-96">
        <img
          className="object-contain w-full lg:w-full lg:h-full brightness-75 "
          src="/orec.png"
          alt=""
        />
        <h1
          style={{
            textShadow: "2px 10px 4px #d3d3d3",
          }}
          className="absolute w-full my-32 text-2xl font-black text-center text-white lg:w-1/4 lg:left-12 md:text-black lg:text-6xl"
        >
          {" "}
          Find the right product <br />
          for you{" "}
        </h1>
        <div className="top-0 right-0 flex items-center justify-center my-5 lg:absolute lg:bottom-0">
          <Button
            className="flex items-center justify-center px-2 py-2 font-black border border-black font hover:bg-black text-weibo-black hover:text-white lg:my-96 lg:mx-32 lg:w-4/4 lg:left-12 md:text-black lg:text-2xl"
            text="Know more "
            onClick={() => {
              console.log("Button clicked!");
            }}
          />
        </div>
      </div>
    </>
  );
}
export default find;
