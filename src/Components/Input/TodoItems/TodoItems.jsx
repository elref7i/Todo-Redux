import { useDispatch } from 'react-redux';
import { setCheck } from '../../../features/TodoSlice';

export default function TodoItems({ info }) {
  const { title, done, id } = info;
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setCheck(id));
  };
  return (
    <>
      <div className="todo-items space-x-2 bg-slate-400 py-1 px-2 rounded-md ">
        <input
          id={id}
          type="checkbox"
          className="size-4 "
          checked={done}
          onChange={handleChange}
        />
        <label
          htmlFor={id}
          className={`text-nowrap text-xl font-bold ${
            done ? 'line-through ' : ''
          }`}
        >
          {title}
        </label>
      </div>
    </>
  );
}
