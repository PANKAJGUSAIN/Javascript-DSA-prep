const customRenderer = (reactElement, mainContainer) => {
    // CREATE A DOM ELEMENT
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href' , reactElement.props.href);
    domElement.setAttribute('target' , reactElement.props.traget);

    // APPEND THE DOM ELEMENT TO THE INDEX.HTML
    mainContainer.appendChild(domElement);
}



const mainContainer = document.getElementById('root');


const reactElement = {
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    children: 'Click  me to visit'
}

customRenderer(reactElement, mainContainer);

