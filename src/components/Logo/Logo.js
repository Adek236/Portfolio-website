import "./Logo.css";

const Logo = ({data}) => {
  return (
    <div className="logo">
      <h3>{data.title}</h3>
      <p>{data.p}</p>
    </div>
  );
};

export default Logo;
