import pub from "../assets/backstage.jpeg";
import Kommentar from "./Kommentar";

function Rezession() {
  return (
    <div className="px-12">
      <h1 className="left-1/2 relative text-4xl pb-8 w-10">Rezessionen</h1>
      <div className="flex justify-between gap-8 h-screen">
        <img src={pub} alt="" className="rounded-md w-1/2 h-2/3" />

        <div className="w-1/2 h-2/3 gap-4 flex flex-col overflow-y-scroll">
          <Kommentar />
          <Kommentar />
          <Kommentar />
          <Kommentar />
          <Kommentar />
          <Kommentar />
          <Kommentar />
          <Kommentar />
          <Kommentar />
        </div>

      </div>
		hello
    </div>
  );
}

export default Rezession;
