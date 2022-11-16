import PropTypes from "prop-types";

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

MiniCard.propTypes = {
  icon: PropTypes.element,
  iconContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  title: PropTypes.string,
  legend: PropTypes.string,
};

export default MiniCard;
