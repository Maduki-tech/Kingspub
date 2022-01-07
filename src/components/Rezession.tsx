import pub from "../assets/backstage.jpeg";
import Kommentar from "./Kommentar";

function Rezession() {
  return (
    <div>
      <div className="px-12">
        <h1 className="left-1/2 relative text-4xl pb-8 w-10 text-slate-800">
          Rezessionen
        </h1>
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
      </div>
      <div className="bg-slate-500 h-44 relative flex justify-around items-center">
        <div className="gap-6 flex-col flex">
          <div>
            Inhaber: <br />
            Theodorus Karassavidis
          </div>

          <div>
            Ort: <br />
            Huttenheim 76661 Rheinstraße 2
          </div>
        </div>

        <div className="gap-6 flex-col flex">
          <div>
            Inhaber: <br />
            Theodorus Karassavidis
          </div>

          <div>
            Ort: <br />
            Huttenheim 76661 Rheinstraße 2
          </div>
        </div>

        <div className="gap-6 flex-col flex">
          <div>
            Erstellt von <br />
            David Schlüter
          </div>

          <div>
            Kontakt: <br />
            d.schlueter1011@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rezession;
