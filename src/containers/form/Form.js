

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

import './Form.scss';

const Form = () => {
    const booking_button  = {
        width: "152px",
        marginLeft: "20px",
        outline: "none",
    };
    return (
        <form className="booking_form">
            <div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
                <div className="booking_input_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
                    <Input type="text" plaseholder="Check in"/>
                    <Input type="text" plaseholder="Check out"/>
                    <Input type="text" plaseholder="Children"/>
                    <Input type="text" plaseholder="Room"/>
                    <Button style={booking_button }>  Book Now </Button>  
                </div>
            </div>
        </form>
    )
}

export default Form;