import './Input.scss';

const Input = ( { value,type, plaseholder,onChange }) => {

    return (
        <div className=" mr-2">
            <input
                type={type}
                placeholder={plaseholder}
                value={value}
                onChange={onChange}
                className="datepicker booking_input booking_input_a booking_in hasDatepicker " />
        </div>
    )
}

export default Input;