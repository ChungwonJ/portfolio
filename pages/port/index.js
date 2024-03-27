import Star from '@/components/organism/Star'
import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

function Port() {
  return (
    <>
      <div id='port'>
        <Star />
        <div className='portTxt'>
          <p>안녕하세요 정청원입니다 , 저는</p>
          <ReactTypingEffect
            text={["프론트엔드 개발자입니다", "웹 개발자입니다", "리엑트 개발자입니다"]}
            cursorRenderer={cursor => <h1>{cursor}</h1>}
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
      </div>
    </>
  )
}

export default Port