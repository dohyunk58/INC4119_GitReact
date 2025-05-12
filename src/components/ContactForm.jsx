import React from "react";

const ContactForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 막기
    alert("메시지가 전송되었습니다!"); // alert 창 띄우기
    // 실제로는 여기서 서버로 데이터를 전송하는 로직을 구현해야 합니다.
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label>이름:</label>
        <input type="text" />
      </div>
      <div>
        <label>이메일:</label>
        <input type="email" />
      </div>
      <div>
        <label>메시지:</label>
        <textarea></textarea>
      </div>
      <button type="submit">보내기</button>
    </form>
  );
};

export default ContactForm; 