import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import IUser from '../models/user.model';
import { Observable, map, delay } from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private usersCollection: AngularFirestoreCollection<IUser>;
  public isAuthenticated$: Observable<boolean>;
  public isAuthenticatedWithDelay$: Observable<boolean>

  constructor(
    private auth: AngularFireAuth,
    private db: AngularFirestore,
    ) {
      this.usersCollection = db.collection('users')
      this.isAuthenticated$ = auth.user.pipe(
        map(user => !!user)
      );

      this.isAuthenticatedWithDelay$ = this.isAuthenticated$.pipe(
        delay(1000)
      );
    }

  public async createUser({ name, email, age, password, phoneNumber }: IUser) {
    if (!password) {
      throw new Error('Password not provided');
    }

    const userCred =
    await this.auth.createUserWithEmailAndPassword(email as string, password as string)

    if (!userCred.user) {
      throw new Error('User cannot be found');
    }

    await this.usersCollection.doc(userCred.user?.uid).
    set({ name, email, age, phoneNumber });

    await userCred.user.updateProfile({
      displayName: name
    })
  }
}
