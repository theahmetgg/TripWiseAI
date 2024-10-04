import { Link } from "react-router-dom";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="flex flex-col items-center mx-4 md:mx-16 lg:mx-56 gap-6 md:gap-9">
      <h1 className="font-extrabold text-3xl md:text-4xl lg:text-[60px] text-center mt-8 md:mt-12 lg:mt-16 leading-tight lg:leading-[4rem]">
        <span className="bg-gradient-to-r from-[#59BAE1] to-[#65539E] text-transparent bg-clip-text">
          Bir Sonraki Maceranızı Yapay Zeka ile Keşfedin:
        </span>
        <br />
        Kişiselleştirilmiş Rotalar Parmaklarınızın Ucunda
      </h1>
      <p className="text-xl text-gray-500 text-center">
        Kişisel seyahat planlayıcınız ve gezi küratörünüz, ilgi alanlarınıza ve
        bütçenize göre özel rotalar oluşturur.
      </p>

      <Link to={"/create-trip"}>
        <Button>Hadi Başlayalım</Button>
      </Link>
    </div>
  );
}

export default Hero;
