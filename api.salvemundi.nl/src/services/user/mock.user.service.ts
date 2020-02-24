import { User } from '../../entities/core/user.entity';
import { IUserService } from './iuser.service';
import { Scope } from '../../entities/core/scope.entity';
import { BaseEntity, Entity } from 'typeorm';

const randomUser: User = new User();
randomUser.id = 1;
randomUser.pcn = 'i123456';
randomUser.firstName = 'Random';
randomUser.lastName = 'User';
randomUser.birthday = new Date(1990, 1, 1);
randomUser.address = 'Rachelsmolen 1';
randomUser.postalcode = '5612 MA';
randomUser.city = 'Eindhoven';
randomUser.country = 'Nederland';
randomUser.phoneNumber = '+31 6 12346789';
randomUser.email = 'admin@gmail.com';
randomUser.password = 'admin';
randomUser.registeredSince = new Date();
randomUser.scopes = [
    new Scope('user:read', 'Lid bekijken', 1),
    new Scope('user:write', 'Lid bewerken', 2),
    new Scope('user:delete', 'Lid verwijderen', 3),
    new Scope('committee:write', 'Commissies bewerken', 4),
    new Scope('committee:delete', 'Commissies verwijderen', 5),
];

export default randomUser;
export class MockUserService implements IUserService {
    readAll(skip: number, take: number): Promise<User[]> {
        return new Promise<User[]>((resolve) => {
            resolve([randomUser]);
        });
    }

    readOne(id: string | number): Promise<User> {
       return new Promise<User>((resolve) => {
            if (id === 1) {
                resolve(randomUser);

            } else {
                resolve(undefined);
            }
        });
    }

    delete<T extends BaseEntity>(entity: T): Promise<T> {
        return new Promise<T>((resolve) => {
            resolve(entity);
        });
    }

    save<T extends BaseEntity>(entity: T): Promise<T> {
        return new Promise<T>((resolve) => {
            resolve(entity);
        });
    }

    exists(email: string): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            resolve(email === randomUser.email);
        });
    }
}
