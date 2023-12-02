const pageContent = (
    <div>
        <img src="./icon.png" />
        <h1>Why Learning React?</h1>
        <ul>
            <li>It's popular</li>
            <li>It's in demand</li>
            <li>It's fun</li>
        </ul>
    </div>
)

ReactDOM.render(pageContent, document.getElementById('content'));

// Having single line ReactDOM.render() works, but multi-line doesn't work. Why?