import { connect, } from "react-redux";

export default function withRedux(mapStateToProps, mapDispatchToProps, Component) {
    return connect(mapStateToProps, mapDispatchToProps, Component);
};
