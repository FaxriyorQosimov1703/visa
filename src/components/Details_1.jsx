import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import {IoIosArrowForward } from 'react-icons/io'
function Details() {
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
                <div className=" select ">
                    <label htmlFor="head_input_1" className="d_block label" >Выберите страну</label>
                    <div className="select_append">
                        <select className='select_input' name="salom" id="head_input_1">
                            <option value="Россия">Россия</option>
                            <option value="Россия">Россия</option>
                            <option value="Россия">Россия</option>
                            <option value="Россия">Россия</option>
                            <option value="Россия">Россия</option>
                        </select>

                    </div>
                </div>

                <div className="select">
                    <label htmlFor="head_input_1" className="d_block label">Тип визы</label>
                    <div className="select_append">
                        <select className='select_input' name="salom" id="head_input_1">
                            <option value="Деловая виза">Деловая виза</option>
                            <option value="Деловая виза">Деловая виза</option>
                            <option value="Деловая виза">Деловая виза</option>
                            <option value="Деловая виза">Деловая виза</option>
                            <option value="Деловая виза">Деловая виза</option>
                        </select>

                    </div>
                </div>
            </div>

            <div className=" d_flex mb-30">
                <div className="d_flex_between select">
                        <div className="date_input">
                            <label htmlFor="middle_input_1" className="d_block label">Въезд</label>
                            <div className="select_append " onClick={onClickDateInput}>
                                <input type="date"  value={date} name="" id="middle_input_1" className="select_input" />
                            </div>
                        </div>
                        <div className=" date_input">
                            <label htmlFor="middle_input_2" className="d_block label">Выезд</label>
                            <div className="select_append">
                                <input type="date"  value={date} name="" id="date" onClick={onClickDateInput} className="select_input" />
                            </div>
                        </div>

                </div>

                <div className="select">
                    <label htmlFor="middle_input_3" className="d_block label">Количество заездов</label>
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


                <div className="select select_down">
                    <label htmlFor="middle_input_4" className="d_block label">Время обработки</label>
                    <div className="select_append">
                        <select className='select_input' name="salom" id="middle_input_4">
                            <option value="15-30 рабочих дней">15-30 рабочих дней</option>
                            <option value="15-30 рабочих дней">15-30 рабочих дней</option>
                            <option value="15-30 рабочих дней">15-30 рабочих дней</option>
                            <option value="15-30 рабочих дней">15-30 рабочих дней</option>
                            <option value="15-30 рабочих дней">15-30 рабочих дней</option>
                        </select>

                    </div>
                </div>
            </div>

            <div className="visa_section_footer d_flex_between_1">
                <div className="visa_section_footer_left">
                    <h4>Предварительная  </h4>
                    <div>
                        <h4>стоимость:</h4>
                        <h4>€10.99</h4>
                    </div>
                </div>
                <div className="visa_section_footer_right">
                    <Link to='/path_2' style={{textDecoration:'none'}}>
                        <button>Продолжить  <IoIosArrowForward className="arrow_right_icon" /></button>
                    
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Details
