import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useDispatch } from 'react-redux';
import { setIsLoading, setNotLoading } from '@/redux/slice/isLoadingSlice';

export default function SendEmail() {
  const dispatch = useDispatch();
  const form = useRef();

  const initialFormData = {
    name: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = '이름을 입력해주세요.';
    if (!formData.email) newErrors.email = '이메일을 입력해주세요.';
    if (!formData.message) newErrors.message = '메세지를 입력해주세요.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    dispatch(setIsLoading());
    emailjs.sendForm('service_zmjw1bj', 'template_to4e1y7', form.current, 'SsFeyiwkcLWPLI81b')
      .then((result) => {
        alert('전송에 성공하였습니다.'); 
        console.log(result.text);
        dispatch(setNotLoading());
        setFormData(initialFormData);
      }, (error) => {
        alert('전송에 실패하였습니다. 다시 시도해주세요.'); 
        console.log(error.text);
        dispatch(setNotLoading());
      });
  };

  return (
    <>
      <section>
        <form className='emailForm' ref={form} onSubmit={sendEmail}>
          <div className="inputGrid">
            <input
              className='inputActive'
              type="text"
              name="name"
              value={formData.name}
              placeholder='이름을 입력해주세요'
              onChange={handleInputChange}
            />
            <span className="focusBorder"><i></i></span>
          </div>
          {errors.name && <p className='emailErr'>{errors.name}</p>}

          <div className="inputGrid">
            <input
              className='inputActive'
              type="email"
              name="email"
              value={formData.email}
              placeholder='이메일을 입력해주세요'
              onChange={handleInputChange}
            />
            <span className="focusBorder"><i></i></span>
          </div>
          {errors.email && <p className='emailErr'>{errors.email}</p>}

          <div className="inputGrid">
            <textarea
              className='inputActive'
              name="message"
              value={formData.message}
              placeholder='메세지를 입력해주세요'
              onChange={handleInputChange}
            />
            <span className="focusBorder"><i></i></span>
          </div>
          {errors.message && <p className='emailErr'>{errors.message}</p>}

          <button className='sendEmailBtn' type="submit">Send</button>
        </form>
      </section>
    </>
  );
}
