import './text.scss'

function Text() {
    return (
        <>
        <section className="text">
            <div className="container">
                <h2 className="text__heading">Select project,</h2>
                <span className="text__text">check dependencies, checkout branch, view <br /> readme.txt, install tools, run build, run test,</span>
                <span className="text__heading">start coding.</span>
            </div>
        </section>
        </>
    )
}

export default Text;