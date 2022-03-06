import "./MiniCard.scss";

function MiniCard({ icon, iconContainerStyle, title, legend }) {
  return (
    <div className="miniCard">
      <div className="miniCard__iconContainer" style={iconContainerStyle}>
        {icon}
      </div>
      <div className="miniCard__content">
        <h3>{title}</h3>
        <p>{legend}</p>
      </div>
    </div>
  );
}

export default MiniCard;
