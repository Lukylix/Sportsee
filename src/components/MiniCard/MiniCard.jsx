import PropTypes from "prop-types";

import "./MiniCard.scss";

/**
 * Mini card component with its
 * icon, title and legend.
 * @type {React.FC}
 * @param {object} props - The MiniCard properties
 * @param {React.ReactElement} props.icon - The MiniCard icon
 * @param {React.CSSProperties} [props.iconContainerStyle] - The MiniCard icon container style
 * @param {string} props.title - The MiniCard title
 * @param {string} props.legend - The miniCard legend
 * @return {React.ReactElement}
 */
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
