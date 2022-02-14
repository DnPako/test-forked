import { connect, } from "react-redux";

export default function withRedux(mapStateToProps, mapDispatchToProps, Component) {
    connect(mapStateToProps, mapDispatchToProps, Component);
};
