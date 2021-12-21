import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="h-[100vh]">
        <div className="w-auto h-[calc(15*0.25rem)] flex justify-start items-center bg-gray-900">
          <h1 className="text-white text-center ml-5 text-xl">Hello World</h1>
        </div>
        <div className="h-[calc(100vh-3.75rem)] w-auto grid grid-cols-8 grid-rows-[repeat(8,minmax(0,1fr))] bg-gray-700">
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

export default App;
