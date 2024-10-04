import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">Seyahatinizi Birlikte Planlayalım!</h2>
      <p className="mt-3 text-gray-500 text-xl">
        Sadece birkaç temel bilgi verin, gezi planlayıcımız tercihlerinize göre
        kişiselleştirilmiş bir güzergah oluşturacaktır.
      </p>

      <div className="mt-20">
        <div>
          <h2 className="text-xl my-3 font-medium">
            Tercih ettiğiniz yer neresidir?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
          />
        </div>
      </div>
    </div>
  );
}

export default CreateTrip;
