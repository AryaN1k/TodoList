import { FaRegCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Todoitems = ({ text, id, iscomplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center gap-2 my-3">
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center gap-2 border-b border-slate-200 py-4"
      >
        {iscomplete ? (
          <TiTick className="text-green-700 text-xl " />
        ) : (
          <FaRegCircle className="text-green-700 text-xl" />
        )}
        <p className="text-zinc-100 tracking-tight ml-2">{text}</p>
      </div>
      <MdDelete
        onClick={() => {
          deleteTodo(id);
        }}
        className="hover:text-red-700 text-gray-400 duration-300 ease-in-out text-2xl cursor-pointer"
      />
    </div>
  );
};

export default Todoitems;
