
starting of react ->


const heading = React.createElement("h1",{id: "heading"},"Hello aakash from react!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

--------------------------------------------------

const parent = React.createElement("div",
    {id:"parent"},
    React.createElement("div",{id:"child"},
        [
            React.createElement("h1",{},"Im h1 tag"),
            React.createElement("h2",{},"Im h2 tag"),
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

--------------------------------------------------

# Namaste React 🚀

--
# Parcel
-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm -written in C++
-Caching -Faster Builds
-Image Optimization
-Minification
-Bundling
-Compress
-consistent hashing
-code splitting
-differential bundling - support older browsers
-diagnostic
-error handling
-https
-tree shaking - remove unused code
-different dev and prod bundles