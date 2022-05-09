import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../api";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [parcels, setParcels] = useState([]);

  const fetchParcels = async () => {
    const res = await Api.get("/parcels");
    const data = await res.json();
    console.log(data);
    setParcels(data.parcels);
    setLoading(false);
  }

  const fetchParcelsById = async () => {
    const res = await Api.get(`/parcels/${2}`);
    const data = await res.json();
    console.log(data);
  }



  useEffect(() => {
    const _user = JSON.parse(localStorage.getItem("user"));
    if (typeof _user !== "undefined" || _user !== null) {
      setUser(_user);
    }

    fetchParcels();
    fetchParcelsById();

    if(_user === null) {
        navigate("/login");
    }
    
  }, [navigate]);
  return <div className="App">
    <h1>Home</h1>
    <h3> Welcome {user?.email} </h3>
    <h3> Parcels </h3>
    {loading ? <h1>Fetching parcels...</h1> : <ul>
      {parcels.map((parcel) => {
        return <li key={parcel.id}>
          <h4>{parcel.name}</h4>
          <p>{parcel.description}</p>
        </li>
      })}
    </ul>}
  </div>;
};

export default Home;
