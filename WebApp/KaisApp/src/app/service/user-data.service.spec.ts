import {TestBed, async, inject} from '@angular/core/testing';
import {User} from './../_models/user';
import {UserDataService} from './user-data.service';

describe('UserDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserDataService]
    });
  });

  it('should ...', inject([UserDataService], (service: UserDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllUsers()', () => {

    it('should return an empty array by default', inject([UserDataService], (service: UserDataService) => {
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should return all users', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({username: 'Hello 1', token: false});
      let user2 = new User({username: 'Hello 2', token: true});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });

  describe('#save(user)', () => {

    it('should automatically assign an incrementing id', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({username: 'Hello 1', token: false});
      let user2 = new User({username: 'Hello 2', token: true});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getUserById(1)).toEqual(user1);
      expect(service.getUserById(2)).toEqual(user2);
    }));

  });

  describe('#deleteUser(id)', () => {

    it('should remove user with the corresponding id', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({username: 'Hello 1', token: false});
      let user2 = new User({username: 'Hello 2', token: true});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUser(1);
      expect(service.getAllUsers()).toEqual([user2]);
      service.deleteUser(2);
      expect(service.getAllUsers()).toEqual([]);
    }));

    it('should not removing anything if user with corresponding id is not found', inject([UserDataService], (service: UserDataService) => {
      let user1 = new User({username: 'Hello 1', token: false});
      let user2 = new User({username: 'Hello 2', token: true});
      service.addUser(user1);
      service.addUser(user2);
      expect(service.getAllUsers()).toEqual([user1, user2]);
      service.deleteUser(3);
      expect(service.getAllUsers()).toEqual([user1, user2]);
    }));

  });

  describe('#updateUser(id, values)', () => {

    it('should return user with the corresponding id and updated data', inject([UserDataService], (service: UserDataService) => {
      let user = new User({username: 'Hello 1', token: false});
      service.addUser(user);
      let updatedUser = service.updateUser(1, {
        username: 'new username'
      });
      expect(updatedUser.username).toEqual('new username');
    }));

    it('should return null if user is not found', inject([UserDataService], (service: UserDataService) => {
      let user = new User({username: 'Hello 1', token: false});
      service.addUser(user);
      let updatedUser = service.updateUser(2, {
        username: 'new username'
      });
      expect(updatedUser).toEqual(null);
    }));

  });

  describe('#toggleUserToken(user)', () => {

    it('should return the updated user with inverse token status', inject([UserDataService], (service: UserDataService) => {
      let user = new User({username: 'Hello 1', token: false});
      service.addUser(user);
      let updatedUser = service.toggleUserToken(user);
      expect(updatedUser.token).toEqual(true);
      service.toggleUserToken(user);
      expect(updatedUser.token).toEqual(false);
    }));

  });

});
