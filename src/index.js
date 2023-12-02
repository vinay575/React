import React from  'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from './images/logo.jpg'


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
         <h1>"This is Heading-1 using jsx "</h1>
         <h2>"This is Heading-2 using jsx"</h2>
         <h3>"This is Heading-3 using jsx"</h3>
        </div>
       );
//ReactDOM.render(header1,document.getElementById("root"))

//(3)create a functional component of the same with jsx
const Header2 = () => {
    return (
        <div className='Title'>
            <h1>"This is Heading-1 using functional component"</h1>
            <h2>"This is Heading-2 using functional component"</h2>
            <h3>"This is Heading-3 using functional component"</h3>
        </div>
    )
};

//ReactDOM.render(<Header2/>,document.getElementById("root"))


//(4)pass attributes into the tag in jsx
const header3 = (
    <div className='Title'>
        <h1 style={{color:"red"}}>"This is Heading-1 using jsx "</h1>
        <h2 style={{color:"blue"}}>"This is Heading-2 using jsx"</h2>
        <h3 style={{color:"green"}}>"This is Heading-3 using jsx"</h3>
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

const Title = () => {
  return (
    <div className="Title" key="title">
      <Element/>
      <Element></Element>
      </div>
  );
};

//ReactDOM.render(<Title/>,document.getElementById("root"))

//create a header component from scratch using functional components with jsx;
//add a logo on left
//add a search bar in middle
//add user icon on right 
//add css to make it

const Header = () => {
  return (
    <>
      <div className='Header'>
        <div className='logo'>
        <img src={image} alt="Logo" height="100px" width= "100px"/>
        </div>
        <div className='search'>
          <input type='text' placeholder='Search Any Thing'></input>
          <button>Search</button>
        </div>
        <div className='icon'>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#ffde59" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<Header />, document.getElementById("root"));
