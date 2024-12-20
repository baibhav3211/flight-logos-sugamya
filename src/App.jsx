import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import data from "./airlines.json";

const ImagePage = ({ iataCode }) => {
    // Find the airline based on the IATA code
    const airline = data.data.find((airline) => airline.iata_code === iataCode);

    // Render a not-found message if no airline matches the IATA code
    if (!airline) {
        return <h2>Image not found for IATA code: {iataCode}</h2>;
    }

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            {/* <h2>{airline.name}</h2> */}
            <img src={airline.logo} alt={airline.name} style={{ maxWidth: "300px" }} />
        </div>
    );
};

// Define PropTypes for ImagePage
ImagePage.propTypes = {
    iataCode: PropTypes.string.isRequired,
};

// The main app component
const App = () => {
    const RouteRenderer = () => {
        const { iataCode } = useParams();
        return <ImagePage iataCode={iataCode} />;
    };

    return (
        <Router>
            <Routes>
                {/* <Route path="/" element={<h2>Enter an IATA Code in the URL</h2>} /> */}
                <Route path="/:iataCode" element={<RouteRenderer />} />
            </Routes>
        </Router>
    );
};

export default App;
