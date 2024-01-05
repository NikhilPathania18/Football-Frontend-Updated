import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

// const override: CSSProperties = {
//   display: "block",
//   margin: "0 auto",
//   borderColor: "red",
// };

function Spinner({size, color, className}) {
  let [loading, setLoading] = useState(true);

  return (
    <div className= {`sweet-loading ${className} `}>
      <ClipLoader
        color={color}
        loading={loading}
        // cssOverride={override}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;