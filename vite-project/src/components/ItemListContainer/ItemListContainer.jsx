import { useParams } from "react-router-dom";

const recordList = [
  {
    id: 1,
    bandName: "Metallica",
    record: "Master of puppets",
    category: "Thrash metal",
  },
  { id: 2, bandName: "Rush", 
     record: "Moving pictures",
     category: "Rock" 
  },
  
   
  { id: 3, bandName: "Judas Priest",
    record: "Firepower",
    category: "Metal" },
  {
    id: 4,
    bandName: "Black Sabbath",
    record: "Heaven & hell",
    category: "Metal",
  },
  {
    id: 5,
    bandName: "Megadeth",
    record: "Rust in peace",
    category: "Thrash metal",
  },
  {
    id: 6,
    bandName: "Deep purple",
    record: "Perfect strangers",
    category: "Rock",
  },
];

const ItemListContainer = () => {
  const { categoryId } = useParams();
  console.log(categoryId);

  const filteredRecords = categoryId
    ? recordList.filter((record) => record.category === categoryId)
    : recordList;

  return (
    <>
      <h2>Todos los productos</h2>
      <div className="card-container">
        {filteredRecords.map((record) => (
          <div
            className="card"
            style={{ width: "18rem", margin: "1rem" }}
            key={record.id}
          >
            <img src="..." className="card-img-top" alt="Placeholder" />
            <div className="card-body">
              <h5 className="card-title">{record.bandName}</h5>
              <p className="card-text">{record.record}</p>
              <a href="#" className="btn btn-primary">
                Ver más
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ItemListContainer;
