import './Form.scss';
import Input from './input/Input';

const Form = () => {
    return (
        <form className="booking_form">
            <div className="d-flex flex-xl-row flex-column align-items-start justify-content-start">
                <div className="booking_input_container d-flex flex-lg-row flex-column align-items-start justify-content-start">
                    <Input />
                </div>
            </div>
        </form>
    )
}

export default Form;