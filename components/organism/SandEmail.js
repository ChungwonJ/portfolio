import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function SendEmail(props) {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { setIsLoading } = props;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.sendForm('service_zmjw1bj', 'template_to4e1y7', form.current, 'SsFeyiwkcLWPLI81b')
      .then((result) => {
        alert('전송에 성공하였습니다')
        console.log(result.text);
        setIsLoading(false);
      }, (error) => {
        alert('전송에 실패하였습니다. 다시 시도해주세요.')
        console.log(error.text);
        setIsLoading(false);
      });
  };

  return (
    <>
      <form
        className='emailForm'
        ref={form}
        onSubmit={sendEmail}
      >
        <div>
          <div className="inputGrid">
            <input
              className='inputActive'
              type="text"
              name="name"
              value={formData.name}
              placeholder='이름을 입력해주세요'
              onChange={handleInputChange}
            />
            <span className="focusBorder">
              <i></i>
            </span>
          </div>
        </div>
        <div>
          <div className="inputGrid">
            <input
              className='inputActive'
              type="email"
              name="email"
              value={formData.email}
              placeholder='이메일을 입력해주세요'
              onChange={handleInputChange}
            />
            <span className="focusBorder">
              <i></i>
            </span>
          </div>
        </div>
        <div>
          <div className="inputGrid">
            <textarea
              className='inputActive'
              type="text"
              name="message"
              value={formData.message}
              placeholder='메세지를 입력해주세요'
              onChange={handleInputChange}
            />
            <span className="focusBorder">
              <i></i>
            </span>
          </div>
        </div>
        <button
          className='button btnPush btnBlueGreen'
          type="submit"
          value="Send"
        >
          Send
        </button>
      </form>
    </>
  );
};