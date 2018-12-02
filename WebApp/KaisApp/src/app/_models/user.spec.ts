import { User } from './user';

describe('User', () => {

  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let user = new User({
        id: '1',
        username: 'testUserName',
        password: 'testPassword',

        firstName: 'testFirstName',
        lastName: 'testLastName',

        token: 'token'
    });
    expect(user.username).toEqual('testUserName');
    expect(user.password).toEqual('testPassword');
  });


});
