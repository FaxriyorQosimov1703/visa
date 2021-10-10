import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
function Details_2() {
    const [date, setDate] = useState('2021-10-10');
    console.log(date);
    const onClickDateInput = () => {
        let date1 = new Date();
        let year = date1.getFullYear();
        let month = date1.getMonth()+1;
        let todayDate = String(date1.getDate()).padStart(2,'0');
        let datePattern = year + '-' + month + '-' + todayDate;
        setDate(datePattern)
    }
    return (
        <div className="visa_section">

            <div className="d_flex mb-30">
                <div className=" select select_2 ">
                    <label htmlFor="head_input_1" className="d_block label" >Имя</label>
                    {/* <div className="select_append"> */}
                        <input type="text" className="select_input text_input" placeholder="Введите Имя" />

                    {/* </div> */}
                </div>

                <div className="select select_2">
                    <label htmlFor="head_input_1" className="d_block label">Фамилия</label>
                    {/* <div className="select_append"> */}
                    <input type="text" className="select_input text_input" placeholder="Введите фамилию" />
                    {/* </div> */}
                </div>

                <div className="select select_2 born">
                        <div className="date_input date_input_2">
                            <label htmlFor="middle_input_1" className="d_block label">Дата рождения</label>
                            <div className="select_append " onClick={onClickDateInput}>
                                <input type="date"  value={date} name="" id="middle_input_1" className="select_input" />
                            </div>
                        </div>
                </div>

                <div className="select select_2">
                    <label htmlFor="middle_input_3" className="d_block label">Гражданство</label>
                    <div className="select_append">
                        <select className='select_input' name="salom" id="middle_input_3">
                            <option value="Однократный заезд">Однократный заезд</option>
                            <option value="Однократный заезд">Однократный заезд</option>
                            <option value="Однократный заезд">Однократный заезд</option>
                            <option value="Однократный заезд">Однократный заезд</option>
                            <option value="Однократный заезд">Однократный заезд</option>
                        </select>

                    </div>
                </div>
            </div>

            <div className=" d_flex mb-30">
                <div className="visa_section_footer_left visa_section_footer_left_2">
                    <div className="visa_section_footer_left_header">
                        <div className="visa_section_footer_header_left">
                            <h3>Виза</h3>
                            <h5>Страна: Россия</h5>
                            <h5>визы: Транзитная виза</h5>
                        </div>
                        <div className="visa_section_footer_header_right">
                            <h5>Въезд: 11.12.2019</h5>
                            <h5> Время обработки: 3-4 рабочих дня</h5>
                        </div>
                    </div>
                    <h4>Предварительная  </h4>
                    <div className="price_number">
                        <h4 className='price'>стоимость:</h4>
                        <h4 className="price_number">€10.99</h4>
                    </div>
                </div>
            </div>

            <div className="visa_section_footer d_flex f_left">
                <div className="visa_section_footer_right visa_section_footer_right_blue">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <button><IoIosArrowBack className="arrow_right_icon" /> Вернуться  </button>
                    </Link>
                </div>
                <div className="visa_section_footer_right">
                    <button>Готово  <IoIosArrowForward className="arrow_right_icon" /></button>
                </div>
            </div>
        </div>
    )
}

export default Details_2

