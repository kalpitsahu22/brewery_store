import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useBrewery } from "../authentication/useBrewery";
import Spinner from "../../ui/Spinner";
import "./BreweryDetails.css";
import StarRating from "../../ui/StarRating";

function BreweryDetails() {
  const navigate = useNavigate();

  const { brewery, isLoading } = useBrewery();
  if (isLoading) return <Spinner />;

  return (
    <div className="details-card">
      {/* {brewery.id} */}
      <p
        style={{
          fontSize: "25px",
          display: "flex",
          color: "#5389a0",
          justifyContent: "center",
        }}
      >
        <strong>Name :</strong> {brewery?.name}
      </p>
      <p>
        <strong
          style={{
            color: "#5389a0",
          }}
        >
          City :
        </strong>{" "}
        {brewery?.city}
      </p>
      <p>
        <strong
          style={{
            color: "#5389a0",
          }}
        >
          Contact No :
        </strong>
        {brewery?.phone}
      </p>
      <p>
        <strong
          style={{
            color: "#5389a0",
          }}
        >
          Address :
        </strong>{" "}
        {brewery?.address_1}
      </p>
      <p>
        <strong
          style={{
            color: "#5389a0",
          }}
        >
          Country :
        </strong>{" "}
        {brewery?.country}
      </p>
      <p>
        <strong
          style={{
            color: "#5389a0",
          }}
        >
          Postal Code :
        </strong>{" "}
        {brewery?.postal_code}
      </p>

      <p>
        <strong
          style={{
            color: "#5389a0",
          }}
        >
          Website :
        </strong>{" "}
        {brewery?.website_url}
      </p>
      <StarRating />
      <button
        style={{
          fontSize: "18px",
          display: "flex",
          color: "#5389a0",
          padding: "8px 25px",
          borderRadius: "5px",
          border: "1px solid #5389a0",
          justifyContent: "center",
        }}
        onClick={() => {
          navigate("/search");
        }}
      >
        Back
      </button>
    </div>
  );
}

export default BreweryDetails;
