
import PaginationControlled from "../components/Pagination";

export default function Home() {
  return (
    <div className="content">
      <h1 className="beerTitle">Beers</h1>
      <PaginationControlled />
    </div>
  );
}

