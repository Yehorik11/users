const FilterInput = ({ value, onChange }) => {
  const handleFilter = (e) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className='w-full max-w-[450px] mx-auto'>
      <input
        type='text'
        value={value}
        onChange={handleFilter}
        placeholder='Type filter property'
        className='border-2 border-gray-200 dark:border-gray-600 outline-none rounded-md px-[15px] py-[6px] text-[18px] text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 bg-white dark:bg-gray-800 w-full mb-6'
      />
    </div>
  );
};

export { FilterInput };
