import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img 
          src="/lovable-uploads/76dacefe-9b25-4f6d-9697-bba1e60e81c7.png" 
          alt="Bemobiles" 
          className="h-8"
        />
      </Link>
    </div>
  );
};