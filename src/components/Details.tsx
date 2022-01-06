import bar from "../assets/bar.jpeg";
function Details() {
  return (
    <div className="px-12 pt-12 flex justify-between">
      <div>
        <h1 className="text-4xl font-semibold mb-4">Öffnungszeiten</h1>

        <p className="text-xl ">Montag: Geschlossen</p>
        <p className="text-xl ">Dienstag - Donnerstag: 17 - 23 Uhr</p>
        <p className="text-xl ">Freitag - Sonntag: 17 - 5 Uhr</p>

        <h1 className="text-4xl font-semibold mb-4 mt-8">Hier Finden sie uns</h1>

        <div className="flex gap-6 items-center">
          <div>
            <p className="text-xl ">Badenwürttemberg</p>
            <p className="text-xl ">Huttenheim 76661</p>
            <p className="text-xl ">Rheinstraße 2</p>
          </div>
          <button className="rounded-md bg-green-700 h-8 px-4 text-sm font-semibold">
            Google Maps
          </button>
        </div>
      </div>
      <div className="w-1/2 h-1/2">
        <img src={bar} alt="" className="rounded-md"/>
      </div>
    </div>
  );
}

export default Details;
