// ✅ Creating a single <h1> element using React.createElement
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World from React!" // Children (text inside the h1)
);
// ✅ Rendering is commented out for now
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// ✅ Creating a nested structure using arrays of React elements
const parent = React.createElement("div", {
    id: "parent"
}, [
    // First child <div> with id 'child'
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "My name is Vanshika Thesiya"),
        React.createElement("h2", {}, "My name is Vanshika Thesiya")
    ]),
    // Second child <div> with id 'child1'
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "I am a Food Lover"),
        React.createElement("h2", {}, "I am a Food Lover")
    ])
]);
// ✅ Logs the React element structure to the console (virtual DOM object)
console.log(parent);
// ✅ Rendering the virtual DOM structure to the actual DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); // Injects the structure into the DOM element with id='root'

//# sourceMappingURL=Namaste React.6bd02f5a.js.map
