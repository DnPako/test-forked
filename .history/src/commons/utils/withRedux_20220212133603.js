import { connect, } from "react-redux";

const withRedux = (mapStateToProps, mapDispatchToProps, Component) => (
    connect(mapStateToProps, mapDispatchToProps)(Component);
);

export default withRedux;
