import React, { createContext, useContext } from "react";


const AppContext = createContext();

const Usecontext = () => {
 
  const userData = {
    name: "Agalya",
    role: "Frontend Developer intern",
    location: "Thanjavur",
    experience: "7 months",
    company: "Ebrain Technologies",
  };

  return (
 
    <AppContext.Provider value={userData}>
      <ParentComponent />
    </AppContext.Provider>
  );
};
const ParentComponent = () => {
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildOne />
      <ChildTwo />
      <ChildThree />
      <ChildFour />
      <ChildFive />
    </div>
  );
};


const ChildOne = () => {
  const { name } = useContext(AppContext);
  return <p>Child One: Name is {name}</p>;
};

const ChildTwo = () => {
  const { role } = useContext(AppContext);
  return <p>Child Two: Role is {role}</p>;
};

const ChildThree = () => {
  const { location } = useContext(AppContext);
  return <p>Child Three: Location is {location}</p>;
};

const ChildFour = () => {
  const { experience } = useContext(AppContext);
  return <p>Child Four: Experience is {experience}</p>;
};

const ChildFive = () => {
  const { company } = useContext(AppContext);
  return <p>Child Five: Company is {company}</p>;
};

export default Usecontext;


