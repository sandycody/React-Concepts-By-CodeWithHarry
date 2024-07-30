

function App() {
  let names = ["Sandeep", "Tegi", "Navaan"];
  let sequence = [1, 2, ...names]; //Used Spread operator to concatenate or put names array into sequence array

  let myObj = {
    firstName: "Karan",
    lastName: "Aujla"
  }

  let number = {
    SNo: 1,
    ...myObj, //Used Spread Operator to access myObj object
    age: 27
  }

  // console.log(JSON.stringify(number)); // The object is converted into JSON String

  const sumNumbers = (a, b, c) => {
    return a + b + c;
  }

  const nums = [10, 20, 50];
  console.log(sumNumbers(...nums));
  console.log(sumNumbers.apply(null, nums));

  return (
    <>
      <h1>Spread Operator in react</h1>
      <p>{`The array is [${sequence}]`}</p>
      <p>{`The object is ${JSON.stringify(number)}`}</p>
    </>
  )
}

export default App;
