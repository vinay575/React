import React from  'react';
import ReactDOM from 'react-dom';

//(1)create a nested header element using react.create element(h1,h2,h3indide a dive with class "title"
const header = React.createElement(
    "div",{className: "Title", key:"Title"},                       //div is the parent
    [React.createElement("h1",{key :"h1"},"This is Heading-1 using h1 tag"),       //key is used to unique identify the element inside a array
     React.createElement("h2",{key :"h2"},"This is Heading-2 using h2 tag"),       //{}->we add attributes inside this className or id 
     React.createElement("h3",{key :"h3"},"This is Heading-3 using h3 tag"),        //[]-->we created a array and written react element inside a array 
    ]);                                                              //[]--> elements inside this array are children for parent div
  console.log(header)
//ReactDOM.render(header,document.getElementById("root"))


//(2)create the same element using jsx
const header1 = (
        <div className='Title'>
         <h1>"This is Heading-1 using using jsx "</h1>
         <h2>"This is Heading-2 using using jsx"</h2>
         <h3>"This is Heading-3 using using jsx"</h3>
        </div>
       );
//ReactDOM.render(header1,document.getElementById("root"))

//(3)create a functional component of the same with jsx
const Header2 = () => {
    return (
        <div className='Title'>
            <h1>"This is Heading-1 using using functional component"</h1>
            <h2>"This is Heading-2 using using functional component"</h2>
            <h3>"This is Heading-3 using using functional component"</h3>
        </div>
    )
};

//ReactDOM.render(<Header2/>,document.getElementById("root"))


//(4)pass attributes into the tag in jsx
const header3 = (
    <div className='Title'>
        <h1 style={{color:"red"}}>"This is Heading-1 using using jsx "</h1>
        <h2 style={{color:"blue"}}>"This is Heading-2 using using jsx"</h2>
        <h3 style={{color:"green"}}>"This is Heading-3 using using jsx"</h3>
    </div>
)
//ReactDOM.render(header3,document.getElementById("root"))


//composition of component (App a component inside another)

const Header4 = () => {
    return(
        <h1>" adding a component inside another"</h1>,
        <Header2/>
    )
}   
//ReactDOM.render(<Header2/>,document.getElementById("root"))

//{<title component>},{<title component/>},{{<title component>}vs{</title component>}},

const Element = () => {
  return <h2 style={{ color: "red" }}>This Title Element</h2>;        // This is Title Component
}; 

const Header = () => {
  return (
    <div className="Title" key="title">
      <Element/>
      <Element></Element>
      </div>
  );
};

//ReactDOM.render(<Header/>,document.getElementById("root"))
