

import Form from '../../containers/form/Form';
import './HomContent.scss';

const  HomeContent = () => {
    return (
        <div className="home_container">
            <div className="">
                <div className="row">
                    <div className="col">
                        <div className="home_content text-center">
                            <div className="home_title">A Luxury Stay</div>
                            <div className="booking_form_container">
                               <Form />
                            </div>
                        </div>
                    </div> 
               </div>
            </div>
        </div>
    )
}

export default HomeContent;