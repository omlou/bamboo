// myCodemirror.tsx
import React, { useRef, useEffect } from 'react';
import { basicSetup } from 'codemirror';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { markdown } from '@codemirror/lang-markdown'; // 引入语言包

const CodeMirror: React.FC = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const state = EditorState.create({
      doc: 'hello world！',
      extensions: [
        basicSetup,
        markdown(), // 在extensions中配置语言
      ],
    });
    const editor = new EditorView({
      state,
      parent: (editorRef.current as any),
    });
    return () => {
      editor.destroy();
    };
  }, []);
  return <div ref={editorRef}></div>;
};

export default CodeMirror;