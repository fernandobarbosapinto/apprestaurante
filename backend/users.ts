export class User {
    constructor(public email: string, public name: string, private password: string) {}

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password
    }
}

export const users: {[key: string]: User} = {
    "sarah@gmail.com": new User('sarah@gmail.com', 'sarah', 'sarah1234'),
    "pedro@gmail.com": new User('pedro@gmail.com', 'pedro', 'pedro1234')
}
