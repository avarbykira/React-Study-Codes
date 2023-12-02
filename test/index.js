// Link: https://www.youtube.com/watch?v=bMknfKXIFA8

// Hello World
ReactDOM.render(<h1>Hello, world!</h1>, document.getElementById('root'));

// Learning Function
function info() {
    return (
        <div>
            <h1>I am learning React!</h1>
        </div>
    );
}

ReactDOM.render(info(), document.getElementById('root'));

ReactDOM.render(
    <div>
        <h1>Hi, I am learning React!</h1>
        <p>This is my third day.</p>
    </div>, 
    document.getElementById('root')
);

// write a menu using React
const menu = (
    <div>
        <h1>Menu</h1>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>
    </div>
)

document.getElementById('root').append(menu);
// ReactDOM.render(menu, document.getElementById('root'));

