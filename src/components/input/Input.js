import './Input.scss';

const Input = ({type, plaseholder}) => {
    return (
        <div className=" mr-2">
            <input
                type={type}
                placeholder={plaseholder}
                className="datepicker booking_input booking_input_a booking_in hasDatepicker " />
        </div>
    )
}

export default Input;