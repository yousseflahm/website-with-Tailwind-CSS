export default  function CardProject({image ,title , about , date }){
    return(
        <div className="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark max-w-80  transition-all hover:-translate-y-7 	">
        <div
          className="relative overflow-hidden bg-cover bg-no-repeat "
          data-twe-ripple-init
          data-twe-ripple-color="light"
        >
          <img
            className="rounded-t-lg"
            src={image}
            alt=""
          />
          <a href="#!">
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
            ></div>
          </a>
        </div>
        <div className="p-6 text-surface dark:text-white">
          <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
          <p className="mb-4 text-base 	">
           {about}  -- {date}
          </p>
          <button
            type="button"
            className="inline-block rounded bg-blue-600  hover:bg-blue-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase  text-white "
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
          Show More 
          </button>
        </div>
      </div>
    );
}