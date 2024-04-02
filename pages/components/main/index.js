import StarBackground from '@/components/atoms/StarBackground'
import ReactTypingEffect from 'react-typing-effect';
import React from 'react'
import PageActive from '@/components/atoms/PageActive';

function Main() {
  return (
    <>
      <StarBackground />
      <div className='portTxt'>
        <p>안녕하세요 정청원입니다 , 저는</p>
        <ReactTypingEffect
          text={["프론트엔드 개발자입니다", "웹 개발자입니다", "리엑트 개발자입니다"]}
          cursorRenderer={cursor => <h1 className='typingCursor'>{cursor}</h1>}
          speed={100}
          eraseSpeed={100}
          eraseDelay={2000}
          typingDelay={300}
          displayTextRenderer={(text, i) => {
            return (
              <p>
                {text.split('').map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span
                      key={key}
                      style={i % 2 === 0 ? { color: 'yellow' } : {}}
                    >{char}</span>
                  );
                })}
              </p>
            );
          }}
        />
      </div>
      <PageActive/>
    </>
  )
}

export default Main