import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function SendEmail() {
  const form = useRef();
  const [selectedItem, setSelectedItem] = useState('아이폰1');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const options = [
    { value: '아이폰1', name: '아이폰1' },
    { value: '아이폰2', name: '아이폰2' },
    { value: '아이폰3', name: '아이폰3' }
  ];

  const [isLoading, setIsLoading] = useState(false);

  const inputFields = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: '전화번호', type: 'text', name: 'phone' },
  ];

  const handleSelectChange = (e) => {
    setSelectedItem(e.target.value);
  };

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
    <form ref={form} onSubmit={sendEmail}>
      {inputFields.map((item, index) => (
        <div key={index}>
          <label>{item.label}</label>
          <input
            type={item.type}
            name={item.name}
            value={formData[item.name]}
            onChange={handleInputChange}
          />
        </div>
      ))}

      <select name="select" id="" value={selectedItem} onChange={handleSelectChange}>
        {options.map((item, index) => (
          <option
            key={index}
            value={item.value}
          >
            {item.name}
          </option>
        ))}
      </select>
      <button type="submit" value="Send" >Send</button>
      {isLoading && (<p>로딩중</p>)}
    </form>
  );
};