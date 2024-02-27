const Filter = () => {
  return (
    <form className="flex flex-col items-center justify-center gap-6 py-5 mt-2 border-t border-b md:flex-row md:justify-between">
      <div className="flex items-center gap-6">
        <span>Filter by:</span>

        <div className="flex items-center py-1 border-b border-gray-400">
          <input
            type="radio" name="countries" value="USA" className="w-4 h-4 border-gray-300"
          />
          <label className="ml-2 text-sm font-medium text-black">
            Open
          </label>
        </div>
        <div className="flex items-center py-1 border-b border-gray-400">
          <select>
            <option value="">Price</option>
            <option value="lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="flex items-center py-1 border-b border-gray-400">
          <select>
            <option value="">Categories</option>
            <option value="1">Gorontalo</option>
            <option value="2">Medan</option>
            <option value="3">Surabaya</option>
            <option value="4">Aceh</option>
            <option value="5">Balikpapan</option>
            <option value="6">Bandung</option>
            <option value="7">Bali</option>
            <option value="8">Malang</option>
            <option value="9">Ternate</option>
          </select>
        </div>
      </div>
      <div>
        <button className="py-2 text-sm text-gray-400 border px-9">
          CLEAR ALL
        </button>
      </div>
    </form>
  );
};

export default Filter;
