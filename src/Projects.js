import CardProject from "./CardProject";

export default function Projects() {
  return (
    <div className=" my-10 container mx-auto flex flex-wrap justify-around space-x-4 space-y-4" id="projects">
     
   
      <CardProject
        image={"/pro3.jpg"}
        title={" Project Three"}
        about={
          "Programming is the process of writing instructions for computers to perform tasks, blending logic and creativity to solve problems and create software. "
        }
        date={"05/06/2004"}
      />
      <CardProject
        image={"/pro3.jpg"}
        title={" Project Three"}
        about={
          "Programming is the process of writing instructions for computers to perform tasks, blending logic and creativity to solve problems and create software. "
        }
        date={"05/06/2004"}
      />
      <CardProject
        image={"/pro3.jpg"}
        title={" Project Three"}
        about={
          "Programming is the process of writing instructions for computers to perform tasks, blending logic and creativity to solve problems and create software. "
        }
        date={"05/06/2004"}
      />
      <CardProject
        image={"/pro3.jpg"}
        title={" Project Three"}
        about={
          "Programming is the process of writing instructions for computers to perform tasks, blending logic and creativity to solve problems and create software. "
        }
        date={"05/06/2004"}
      />
    </div>
  );
}
