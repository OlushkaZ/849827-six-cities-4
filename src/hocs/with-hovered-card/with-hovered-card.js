import React from "react";

const withHoveredCard = (Component) => {
  class WithHoveredCard extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        hoveredCardId: -1,
      };
      this._handleHoveredCardChange =
        this._handleHoveredCardChange.bind(this);
    }
    _handleHoveredCardChange(id) {
      this.setState({hoveredCardId: id});
    }
    render() {
      return (
        <Component
          {...this.props}
          hoveredCardId={this.state.hoveredCardId}
          onUserHover={this._handleHoveredCardChange}
        />
      );
    }
  }
  return WithHoveredCard;
};
export default withHoveredCard;
