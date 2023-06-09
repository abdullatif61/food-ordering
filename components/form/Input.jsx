import React from "react";

const Input = (props) => {
  const {type,placeholder,...gelen} = props;
  return (
    <div className="w-full ">
      <label className="relative block cursor-text w-full  ">
        <input
          type={type}
          className="h-14 w-full border border-primary outline-none px-4 peer pt-2 rounded-lg"
          required
          {...gelen}

        />
        <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
          {placeholder}
        </span>
      </label>
    </div>
  );
};

export default Input;
