export default function SectionOne() {
  return (
    <div className="bg-gray-100" id="section-one">
      <div className="  	 container  mx-auto px-4     flex justify-around items-center  content-center flex-col-reverse lg:flex-row ">
        <div className="max-w-sm my-3 drop-shadow-lg text-center py-5">
          <h4 className="font-serif font-bold  text-4xl ">
            Crafting the Future, One Line of Code at a Time.
          </h4>
          <p className="font-sans  text-red-400 leading-7 mt-7">
            highlights coding as a powerful tool for innovation, where each line
            shapes impactful solutions and contributes to a better tomorrow.
          </p>
        </div>

        <div className="hover:scale-105">
          <img src="/imgH.png" className=" drop-shadow-lg"></img>
        </div>
      </div>
    </div>
  );
}
