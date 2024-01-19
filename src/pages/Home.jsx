import Cards from '../components/Cards'

const Home = () => {
    return (
        <div>
            <main className="site-main container px-5">

                <div className="col mb-4 d-flex justify-content-center align-items-center border">
                    <div className="p-2 flex-grow-1">
                        <div className="col-3">
                            <span className="fs-13 text-gray">Now Showing</span>
                        </div>
                        <div className="col-3">
                            <p className="h3">All Offers</p>
                        </div>
                    </div>
                    <div className="p-2">
                        <select defaultValue="" className="form-select" aria-label="Default select example">
                            <option value="0" selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <section className="section container-sm d-flex justify-content-between align-items-center flex-wrap">
                    <Cards />
                </section>

            </main>
        </div>
    )
}

export default Home