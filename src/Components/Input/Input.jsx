import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../features/TodoSlice';

export default function Input() {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      //payload => item
      dispatch(
        saveTodo({
          id: Date.now(),
          title: inputValue,
          done: false,
        })
      );
      setInputValue('');
      return;
    } else {
      alert('please add To do');
      return;
    }
  };
  return (
    <>
      <form className="w-full mx-auto space-y-3 py-5" onSubmit={handelSubmit}>
        <input
          type="text"
          className="w-full focus:outline-none  px-2 py-3 bg-slate-100 rounded-md"
          placeholder="To-Do"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-white block mx-auto text-xl rounded-md px-12 hover:text-white hover:bg-black duration-500  transition-colors py-2 font-medium border-2 border-solid"
        >
          Add
        </button>
      </form>
    </>
  );
}
