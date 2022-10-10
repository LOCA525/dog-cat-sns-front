import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { TextAreaProps } from '../../types/textareaTypes';

function TextArea(props: TextAreaProps<string>) {
  const { value, WrappedComponent, limit, maxRows } = props;
  const { setValue, onChange } = props;

  const [lineHeight, setLineHeight] = useState<number>(0); // 글자 높이 간격 px
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const textAreaElement = textAreaRef.current;

  const handleChange =
    onChange ??
    ((event: ChangeEvent<HTMLTextAreaElement>) => {
      const string = event.currentTarget.value;

      // 최대 줄바꿈 수 제한
      if (maxRows && textAreaElement) {
        const heightString = textAreaElement.style.height;
        const height = +heightString.slice(0, heightString.length - 2);
        const scrollHeight = textAreaElement.scrollHeight;
        const heightGap =
          lineHeight > 1 ? lineHeight : Math.abs(height - scrollHeight);

        if (heightGap > 1 && scrollHeight > heightGap * (maxRows + 1)) {
          setLineHeight(heightGap);
          setValue(string.slice(0, string.length - 1));
          return;
        }
      }

      // 글자수 제한
      if (limit) {
        setValue(string.slice(0, limit));
      } else {
        setValue(string);
      }
    });

  useEffect(() => {
    return () => {
      if (textAreaElement) {
        textAreaElement.style.height = '0px';
        const scrollHeight = textAreaElement.scrollHeight;
        textAreaElement.style.height = `${scrollHeight}px`;
      }
    };
  }, [textAreaElement, value]);

  return (
    (WrappedComponent && (
      <WrappedComponent ref={textAreaRef} onChange={handleChange} {...props} />
    )) || <textarea ref={textAreaRef} onChange={handleChange} {...props} />
  );
}

export default TextArea;
