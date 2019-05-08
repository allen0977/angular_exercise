export class User {
    id: string;
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    role?: string;

    constructor(user) {
        {
            this.id = user.id;
            this.firstName = user.firstName || '';
            this.lastName = user.lastName || '';
            this.fullName = user.fullName || '';
            this.email = user.email || '';
            this.role = user.role || 'User';
        }
    }
}
export interface userManageObj {
    action: string;
    row: User;
}
