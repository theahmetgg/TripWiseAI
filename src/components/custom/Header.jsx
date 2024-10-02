import { Button } from "../ui/button";

function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center px-5">
      <img src="/logo.png" />
      <div>
        <Button>Kayıt Olun</Button>
      </div>
    </div>
  );
}

export default Header;
