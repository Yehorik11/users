import { Component } from 'react';

export default class FilterInput extends Component {
  handleFilter = (e) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  };
  render() {
    const { value } = this.props;
    return (
      <div className='w-full max-w-[450px] mx-auto'>
        <input
          type='text'
          value={value}
          onChange={this.handleFilter}
          placeholder='Type filter property'
          className='border-2 border-gray-200 outline-none rounded-md px-[15px] py-[6px] text-[18px] w-full mb-6'
        />
      </div>
    );
  }
}
