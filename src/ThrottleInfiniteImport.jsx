import React from "react";
import _ from "lodash";
import "./demo.css";
import { Link } from "react-router-dom";

class Th extends React.Component {
  constructor(props) {
    super(props);
    this.scrollEvent = _.throttle(() => {
      this.check_if_needs_more_content();
    }, 500);
    this.state = {
      show: [0, 0, 0, 0],
      pixelsFromWindowBottomToBottom: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.scrollEvent);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEvent);
  }

  check_if_needs_more_content = () => {
    let pixelsFromWindowBottomToBottom =
      0 + window.outerHeight - window.scrollY - window.innerHeight;

    if (
      pixelsFromWindowBottomToBottom <
        this.state.pixelsFromWindowBottomToBottom &&
      pixelsFromWindowBottomToBottom < 200
    ) {
      // Here it would go an ajax request
      this.setState({
        show: [...this.state.show, 0],
        pixelsFromWindowBottomToBottom
      });
    }
  };
  throttleJs = (func, wait) => {
    var timeout,
      context,
      args,
      startTime = Date.parse(new Date());

    return function() {
      var curTime = Date.parse(new Date());
      var remaining = wait - (curTime - startTime);

      context = this;
      args = arguments;

      clearTimeout(timeout);

      if (remaining <= 0) {
        func.apply(context, args);
        startTime = Date.parse(new Date());
      } else {
        timeout = setTimeout(func, remaining);
      }
    };
  };
  render() {
    return (
      <React.Fragment>
        <Link to="/de">Th</Link>
        <h1>Infinite scrolling throttled</h1>
        {this.state.show.map((i, index) => {
          return (
            <div className="item color-4" key={index}>
              {index}
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
export default Th;
