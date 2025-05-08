import { Component } from 'react';

export default class UserCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { user } = this.props;

    return (
      <div className='py-[5px] h-full hover:shadow-lg transition-shadow duration-300 rounded-b-[5px]'>
        <div className='px-3 py-[5px] bg-gradient-to-r from-purple-700 to-indigo-400 text-white'>
          <div className='flex items-center space-x-4'>
            <div>
              <h2 className='text-xl font-bold'>{user.name}</h2>
              <p className='text-indigo-100'>@{user.username}</p>
            </div>
          </div>
        </div>
        <div className='px-3 py-[5px] pt-6 space-y-4 bg-white'>
          <div className='flex items-start space-x-3'>
            <div>
              <p className='text-sm font-medium text-gray-700'>Email</p>
              <p className='text-sm text-gray-600'>{user.email}</p>
            </div>
          </div>

          <div className='flex items-start space-x-3'>
            <div>
              <p className='text-sm font-medium text-gray-700'>Phone</p>
              <p className='text-sm text-gray-600'>{user.phone}</p>
            </div>
          </div>

          <div className='flex items-start space-x-3'>
            <div>
              <p className='text-sm font-medium text-gray-700'>Website</p>
              <p className='text-sm text-gray-600'>{user.website}</p>
            </div>
          </div>

          <div className='flex items-start space-x-3'>
            <div>
              <p className='text-sm font-medium text-gray-700'>Company</p>
              <p className='text-sm text-gray-600'>{user.company.name}</p>
              <p className='text-xs text-gray-500 italic'>
                "{user.company.catchPhrase}"
              </p>
            </div>
          </div>

          <div className='flex items-start space-x-3'>
            <div>
              <p className='text-sm font-medium text-gray-700'>Address</p>
              <p className='text-sm text-gray-600'>
                {user.address.street}, {user.address.suite}
                <br />
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
