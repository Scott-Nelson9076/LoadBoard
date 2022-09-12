import image from "../img/OIP.jpg"

const Banner = (props) => {
    return (
        <nav style ={{backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain", height: 200 , width:1400}} className="navbar navbar-expand-xl d-flex flex-column bg-danger">
            <div className="my-auto">
                <h1 className="display-4 font-weight-bold">Load Board</h1>
            </div>
        </nav>
    )
}

export default Banner