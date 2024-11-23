import React from "react";

function Dropdown({ title, options, func }) {
  return (
    <div>
      <div className="select bg-zinc-900">
        <select
          defaultValue="0"
          onChange={func}
          name="format"
          id="format"
          className="bg-zinc-700 text-white  border border-zinc-700 rounded p-2"
        >
          <option value="0" disabled>
            {title}
          </option>
          {options.map((o, i) => (
            <option className="bg-zinc-700 text-white " key={i} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Dropdown;
