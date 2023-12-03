// const pageContent = (
//     <div>
//         <img src="./icon.png" width="40" alt={"logo of my blog"}/>
//         <h1>Why Learning React?</h1>
//         <ul>
//             <li>It's popular</li>
//             <li>It's in demand</li>
//             <li>It's fun</li>
//         </ul>
//     </div>
// )
//
// ReactDOM.render(pageContent, document.getElementById('content'));

// Having single line ReactDOM.render() works, but multi-line doesn't work. Why?

function InfoPage() {
    return (
        <div>
            <header>
                <nav>
                    <img src={"./icon.png"} width={40} />
                </nav>
            </header>
            <ul>
                <li>I want to improve my blog's appearance.</li>
                <li>I want to be prepared for work.</li>
            </ul>
            <footer>
                2023. Li Developed. All Rights Reserved.
            </footer>
        </div>
    )
}

ReactDOM.render(<InfoPage></InfoPage>, document.getElementById("content"));

// create a header component
function Header() {
    return (
        <div>
            <header>
                <nav>
                    <img src={"./icon.png"} width={40} />
                </nav>
            </header>
        </div>
    )
}

// footer component
function Footer() {
    return (
        <div>
            <footer>
                2023. Li Developed. All Rights Reserved.
            </footer>
        </div>
    )
}

// simplify the InfoPage component
function InfoPage() {
    return (
        <div>
            <Header />
            <ul>
                <li>I want to improve my blog's appearance.</li>
                <li>I want to be prepared for work.</li>
            </ul>
            <footer>
                2023. Li Developed. All Rights Reserved.
            </footer>
        </div>
    )
}