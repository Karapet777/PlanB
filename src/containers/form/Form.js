
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
    CgangeChackIn,
    CgangeCheckOf,
    CgangeChildren,
    CgangeRoom,
} from "../../store/actions";

import Input from '../../components/input/Input';
import './Form.scss';


class Form extends React.Component {
    render() {
        const {
            chackIn,
            checkOf,
            children,
            room,
            CgangeChackIn,
            CgangeCheckOf,
            CgangeChildren,
            CgangeRoom,
        } = this.props;

        return (
            <form className="booking_form">
                <p className="text-white mb-2">{`${chackIn} ${checkOf} ${children} ${room} `}</p>
                <div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
                    <div className="booking_input_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
                        <Input
                            type="text"
                            plaseholder="Check in"
                            value={chackIn}
                            onChange={(event) => CgangeChackIn(event.target.value)}
                        />
                        <Input
                            type="text"
                            plaseholder="Check out"
                            value={checkOf}
                            onChange={(event) => CgangeCheckOf(event.target.value)}
                        />
                        <Input
                            type="text"
                            plaseholder="Children"
                            value={children}
                            onChange={(event) => CgangeChildren(event.target.value)}
                        />
                        <Input
                            type="text"
                            plaseholder="Room"
                            value={room}
                            onChange={(event) => CgangeRoom(event.target.value)}
                        />
                        <button className="booking_button ">  Book Now </button>

                    </div>
                </div>
            </form>
        )
    }
}

const putStateToProps = (state) => {
    return {
        chackIn: state.chackIn,
        checkOf: state.checkOf,
        children: state.children,
        room: state.room,
    };
};

const putActionsToProps = (dispatch) => {
    return {
        CgangeChackIn: bindActionCreators(CgangeChackIn, dispatch),
        CgangeCheckOf: bindActionCreators(CgangeCheckOf, dispatch),
        CgangeChildren: bindActionCreators(CgangeChildren, dispatch),
        CgangeRoom: bindActionCreators(CgangeRoom, dispatch),
    };
};
export default connect(putStateToProps, putActionsToProps)(Form);