//impt - es7 extension import proptypes
// rafce - arrow function boilerplate es7
import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header>
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//variable styles
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
