const parent = React.createElement("div" , {id : "parent"} , 

   [React.createElement("div" , {
     id : "child1" }, 

     [ React.createElement("h1" , {} , "Hello I am inside the h1 tag"), 
       React.createElement("h2" , {} , "Hello I am inside the h2 tag") 
     ]),
      React.createElement("div" , {
        id : "child2" }, 
   
        [ React.createElement("h1" , {} , "Hello I am inside the h1 tag"), 
          React.createElement("h2" , {} , "Hello I am inside the h2 tag") 
        ])
    ]


);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


/* 
  <div id = "parent">
    <div id="child">
     <h1>Hello I am inside h1 element </h1>
     <h2> Hello I am inside the h2 element</h2>
    </div>

    <div id="child1">
     <h1>Hello I am inside h1 element </h1>
     <h2> Hello I am inside the h2 element</h2>
    </div>

    Wherever the root element of react is written it will be reflected only there 

*/

